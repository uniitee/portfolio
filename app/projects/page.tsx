"use client";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import { Separator } from "@/components/ui/separator";
import { GitHubCalendar } from "react-github-calendar";


export default function Projects() {
  const projects = [
    {
      id:1,
      feild: "Ai/Ml",
      title: "Art GAN",
      description: "A Generative Adversarial Network that generates realistic oil-painted portraits",
      techStack: ["Python","Tensorflow", "keras"],
      imageSrc: "/images/sarasu30.png",
      sourceUrl: "https://github.com/uniitee/MLSC_SeasonOfAI/blob/main/Art_Gan.ipynb",
    },
    {
      id:2,
      feild: "Fullstack",
      title: "Cheer Board",
      description: "Supporting educator wellbeing through reflection, mindful habits, and daily joy missions. Because happy teachers create happy classrooms",
      techStack: ["Next.js","TypeScript", "CSS"],
      imageSrc: "/images/sarasu31.png",
      sourceUrl: "https://cheerboard.vercel.app/",
    },
    {
      id:3,
      feild: "Web3",
      title: "CrowdFunding DApp",
      description: "Crowdfunding platform where users can create campaigns, donate using crypto, & track progress in a decentralized, transparent way.",
      techStack: ["Next.js","TypeScript", "Solidity", "Thirdweb"],
      imageSrc: "/images/sarasu32.png",
      sourceUrl: "https://github.com/uniitee/Crowdfunding-Platform",
    },
  ];
  return (
    <div className="flex justify-center items-center overflow-hidden lg:px-0 sm:px-10 px-5 w-full min-h-svh max-w-7xl mx-auto">
      <div className="mt-32 sm:mt-40 w-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col text-center font-sacramento mb-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-300">
            PROJECTS
          </h1>
          <p className="text-md md:text-lg text-zinc-500 text-center w-full max-w-4xl mt-2">
            And miles to go before I sleep, And miles to go before I sleep,
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              field={project.feild}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageSrc={project.imageSrc}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
        <Separator className="bg-mauve-600/30 mt-6"/>
        <TechStack />
        <Separator className="bg-mauve-600/30"/>
        <div className="flex flex-col gap-4 mb-2 mt-6">
          <div className="w-full flex justify-center font-sacramento text-3xl text-justify">Stalk Me Better</div>
          <GitHubCalendar
            username="uniitee"
            className="transform-content transition-transform delay-150 duration-300 ease-in-out hover:scale-105"
          />  
        </div>
      </div>
    </div>
  );
}
