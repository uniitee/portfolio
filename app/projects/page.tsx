"use client";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Projects() {
  const cards = [
    {
      title: "Art GAN",
      desc: "A Generative Adversarial Network to generate realistic oil-painted portraits",
      src: "/images/sarasu0.png",
      link: "https://github.com/uniitee/MLSC_SeasonOfAI/blob/main/Art_Gan.ipynb",
    },
    {
      title: "Cheer Board",
      desc: "Supporting educator wellbeing through reflection, mindful habits, and daily joy.",
      src: "/images/sarasu1.png",
      link: "https://cheerboard.vercel.app/",
    },
    {
      title: "CrowdFunding DApp",
      desc: "Crowdfunding platform where users can create campaigns, donate using crypto, and track progress in a decentralized, transparent way.",

      src: "/images/sarasu2.png",
      link: "https://github.com/uniitee/Crowdfunding-Platform",
    },
    {
      title: "4th",
      desc: "Crowdfunding platform where users can create campaigns, donate using crypto, and track progress in a decentralized, transparent way.",

      src: "/images/sarasu3.png",
      link: "https://github.com/uniitee/Crowdfunding-Platform",
    },
    {
      title: "5th",
      desc: "Crowdfunding platform where users can create campaigns, donate using crypto, and track progress in a decentralized, transparent way.",

      src: "/images/sarasu4.png",
      link: "https://github.com/uniitee/Crowdfunding-Platform",
    },
  ];
    return (
      <div className="overflow-hidden sm:px-10 px-5 w-full min-h-svh">
        <div className="mt-32 sm:mt-40 w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col text-center font-sacramento mb-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-300">
              PROJECTS
            </h1>
            <p className="text-md md:text-lg text-zinc-400 text-center w-full max-w-4xl mt-2">
              And miles to go before I sleep,
              And miles to go before I sleep,
            </p>
          </div>
          <FocusCards cards={cards} />
        </div>
      </div>
    );
}
