"use client";
import { Header, Intro, Experiences, Projects, Skills } from "@/sections";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <main className="bg-white dark:bg-black max-h-screen w-screen snap-y snap-proximity scroll-smooth overflow-y-scroll relative">
      <Header />
      <Box px={["1rem", null, "5rem", "10rem"]}>
        <Intro />
        <Experiences />
        <Projects />
        <Skills />
      </Box>
    </main>
  );
};

export default Home;
