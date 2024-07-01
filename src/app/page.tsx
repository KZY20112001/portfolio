"use client";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="bg-white dark:bg-black max-h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll relative ">
      <Header />
      <Intro />
      <Projects />
    </main>
  );
};

export default Home;
