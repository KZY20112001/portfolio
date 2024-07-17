import { Flex, Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import React, { FC, useContext, useState } from "react";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { Project } from "@/definitions";
import { ProjectCard, ProjectModal } from "@/components/Project";
import { fetchProjects } from "@/utils/fetchProjects";
import { Error, Loading } from "@/components";

interface ProjectProps {}

const Projects: FC<ProjectProps> = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [curProject, setCurProject] = useState<Project | null>(null);
  const { data, error, isLoading } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
  return (
    <Flex
      py={["8rem"]}
      minH={["", "100vh"]}
      width="full"
      scrollSnapAlign={"center"}
      flexDir={"column"}
      gap="4rem"
      position="relative"
    >
      <ProjectModal isOpen={isOpen} onClose={onClose} project={curProject} />
      <Text
        fontWeight="bold"
        fontSize={["3xl", "4xl"]}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        Some Projects I have done
      </Text>
      {isLoading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <Flex justifyContent={"center"}>
          <Grid
            templateColumns={["repeat(1,1fr)", null, null, "repeat(2, 1fr)"]}
            gap="5rem"
          >
            {data.map((project) => (
              <GridItem
                key={project.name + project.organization}
                h={["19rem", null, "28rem"]}
                w={["20rem", null, "28rem"]}
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
        </Flex>
      )}
    </Flex>
  );
};

export default Projects;
