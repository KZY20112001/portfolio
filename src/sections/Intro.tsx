import { Flex, Text } from "@chakra-ui/react";

import { useContext } from "react";

import { open_sans, raleway } from "@/app/fonts";
import { EMAIL } from "@/constants/contacts";
import { ThemeContext } from "@/context/ThemeContext";

const Intro = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Flex
      h={"100vh"}
      w="full"
      justifyContent={"center"}
      zIndex={1}
      scrollSnapAlign={"center"}
      flexDir={"column"}
    >
      <Text
        fontWeight="bold"
        fontSize="4xl"
        w="5xl"
        mb="4.5rem"
        className={raleway.className}
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
      >
        Hello, I am Christopher, an aspiring Software Engineer based in
        Singapore.
      </Text>

      <Text
        fontSize={"xl"}
        w="3xl"
        mb="2.5rem"
        textColor={isDarkMode ? "white" : "black"}
        className={open_sans.className}
      >
        I am a final-year Computer Science undergraduate who is passionate about
        developing software that can make a meaningful impact on our society.
      </Text>
      <Text
        fontSize={"xl"}
        w="3xl"
        mb="4rem"
        textColor={isDarkMode ? "white" : "black"}
        className={open_sans.className}
      >
        Throughout my academic projects and internships, I have been involved in
        various aspects of software development and am currently focused on
        backend development.
      </Text>

      <a
        href={`mailto:${EMAIL}`}
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } w-fit text-xl font-[600] hover:cursor-pointer hover:underline hover:italic font-raleway`}
      >
        {EMAIL}
      </a>
    </Flex>
  );
};

export default Intro;
