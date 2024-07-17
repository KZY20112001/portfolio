import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { quicksand } from "@/app/fonts";
import { Image } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { Skill } from "@/definitions";
import useMediaQuery from "@/hooks/useMediaQuery";

interface FrameworksAndLibrariesProps {
  frameworks: Skill[];
}

const darkModeLogos = ["Next.js", "Flask", "Express.js"];

const FrameworksAndLibraries: FC<FrameworksAndLibrariesProps> = ({
  frameworks,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const isDesktop = useMediaQuery(992);

  return (
    <Flex
      textColor={isDarkMode ? "white" : "black"}
      flexDir={"column"}
      gap="1.5rem"
      borderBottomWidth={"2px"}
      borderColor={isDarkMode ? "white" : "dark"}
      pb="1rem"
    >
      <Text
        fontWeight="bold"
        fontSize={["xl", "2xl"]}
        className={quicksand.className}
      >
        Frameworks
      </Text>

      <Flex gap={["1rem", "2rem"]} maxW="full" flexWrap="wrap">
        {frameworks.map((framework, index) => (
          <Tooltip
            label={framework.name}
            rounded={"lg"}
            key={framework.logo + index}
          >
            <Box
              _hover={{
                backgroundColor: isDarkMode ? "#475569" : "#e1e8f0",
              }}
              p="1rem"
              rounded={"full"}
            >
              <Image
                src={framework.logo}
                alt="skill logo"
                height={isDesktop ? 45 : 35}
                width={isDesktop ? 45 : 35}
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
