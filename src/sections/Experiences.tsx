import { Flex, List, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { FC, useContext } from "react";

import { raleway } from "@/app/fonts";
import { Error, Loading } from "@/components";
import { ExperienceCard } from "@/components/Experience";
import { ThemeContext } from "@/context/ThemeContext";
import { Experience } from "@/definitions";
import { fetchExperiences } from "@/utils/fetchExperiences";

interface ExperiencesProps {}

const Experiences: FC<ExperiencesProps> = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { data, error, isLoading } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: fetchExperiences,
  });
  return (
    <Flex
      pt={["6rem", "8rem"]}
      pb={["4rem"]}
      minH={["100vh"]}
      width="full"
      scrollSnapAlign={"start"}
      flexDir={"column"}
      gap={["3rem", "4rem"]}
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize={["3xl", "4xl"]}
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
