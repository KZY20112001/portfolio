import { Box, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

import { open_sans, raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";

const Intro = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Flex
      px={"10rem"}
      h={"100vh"}
      alignItems={"center"}
      zIndex={1}
      scrollSnapAlign={"start"}
    >
      <Box maxW="8xl" transform={"auto"} translateY={"-2rem"}>
        <Text
          fontWeight="bold"
          fontSize="4xl"
          w="5xl"
          mb="4rem"
          className={open_sans.className}
          _hover={{ cursor: "pointer" }}
          textColor={isDarkMode ? "white" : "black"}
        >
          Hello, I am Christopher, an aspiring Software Engineer based in
          Singapore.
        </Text>

        <Text
          fontSize={"xl"}
          w="3xl"
          mb="1rem"
          textColor={isDarkMode ? "white" : "black"}
          className={open_sans.className}
        >
          As a Computer Science student, I am passionate about developing
          software that can make a meaningful impact on society.
        </Text>
        <Text
          fontSize={"xl"}
          w="3xl"
          mb="3rem"
          textColor={isDarkMode ? "white" : "black"}
          className={open_sans.className}
        >
          Throughout my academic projects and internships, I have been involved
          in different aspects of software development, and am currently focused
          in backend development.
        </Text>

        <Text
          fontSize={"xl"}
          textColor={isDarkMode ? "white" : "black"}
          className={raleway.className}
          fontWeight={600}
          w="fit-content"
          _hover={{
            cursor: "pointer",
            fontStyle: "italic",
            textDecor: "underline",
          }}
        >
          christopher.khant.work@gmail.com
        </Text>
      </Box>
    </Flex>
  );
};

export default Intro;
