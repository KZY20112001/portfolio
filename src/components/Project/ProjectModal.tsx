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
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

import ReactPlayer from "react-player";

import { FC, useContext } from "react";
import Link from "next/link";

import { ThemeContext } from "@/context/ThemeContext";
import { Project } from "@/definitions";
import { ImageCarousel } from "@/components";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const isTablet = useMediaQuery(750);
  const isDesktop = useMediaQuery(992);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["xs", null, "xl", "4xl"]}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        height={["2xl", "3xl"]}
        bgColor={isDarkMode ? "#0d1012" : "white"}
        borderRadius={"2xl"}
      >
        {!isDesktop && <ModalCloseButton className="z-50 mt-2 dark:invert" />}
        <Box
          w="full"
          h={["40%", "60%"]}
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
                width={isDesktop ? 600 : isTablet ? 450 : 250}
                height={isDesktop ? 350 : isTablet ? 275 : 200}
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
          fontSize={["xl", "3xl"]}
          fontWeight={"bold"}
          className={quicksand.className}
        >
          {project?.website ? (
            <Link
              href={project?.website}
              className="cursor-pointer flex gap-3"
              target="_blank"
              rel="noreferrer"
            >
              {project?.name}{" "}
              <FaExternalLinkSquareAlt className="mt-1.5 md:mt-4" size={15} />
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
            maxH={["9rem", null, null, "6rem"]}
            overflowY="scroll"
            mb={["1.5rem", "2.5rem"]}
          >
            {project?.description}
          </Text>

          <Flex
            textColor={isDarkMode ? "white" : "black"}
            alignItems={"center"}
            gap={["1rem", null, null, "1.5rem"]}
            maxW="100%"
            flexWrap={"wrap"}
          >
            {project?.techStack.map((skill, i) => (
              <Text
                borderRadius="md"
                bgColor={isDarkMode ? "#212934" : "#f3f1f1"}
                px={["1rem"]}
                py={["0.25rem"]}
                fontWeight={"semibold"}
                fontSize={["sm", "md"]}
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
          fontSize={["lg", "xl"]}
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
