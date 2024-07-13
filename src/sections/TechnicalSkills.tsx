import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Flex, Text } from "@chakra-ui/react";
import { raleway } from "@/app/fonts";

const TechnicalSkills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Flex
      pt={["8rem"]}
      pb={["4rem"]}
      minH={["", "100vh"]}
      width="full"
      scrollSnapAlign={"center"}
      flexDir={"column"}
      gap="3rem"
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize="4xl"
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Technologies I am familiar with
      </Text>

      <Flex h="full">
        <Flex
          flex={1}
          flexGrow={1}
          borderColor={isDarkMode ? "white" : "black"}
        >
          <Text
            fontWeight="semibold"
            fontSize="2xl"
            textColor={isDarkMode ? "white" : "black"}
            className={raleway.className}
            pl="1rem"
          >
            Programming Languages
          </Text>
        </Flex>
        <Flex
          flex={1}
          flexGrow={1}
          borderLeftWidth="2px"
          borderColor={isDarkMode ? "white" : "black"}
          pl="1rem"
        >
          <Text
            fontWeight="semibold"
            fontSize="2xl"
            textColor={isDarkMode ? "white" : "black"}
            className={raleway.className}
          >
            Frameworks & Libraries
          </Text>
        </Flex>

        <Flex
          flex={1}
          flexGrow={1}
          borderLeftWidth="2px"
          borderColor={isDarkMode ? "white" : "black"}
          pl="1rem"
        >
          <Text
            fontWeight="semibold"
            fontSize="2xl"
            textColor={isDarkMode ? "white" : "black"}
            className={raleway.className}
          >
            Others
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TechnicalSkills;
