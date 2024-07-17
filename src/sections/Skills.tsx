import { Flex, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { useContext } from "react";

import { raleway } from "@/app/fonts";
import { Error, Loading } from "@/components";
import {
  FrameworksAndLibraries,
  OtherSkills,
  ProgrammingLanguages,
} from "@/components/TechnicalSkills";
import { ThemeContext } from "@/context/ThemeContext";
import { TechnicalSkills } from "@/definitions";
import { fetchTechnicalSkills } from "@/utils/fetchTechnicalSkills";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { data, error, isLoading } = useQuery<TechnicalSkills>({
    queryKey: ["technicalSkills"],
    queryFn: fetchTechnicalSkills,
  });
  return (
    <Flex
      py={["8rem"]}
      minH={["", "100vh"]}
      width="full"
      scrollSnapAlign={"center"}
      flexDir={"column"}
      gap={["4rem"]}
      position="relative"
    >
      <Text
        fontWeight="bold"
        fontSize={["3xl", "4xl"]}
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Technologies I am familiar with
      </Text>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <Flex flexDir="column" gap="2rem">
          <ProgrammingLanguages
            programmingLanguages={data.programmingLanguages}
          />
          <FrameworksAndLibraries frameworks={data.frameworks} />
          <OtherSkills otherSkills={data.otherSkills} />
        </Flex>
      )}
    </Flex>
  );
};

export default Skills;
