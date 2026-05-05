import type { Metadata } from "next";
import { Amita, Anton_SC } from "next/font/google";
import loacalFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FootstepTrail from "@/components/FootstepTrail";
import SplashScreen from "@/components/SplashScreen";

const antonSC = Anton_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton-sc",
});

const amita = Amita({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-amita",
});

const sacramento = loacalFont({
  src: [
    {
      path: "../public/fonts/sacramento/Sacramento.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sacramento",
});

const moms_typewriter = loacalFont({
  src: [
    {
      path: "../public/fonts/moms_typewriter/Mom«t___.ttf",
    },
  ],
  variable: "--font-moms-typewriter",
});

export const metadata: Metadata = {
  title: "Uma Ghildiyal",
  description: "Personal Portfolio Website of Uma Ghildiyal, alias UniiTee Garth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${moms_typewriter.variable} ${sacramento.variable} ${amita.variable} ${antonSC.variable} antialiased  text-zinc-100 min-h-screen flex flex-col bg-[#111111]`}
      >
        {/* <SplashScreen /> */}
        <div className="relative z-20 bg-[url('/images/map.png')] bg-contain bg-fixed">
          <Navbar />
          <FootstepTrail />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
