"use client";
import FootstepTrail from "./FootstepTrail";

const Hero = () => {

  return (
    <div className="w-full min-h-svh flex flex-col items-center justify-center gap-4 sm:mt-12 mt-28 md:mt-4 px-4 ">
      <FootstepTrail />

      <h1 className="text-sm sm:text-xl font-amita text-center text-zinc-400">
        ~ सत्यं परं धीमहि ~
      </h1>

      {/* Main Card */}
      <div className="bg-[url('/images/rocket.jpg')] bg-no-repeat bg-cover w-full max-w-5xl flex flex-col justify-center px-4 sm:px-8 md:px-18 py-8 rounded-sm gap-12 sm:gap-20">
      
        <div className="w-full px-8 font-sacramento ">
          <div className="grid grid-cols-2 text-xs sm:text-sm">
            <div>I AM</div>
            <div className="flex justify-end">OR AM I ?</div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-zinc-100 w-full tracking-wide wrap-break [text-align-last:justify]">
            UMA GHILDIYAL
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-zinc-100 font-moms-typewriter tracking-tight text-xs gap-4 sm:gap-10 bg-black/65 p-2 rounded-sm">
          <div>
            I solemnly swear that I am up to no good. I cannot emphasize enough.
          </div>

          <div className="sm:col-span-1 lg:col-span-3 text-justify">
            But besides that, I am a software developer, a designer, a neural
            networks enthusiast, a web3 explorer, an adventure seeker, and
            always a lifelong learner. Also, TMI but I have a theory that I was
            born on the 18.02.2005 but I have no proof of that. So I will just
            say that I am ageless.
          </div>

          <div>But most importantly, I am usually up to no good.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-6xl px-4 sm:px-8 lg:px-16 py-1 font-sacramento text-sm sm:text-lg font-bold text-center">
        <div className="border-4 border-zinc-300 sm:rounded-l-sm hover:text-black hover:bg-zinc-300">
          EXCELLENCE
        </div>

        <div className="border-x-4 sm:border-x-0 sm:border-y-4 border-zinc-300 hover:text-black hover:bg-zinc-300">
          SERVITUDE
        </div>

        <div className="border-4 border-zinc-300 sm:rounded-r-sm hover:text-black hover:bg-zinc-300">
          GRATITUDE
        </div>
      </div>
    </div>
  );
};

export default Hero;