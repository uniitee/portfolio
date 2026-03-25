"use client";
import FootstepTrail from "./FootstepTrail";
import { playHoverSound, enableHoverSound } from "@/lib/sounds";
import { useEffect } from "react";


const Hero = () => {

  useEffect(() => {
    const handleFirstClick = () => {
      enableHoverSound();
      document.removeEventListener("click", handleFirstClick);
    };
    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <div className="w-full h-svh flex flex-col items-center justify-center gap-4">
      <FootstepTrail />
      <h1 className={`text-md font-amita text-center relative text-zinc-400`}>
        ~ सत्यं परं धीमहि ~
      </h1>
      <div className="bg-[url('/rocket.jpg')] bg-no-repeat bg-cover mx-32 flex flex-col justify-center p-18 pb-4 rounded-xl gap-36">
        <div className="w-full px-8">
          <div className="grid grid-cols-2">
            <div className="">I AM</div>
            <div className="flex justify-end">OR AM I?</div>
          </div>
          <h1 className="font-sacramento text-9xl text-zinc-100 text-wrap w-full tracking-wide [text-align-last:justify]">
            UMA GHILDIYAL
          </h1>
        </div>
        <div className="grid grid-cols-5 text-zinc-100 font-moms-typewriter tracking-tighter text-xs gap-12 justify-center items-center">
          <div>
            I solemnly swear that I am up to no good. I can not emphasize
            enough.
          </div>
          <div className="flex flex-col text-justify col-span-3 items-center">
            But besides that, I am asoftware developer, a designer, a neural
            networks enthusiast, a web3 explorer, an adventure seeker, and
            always a Lifelong Learner. Also, TMI but I have a theory that I was
            born on the 18.02.2005 but I have no proof of that. So I will just
            say that I am ageless.
          </div>
          <div>But most importantly, I am usually up to no good.</div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full px-32 justify-center items-center font-sacramento text-xl font-bold  text-center">
        <div className="border-4 border-zinc-300 rounded-l-sm hover:text-black hover:bg-zinc-300" 
                  onMouseEnter={playHoverSound}>EXCELLENCE</div>
        <div className="border-y-4 border-zinc-300 hover:text-black hover:bg-zinc-300" 
                  onMouseEnter={playHoverSound}>SERVITUDE</div>
        <div className="border-4 border-zinc-300 rounded-r-sm hover:text-black hover:bg-zinc-300" 
                  onMouseEnter={playHoverSound}>GRATITUDE</div>
      </div>
    </div>
  );
};
export default Hero;