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
import { Project } from "@/definitions";
import { ImageCarousel } from "@/components";
import Link from "next/link";

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
          h="60%"
          bgColor={isDarkMode ? "#161a1d" : "#ddd9d9"}
          opacity={1}
          position="relative"
          overflow="hidden"
          borderTopRadius={"2xl"}
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
          mt="0.5rem"
          textColor={isDarkMode ? "white" : "black"}
          display={"flex"}
          flexDir={"column"}
          fontSize="3xl"
          fontWeight={"bold"}
          className={quicksand.className}
        >
          {project?.website ? (
            <Link href={project?.website} target="_blank" rel="noreferrer">
              {project?.name}
            </Link>
          ) : (
            <Text>{project?.name}</Text>
          )}
        </ModalHeader>
        <ModalBody w="full">
          <Text
            className={open_sans.className}
            textColor={isDarkMode ? "white" : "black"}
            fontWeight={500}
            fontSize="md"
            lineHeight={"1.75rem"}
            maxH="6rem"
            overflowY="scroll"
            mb="2.5rem"
          >
            {project?.description}
          </Text>

          <Flex
            textColor={isDarkMode ? "white" : "black"}
            alignItems={"center"}
            gap="1.5rem"
            maxW="100%"
            flexWrap={"wrap"}
          >
            {project?.techStack.map((skill, i) => (
              <Text
                borderRadius="md"
                bgColor={isDarkMode ? "#212934" : "#f3f1f1"}
                px="1rem"
                py="0.25rem"
                fontWeight={"semibold"}
                className={open_sans.className}
                key={i + skill}
                _hover={{ cursor: "pointer" }}
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
