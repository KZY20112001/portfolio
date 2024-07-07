import { Flex, List, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { ExperienceCard } from "@/components/Experience";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { useQuery } from "@tanstack/react-query";
import { Experience } from "@/definitions/experience";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { data, error, isLoading } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;
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
        {data?.map((experience) => (
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
