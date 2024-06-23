"use client";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Works from "@/components/Works";

const Home = () => {
  return (
    <main className="bg-white dark:bg-black max-h-screen w-full snap-y snap-mandatory scroll-smooth overflow-y-scroll relative">
      <Header />
      <Intro />
      <Works />
    </main>
  );
};

export default Home;
