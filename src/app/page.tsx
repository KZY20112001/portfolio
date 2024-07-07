"use client";
import { Header, Intro, Experiences, Projects } from "@/sections";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <main className="bg-white dark:bg-black max-h-screen w-screen snap-y snap-center scroll-smooth overflow-y-scroll relative">
      <Header />
      <Box px="10rem">
        <Intro />
        <Experiences />
        <Projects />
      </Box>
    </main>
  );
};

export default Home;
