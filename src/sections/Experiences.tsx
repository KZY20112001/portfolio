import { Flex, List, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { experiences } from "@/constants/experiences";
import { ExperienceCard } from "@/components/Experience";
const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Flex
      pt={["8rem"]}
      pb={["4rem"]}
      minH={["", "100vh"]}
      width="full"
      scrollSnapAlign={"start"}
      flexDir={"column"}
      gap="4rem"
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize="4xl"
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Relevant Experiences
      </Text>

      <List w="full" display="flex" flexDir={"column"} gap="2rem">
        {experiences.map((experience) => (
          <ExperienceCard
            experience={experience}
            key={experience.startDate + experience.endDate}
          />
        ))}
      </List>
    </Flex>
  );
};

export default Experiences;
