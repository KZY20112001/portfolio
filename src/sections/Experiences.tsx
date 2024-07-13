import { Flex, List, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";
import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { ExperienceCard } from "@/components/Experience";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { Experience } from "@/definitions/experience";
import { Error, Loading } from "@/components";

const Experiences = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { data, error, isLoading } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
  });

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
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Relevant Experiences
      </Text>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <List w="full" display="flex" flexDir={"column"} gap="2rem">
          {data.map((experience) => (
            <ExperienceCard
              experience={experience}
              key={experience.startDate + experience.endDate}
            />
          ))}
        </List>
      )}
    </Flex>
  );
};

export default Experiences;
