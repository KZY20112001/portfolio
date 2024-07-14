import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { quicksand } from "@/app/fonts";
import { Image } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { Skill } from "@/definitions";

interface FrameworksAndLibrariesProps {
  frameworks: Skill[];
}

const darkModeLogos = ["Next.js", "Flask", "Express.js"];

const FrameworksAndLibraries: FC<FrameworksAndLibrariesProps> = ({
  frameworks,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Flex
      textColor={isDarkMode ? "white" : "black"}
      flexDir={"column"}
      gap="0.5rem"
      borderBottomWidth={"2px"}
      borderColor={isDarkMode ? "white" : "dark"}
      pb="1rem"
    >
      <Text fontWeight="bold" fontSize="2xl" className={quicksand.className}>
        Frameworks
      </Text>

      <Flex gap="2rem" maxW="80%" flexWrap="wrap">
        {frameworks.map((framework, index) => (
          <Tooltip
            label={framework.name}
            rounded={"lg"}
            key={framework.logo + index}
          >
            <Box
              _hover={{
                backgroundColor: isDarkMode ? "#475569" : "#e2e8f0",
              }}
              p="1rem"
              rounded={"3xl"}
            >
              <Image
                src={framework.logo}
                alt="skill logo"
                height={45}
                width={45}
                cursor={"pointer"}
                className={`${
                  darkModeLogos.includes(framework.name) ? "dark:invert" : ""
                }`}
              />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default FrameworksAndLibraries;
