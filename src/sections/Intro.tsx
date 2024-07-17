import { Flex, Text } from "@chakra-ui/react";

import { FC, useContext } from "react";

import { open_sans, raleway } from "@/app/fonts";
import { EMAIL } from "@/constants/contacts";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      zIndex={1}
      scrollSnapAlign={"center"}
      flexDir={"column"}
      fontWeight={"semibold"}
    >
      <Text
        mt={["2rem", null, null, 0]}
        fontWeight={"bold"}
        fontSize={["3xl", "4xl"]}
        w={["full", null, null, "5xl"]}
        mb={"3rem"}
        className={raleway.className}
        textColor={isDarkMode ? "white" : "black"}
      >
        Hello, I am Christopher, an aspiring Software Engineer based in
        Singapore.
      </Text>

      <Text
        fontSize={["md", "xl"]}
        w={["full", null, null, "3xl"]}
        mb={"3rem"}
        textColor={isDarkMode ? "white" : "black"}
        className={open_sans.className}
      >
        I am a Computer Science undergraduate who is passionate about building
        software that can have a meaningful impact on our society.
      </Text>
      <Text
        fontSize={["md", "xl"]}
        w={["full", null, null, "3xl"]}
        mb={"4rem"}
        textColor={isDarkMode ? "white" : "black"}
        className={open_sans.className}
      >
        I have been involved in various aspects of software development and am
        currently focused on backend development.
      </Text>

      <Link
        href={`mailto:${EMAIL}`}
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-base md:text-xl  font-semibold hover:font-bold hover:cursor-pointer hover:underline hover:italic font-raleway`}
      >
        {EMAIL}
      </Link>
    </Flex>
  );
};

export default Intro;
