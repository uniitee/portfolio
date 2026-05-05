"use client";
import React, { useState, useEffect, useRef } from "react";
import { animate, scrambleText, set } from "animejs";
import FootstepTrail from "./FootstepTrail";
import Image from "next/image";


export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeout] = useState(false);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const indexRef = useRef(0);

  const quotes = [
    {
      text: "\"Just Vibe Code Your Website. AI can do it Better\"",
      author: "- Prompters",
    },
    {
      text: "\"Maglu\"",
      author: "- Uma Ghildiyal",
    },
  ];

  const play = () => {
    indexRef.current = (indexRef.current + 1) % quotes.length;

    const current = quotes[indexRef.current];

    if (quoteRef.current && authorRef.current) {
      animate(quoteRef.current, {
        innerHTML: scrambleText({
          text: current.text,
        }),
        duration: 800,
      });
      
      animate(authorRef.current, {
        innerHTML: scrambleText({
          text: current.author,
        }),
        duration: 800,
      });
    }
  };

  useEffect(()=> {
    const timeout = setTimeout(()=>{
      setFadeout(true);
      setTimeout(()=> setIsLoading(false), 1500);
    }, 6500);
    return () => clearTimeout(timeout);
  },[]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      play();
    }, 1900);
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;
  
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#111111] z-9999 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <FootstepTrail />
      <div className="flex flex-col justify-center items-center">
        <Image src="/uniitee.svg" alt="Logo" width={50} height={50} className="mb-8" />
          <div className="flex flex-col justify-center items-center max-w-7xl">
            <div
              ref={quoteRef}
              className="font-sacramento text-2xl text-white flex justify-start w-full"
            >
              "Just Vibe Code Your Website. AI can do it Better"
            </div>
            <div
              ref={authorRef}
              className="font-sacramento text-2xl text-white text-right justify-end w-full"
            >
              - Prompters
            </div>
          </div>
        </div>
      </div>
  );
}