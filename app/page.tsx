import About from "@/components/About";
import Hero from "@/components/Hero";
import TheTimes from "@/components/TheTimes";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <div className="max-w-7xl w-full ">
        <Hero />
        {/* <Projects/> */}
        <About />
        <TheTimes />
        {/* <Projects /> */}
      </div>
    </main>
  );
}
