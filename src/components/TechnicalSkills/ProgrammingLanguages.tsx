import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { FC, useContext } from "react";
import { quicksand } from "@/app/fonts";
import { Image } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { Skill } from "@/definitions";

interface ProgrammingLangaugesProps {
  programmingLanguages: Skill[];
}

const ProgrammingLanguages: FC<ProgrammingLangaugesProps> = ({
  programmingLanguages,
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
        Programming Languages
      </Text>

      <Flex gap="2rem" maxW="80%" flexWrap="wrap">
        {programmingLanguages.map((language, index) => (
          <Tooltip
            label={language.name}
            rounded={"lg"}
            key={language.logo + index}
          >
            <Box
              _hover={{
                backgroundColor: isDarkMode ? "#475569" : "#e1e8f0",
              }}
              p="1rem"
              rounded={"full"}
            >
              <Image
                src={language.logo}
                alt="skill logo"
                height={45}
                width={45}
                cursor={"pointer"}
              />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProgrammingLanguages;
