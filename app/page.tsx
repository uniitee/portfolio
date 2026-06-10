import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TheTimes from "@/components/TheTimes";

export default function Home() {
  return (
    <main className=" flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <div className="max-w-7xl w-full ">
        <Hero />
        {/* <Projects/> */}
        <About />
        <TheTimes />
      </div>
    </main>
  );
}
