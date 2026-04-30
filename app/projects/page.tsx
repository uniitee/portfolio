"use client";

import FocusCardsDemo from "@/components/focus-cards-demo";

export default function Projects() {
    return (
      <div className="overflow-hidden sm:px-10 px-5 w-full min-h-svh">
        <div className="mt-32 sm:mt-40 w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col text-center font-sacramento mb-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-300">
              PROJECTS
            </h1>
            <p className="text-md md:text-lg text-zinc-400 text-center w-full max-w-4xl mt-2">
              And miles to go before I sleep,
            </p>
            <p className="text-md md:text-lg text-zinc-400 text-center w-full max-w-4xl ">
              And miles to go before I sleep.
            </p>
          </div>
          <FocusCardsDemo />
        </div>
      </div>
    );
}
