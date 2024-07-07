import { open_sans, quicksand, raleway } from "@/app/fonts";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  Text,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { FC, useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { Project } from "@/definitions/project";
import { ImageCarousel } from "@/components";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
      <ModalOverlay />
      <ModalContent
        height={["3xl"]}
        bgColor={isDarkMode ? "#0d1012" : "white"}
        borderRadius={"2xl"}
      >
        <Box
          w="full"
          h="50%"
          bgColor={isDarkMode ? "#161a1d" : "#f4eded"}
          opacity={1}
          position="relative"
          overflow="hidden"
          zIndex={1}
          borderRadius={"2xl"}
        >
          {project?.mediaType === "images" ? (
            <ImageCarousel images={project.images} />
          ) : (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              h="full"
              w="full"
            >
              <ReactPlayer
                url={project?.video}
                width={"500px"}
                height={"300px"}
                light
                controls
                loop
              />
            </Flex>
          )}
        </Box>
        <ModalHeader
          zIndex={10}
          textColor={isDarkMode ? "white" : "black"}
          display={"flex"}
          flexDir={"column"}
          fontSize="3xl"
          fontWeight={"bold"}
          className={quicksand.className}
        >
          {project?.name}
        </ModalHeader>
        <ModalBody w="full">
          <Text
            className={open_sans.className}
            textColor={isDarkMode ? "white" : "black"}
            maxH={["12rem"]}
            overflowY="scroll"
            mb="2rem"
          >
            {project?.description}
          </Text>

          <Flex
            textColor={isDarkMode ? "white" : "black"}
            alignItems={"center"}
            gap="1.5rem"
          >
            {project?.techStack.map((skill, index) => (
              <Text
                borderRadius="md"
                backgroundColor={isDarkMode ? "#212934" : "#e2e8f0"}
                px="1rem"
                py="0.25rem"
                fontWeight={"semibold"}
                key={index + skill}
              >
                {skill}
              </Text>
            ))}
          </Flex>
        </ModalBody>
        <ModalFooter
          fontSize="xl"
          fontWeight={"bold"}
          textColor={isDarkMode ? "white" : "black"}
          className={raleway.className}
          ml="0"
        >
          {project?.organization}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
