"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowBigRightDash, Menu, Music, Music2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Navbar() {
  const[isVisible, setVisible] = useState(true);
  const[lastScrollY, setLastScrollY] = useState(0);
  const[isAtTop, setIsAtTop] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const musicRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(()=>{
    setIsMounted(true);
    setIsAtTop(window.scrollY < 50);
    setLastScrollY(window.scrollY);
  }, [])

  useEffect(()=>{
    if(!isMounted) return;

    const handleScroll = ()=>{
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);

      if(currentScrollY < lastScrollY){
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100){
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleClickToEnableSound = ()=>{
      if(!hoverSoundRef.current){
        hoverSoundRef.current = new Audio("/sounds/hover-click.mp3");
      }
      if(!musicRef.current){
        musicRef.current = new Audio("/sounds/cornfield-chase.mp3")
        musicRef.current.loop = true;
      }
      setSoundEnabled(true);
      document.removeEventListener("click", handleClickToEnableSound);
    };
    
  window.addEventListener("scroll", handleScroll, {passive:true});
  document.addEventListener("click", handleClickToEnableSound);

    return ()=>{
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickToEnableSound);
    }
  }, [lastScrollY, isMounted])

   const navItems = [
     { name: "HOME", href: "/" },
     {
       name: "BLOG",
       href: "/blogs",
       icon: <ArrowBigRightDash size={14} className="inline ml-1 mb-0.5" />,
     },
     {
       name: "PROJECTS",
       href: "/projects",
       icon: <ArrowBigRightDash size={14} className="inline ml-1 mb-0.5" />,
     },
   ];

   const playHoverSound = ()=>{
    if(soundEnabled && hoverSoundRef.current){
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play();
    }
   }

  const toggleMusic = async () => {
    if (!musicRef.current) return;

    try {
      if (isPlaying) {
        musicRef.current.pause();
      } else {
        await musicRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

   if(!isMounted) return null;

  return (
    <motion.nav
      className="fixed top-1 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      initial={{ y: -10 }}
      animate={{ y: isVisible ? 10 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Floating Navbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full 
          bg-zinc-600/10 backdrop-blur-lg border border-white/10 shadow-xl font-unigo"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onMouseEnter={playHoverSound}
          >
            <Image
              src="/uniitee.svg"
              alt="UniiTee Logo"
              width={26}
              height={26}
              className="transition-transform duration-300 hover:scale-110 object-contain bg-transparent"
              priority
            />
          </Link>

          <div className="flex items-center space-x-6">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_self"
                  onMouseEnter={playHoverSound}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  isAtTop
                    ? "text-white hover:text-black hover:bg-white"
                    : "text-white hover:text-black hover:bg-white"
                }`}
                >
                  {item.name}
                  {item.icon && item.icon}
                </Link>
              ))}
              {/* Music Toggle Button */}
              <button
                onClick={toggleMusic}
                className="p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white"
              >
                {isPlaying ? <Music2 size={18} /> : <Music size={18} />}
              </button>
              {/* </div> */}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>

      {/* Mobile Nav Items */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full md:hidden mt-4 px-2"
        >
          <div
            className="flex flex-col gap-2 p-4 rounded-2xl 
      bg-transparent backdrop-blur-xl shadow-xl "
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={playHoverSound}
                className="text-sm font-medium tracking-wider px-4 py-2 rounded-full 
          transition-all duration-300 flex items-center gap-1
          text-white/70 hover:text-black hover:bg-white"
              >
                {item.name}
                {item.icon && item.icon}
              </Link>
            ))}

            {/* Music Toggle */}
            <button
              onClick={toggleMusic}
              className="flex items-center gap-2 px-4 py-2 rounded-full 
        text-white/70 hover:text-black hover:bg-white transition-all duration-300"
            >
              {isPlaying ? <Music2 size={18} /> : <Music size={18} />}
              {isPlaying ? "Pause Music" : "Play Music"}
            </button>
          </div>
        </motion.div>
      )}
      {/* </div> */}
    </motion.nav>
  );
}
