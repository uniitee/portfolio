"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 font-moms-typewriter bg-zinc-300 text-zinc-950 p-4 sm:p-6 md:p-8 overflow-hidden rounded-sm mt-8">
      <div className="grid grid-cols-5 text-xs sm:text-sm md:text-base gap-2 sm:gap-6 py-1 w-full font-sacramento">
        <div className="flex flex-col items-center justify-center  mt-2">
          <Link href="/" className="hidden sm:block">
            <Image
              src="/uniitee_dark.svg"
              alt="UniiTee Logo"
              width={40}
              height={40}
              className="transition-transform duration-300 hover:scale-110 object-contain bg-transparent"
              priority
            />
          </Link>
          <div>UniiTee garth</div>
        </div>
        <div className="col-span-3 text-3xl sm:text-4xl md:text-6xl text-center leading-tight flex flex-col">
          THE PROTFOLIO TIMES
          <span className="text-sm">Gazette that is up to no good</span>
        </div>
        <div className="flex items-center justify-center">{formattedDate}</div>
      </div>

      <div className="w-full">
        <div className="w-full h-0.5 bg-zinc-800"></div>

        <div className="grid grid-cols-3 text-xs sm:text-sm md:text-base gap-2 sm:gap-6 py-1">
          <div className="text-center sm:text-left">Rant no. 394</div>
          <div className="text-center">Random Special Edition</div>
          <div className="text-center sm:text-right">Special Issue</div>
        </div>

        <div className="w-full h-px bg-zinc-800"></div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-8 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-2 min-w-0 lg:col-span-1">
          <div>
            <h1 className="text-md sm:text-2xl font-bold tracking-wider mb-2 wrap-break-word">
              OH WHO IS SHE?
            </h1>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <h2 className="text-sm sm:text-md tracking-wide mb-2 wrap-break-word">
              THE PERSISTENT 2026 CASE OF "I MISS HER"
            </h2>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <p className="text-xs sm:text-sm text-justify">
              This is so serious that it has to be on a newspaper, but the
              mainstream media said it was too good for them.
            </p>
          </div>

          <div className="hidden sm:block bg-[url('/images/cb.gif')] bg-cover bg-center w-full h-full sm:h-52 md:h-full mt-2">
            <div className="w-full h-full bg-[#004799]/38"></div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-4 min-w-0 lg:col-span-3 md:border-x md:border-zinc-800 md:px-4 lg:px-8">
          <div className="bg-[url('/images/howgwards.gif')] bg-cover bg-center w-full h-36 sm:h-20 md:h-48"></div>

          <div>
            <h1 className="text-md sm:text-2xl lg:text-3xl font-bold tracking-wider leading-tight wrap-break-word mb-2">
              HEISENBERG'S UNCERTAINTY PRINCIPLE
            </h1>

            <div className="text-xs sm:text-sm font-thin text-justify">
              <p className="mb-2">
                It is impossible to precisely determine the both position and
                momentum for a quantum particle simultaneously.
              </p>
              <p className="text-center">Δx⋅Δp ≥ h/2</p>
              <p className="my-2">
                And since everything is fundamentally microscopic, I cannot
                scientifically confirm my availability for a future date;
                apologies in advance if I cancel last minute.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 min-w-0 lg:col-span-1">
          <div>
            <h1 className="font-bold text-md sm:text-2xl tracking-wider mb-2 wrap-break-word">
              SHE WAS A WIZARD
            </h1>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <h2 className="text-sm sm:text-md tracking-wide mb-2 wrap-break-word">
              THIS ISN'T VIBE CODE. THIS IS MAGIC.
            </h2>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <p className="text-xs sm:text-sm text-justify">
              Her Laptop was Her Broom. A noisy one for sure, like chopper level
              noisy, but it got her where she wanted.
            </p>
          </div>

          <div className="bg-[url('/images/rain.gif')] bg-cover bg-center w-full h-40 sm:h-52 lg:h-full hidden lg:flex">
            <div className="w-full h-full bg-[#004799]/38"></div>
          </div>
        </div>
        <div className="hidden sm:flex lg:hidden bg-[url('/images/rain.gif')] bg-cover bg-center w-full h-2/2">
          <div className="w-full h-full bg-[#004799]/38"></div>
        </div>
      </div>
    </div>
  );
};

export default About;