import { Flex, Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import React, { useContext, useState } from "react";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { Project } from "@/definitions/project";
import { ProjectCard, ProjectModal } from "@/components/Project";
import { fetchProjects } from "@/utils/fetchProjects";
import { Error, Loading } from "@/components";

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [curProject, setCurProject] = useState<Project | null>(null);
  const { data, error, isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  return (
    <Flex
      pt={["8rem"]}
      pb={["4rem"]}
      minH={["", "100vh"]}
      width="full"
      scrollSnapAlign={"center"}
      flexDir={"column"}
      gap="4rem"
      position="relative"
    >
      <ProjectModal isOpen={isOpen} onClose={onClose} project={curProject!} />
      <Text
        fontWeight="bold"
        fontSize="4xl"
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Featured Projects
      </Text>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <Grid
          px={[0, "10rem"]}
          py={[0, "2rem"]}
          templateColumns={["repeat(1,1fr)", "repeat(2, 1fr)"]}
          gap={[0, "5rem"]}
          w={["full"]}
        >
          {data.map((project) => (
            <GridItem
              key={project.name + project.organization}
              h={["28rem"]}
              onClick={() => {
                setCurProject(project);
                onOpen();
              }}
            >
              <ProjectCard
                name={project.name}
                organizationShortName={project.organizationShortName}
                thumbnail={project.thumbnail}
              />
            </GridItem>
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default Projects;
