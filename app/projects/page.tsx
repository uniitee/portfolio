"use client";

import FocusCardsDemo from "@/components/focus-cards-demo";

export default function Projects() {
    return (
      <div className="overflow-hidden sm:px-10 px-5 w-full min-h-svh">
        <div className="mt-32 sm:mt-44 w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col text-center font-sacramento mb-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-300">
              PROJECTS
            </h1>
            <p className="text-md md:text-lg text-zinc-400 text-justify w-full max-w-4xl mt-2">
              Of course, I have some projects that I have worked on, I mean that was the whole point of this portfolio. Some were made solely to fill the void -ahm of this  website and my heart- but trust me on this one, its not like they don't solve problems.
            </p>
          </div>
          <FocusCardsDemo />
        </div>
      </div>
    );
}
