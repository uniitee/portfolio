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
    <div className="w-full flex flex-col items-center justify-center gap-4 font-moms-typewriter bg-zinc-300 text-zinc-950 p-4 sm:p-6 md:p-8 overflow-hidden rounded-sm">
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
          <div className="text-center sm:text-left">Rant no. oo7</div>
          <div className="text-center">Super Special Edition</div>
          <div className="text-center sm:text-right">Special Issue</div>
        </div>

        <div className="w-full h-px bg-zinc-800"></div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-6 lg:gap-8 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-2 min-w-0 lg:col-span-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider mb-2 wrap-break-word">
              OH WHO IS SHE?
            </h1>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <h2 className="text-base sm:text-md tracking-wide mb-2 wrap-break-word">
              THE PERSISTENT 2026 CASE OF "I MISS HER"
            </h2>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <p className="text-xs sm:text-sm text-justify">
              This is so serious that it has to be on a newspaper, but the
              mainstream media said it was too good for them.
            </p>
          </div>

          <div className="hidden md:block bg-[url('/images/rocket.jpg')] bg-cover bg-center w-full h-40 sm:h-52 md:h-full mt-2"></div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col gap-4 min-w-0 lg:col-span-3 md:border-x md:border-zinc-800 md:px-4 lg:px-8">
          <div className="bg-[url('/images/rocket.jpg')] bg-cover bg-center w-full h-48 sm:h-64"></div>

          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider leading-tight wrap-break-word mb-2">
              HEISENBERG'S UNCERTAINTY PRINCIPLE WRONGFULLY INTERPRETED
            </h1>

            <div className="text-xs sm:text-sm font-thin text-justify">
              <p className="mb-2">
                It is impossible to precisely determine both position and
                momentum simultaneously. Δx⋅Δp ≥ h/2
              </p>

              <p className="my-2">
                Although Planck's constant is extremely small - making these
                effects negligible at macroscopic scales - I have a theory that
                everything is fundamentally microscopic, if you look at the
                bigger picture.
              </p>

              <p>
                Hence, I cannot scientifically confirm my availability this
                weekend; apologies in advance if I cancel last minute.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-2 min-w-0 lg:col-span-1">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl tracking-wider mb-2 wrap-break-word">
              EVERYTHING TO EVER EXIST
            </h1>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <h2 className="text-base sm:text-md tracking-wide mb-2 wrap-break-word">
              IT'S ALL IN THE MIND
            </h2>

            <div className="w-full h-0.5 bg-zinc-800 mb-2"></div>

            <p className="text-xs sm:text-sm text-justify">
              Trust me on this one. Developers do not lie.
            </p>
          </div>

          <div className="bg-[url('/images/rocket.jpg')] bg-cover bg-center w-full h-40 sm:h-52 md:h-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default About;