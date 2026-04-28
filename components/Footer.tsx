"use client";

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full min-h-20 flex items-center justify-between mb-4 p-4 sm:p-6 md:p-8 overflow-hidden rounded-sm mt-8">
      <div className="flex flex-col justify-center items-center gap-2 pb-0">
        <Link href="/" className="sm:block w-8 h-8 relative">
          <Image
            src="/uniitee.svg"
            alt="UniiTee Logo"
            fill={true}
            // width={40}
            // height={40}
            className="transition-transform duration-300 hover:scale-110 object-contain bg-transparent"
            priority
          />
        </Link>
        <div className="hidden sm:block txt-xs md:text-sm text-zinc-400 font-amita pb-0">UniiTee Garth</div>
      </div>
      <div className="text-xs sm:text-sm font-amita text-center text-zinc-400">
        ~ Made with 🪄 by Uma Ghilidyal ~
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Link
          href="https://github.com/uniitee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={24}
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/uma-ghildiyal-1a02582b4/l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={24}
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
          />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
