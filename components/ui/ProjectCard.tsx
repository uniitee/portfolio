"use client";
import { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ProjectCardProps {
  field: string;
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  sourceUrl: string;
}

function useImageHover() {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return {isHovered, hoverProps};
}

export default function ProjectCard({
  field,
  title,
  description,
  techStack,
  imageSrc,
  sourceUrl,
}: ProjectCardProps) {
  const {isHovered, hoverProps} = useImageHover();

  return (
    <div
      {...hoverProps}
      className="flex flex-col bg-black/30 w-full md:w-1/3 my-2 px-8 py-4 rounded-sm gap-2"
    >
      {/* Field */}
      <div className="bg-mauve-800 hover:bg-mauve-600 px-2 w-fit rounded-sm text-sm">
        {field}
      </div>

      {/* Title */}
      <div className="text-2xl font-bold text-mauve-100">{title}</div>

      <Separator className="bg-mauve-600" />

      {/* Image */}
      <div
        className={`w-full rounded-sm bg-cover bg-center transition-all duration-300 ease-in-out cursor-pointer ${
          isHovered ? "h-48" : "h-20 sm:h-24 md:h-28"
        }`}
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />

      <Separator className="bg-mauve-600" />

      {/* Description */}
      <div className="font-moms-typewriter text-xs text-mauve-100 min-h-16">
        {description}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="bg-mauve-800 hover:bg-mauve-600 px-2 w-fit rounded-sm text-sm"
          >
            {tech}
          </div>
        ))}
      </div>

      <Separator className="bg-mauve-600" />

      {/* Source Link */}
      <Link
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-2 items-center text-mauve-100 hover:text-mauve-600 transition-colors"
      >
        <Github size={20} />
        <span>Source</span>
      </Link>
    </div>
  );
}
