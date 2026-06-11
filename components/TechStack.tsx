"use client"
import React from 'react'

export default function TechStack () {
    const stacks = [
      {
        id: 1,
        title: "Languages",
        techStack: ["Python", "C++", "Java", "SQL", "Solidity"],
      },
      {
        id: 4,
        title: "Tools",
        techStack: ["Git", "Figma"],
      },
      {
        id: 2,
        title: "Web Developement",
        techStack: [
          "HTML",
          "CSS",
          "JavaScript",
          "Typescript ",
          "React",
          "Next.js",
        ],
      },
      {
        id: 3,
        title: "Frameworks/ Libraries",
        techStack: [
          "TensorFlow",
          "Pandas",
          "MongoDB",
          "Mongoose",
          "Express",
          "Thirdweb",
        ],
      },
    ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-4">
      <div className="flex font-sacramento text-3xl md:text-6xl">Tech Stack</div>
      <div className="grid grid: sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {stacks.map((stack) => (
          <div key={stack.id} className="flex flex-col gap-2 bg-black/30 p-4 rounded-sm">
            <h3 className="text-sm md:text-xl font-sacramento text-mauve-100">{stack.title}</h3>

            <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {stack.techStack.map((tech) => (
                <div
                  key={tech}
                  className="bg-mauve-900 hover:bg-mauve-950 px-2 py-1 rounded-sm font-sacramento text-xs text-mauve-100"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

