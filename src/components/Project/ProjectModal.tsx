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
  HStack,
} from "@chakra-ui/react";
import { FC, useContext, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Image from "@/components/CustomImage";
import { ThemeContext } from "@/context/ThemeContext";
import { Project } from "@/definitions/project";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const prevImage = () => {
    setDirection(-1);
    project &&
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
  };

  const nextImage = () => {
    setDirection(1);
    project &&
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"6xl"} isCentered>
      <ModalOverlay />
      <ModalContent
        height={["3xl"]}
        bgColor={isDarkMode ? "#0d1012" : "white"}
        borderRadius={"lg"}
      >
        <Box
          w="full"
          h="50%"
          bgColor={isDarkMode ? "#161a1d" : "#f4eded"}
          opacity={1}
          position="relative"
          overflow="hidden"
          zIndex={1}
          borderRadius={"lg"}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <Image
                src={project?.images[currentIndex]!}
                objectFit={"contain"}
                position="absolute"
                left={0}
                right={0}
                top={0}
                bottom={0}
                margin="auto"
                width="250"
                height="250"
                alt="thumbnail"
              />
            </motion.div>
          </AnimatePresence>

          {project && project.images.length > 1 && (
            <HStack
              position="absolute"
              top="50%"
              width="100%"
              justify="space-between"
              transform="translateY(-50%)"
            >
              <IoIosArrowBack
                onClick={prevImage}
                className={`${
                  isDarkMode ? "bg-[#161a1d]" : "bg-[#f4eded] m-8"
                } cursor-pointer`}
              />
              <IoIosArrowForward
                onClick={nextImage}
                className={`${
                  isDarkMode ? "bg-[#161a1d]" : "bg-[#f4eded] m-8"
                } cursor-pointer`}
              />
            </HStack>
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
            h={["12rem"]}
            overflowY="scroll"
            mb="2rem"
          >
            {project?.description}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            perspiciatis eius iusto eum, eligendi consectetur perferendis
            similique, hic quaerat voluptate impedit ad, incidunt eaque ipsum
            reprehenderit nisi placeat architecto? Hic perspiciatis eligendi at
            modi in. Ea alias dicta cum quibusdam nisi, ex suscipit cumque
            architecto vel aut voluptatibus illo sit sint reiciendis possimus,
            corrupti dolorem tempora accusamus blanditiis expedita placeat
            voluptate! Ad qui, laboriosam tempore similique corporis magnam quos
            optio nisi architecto nulla beatae cum eum expedita eius quidem iste
            incidunt maiores alias molestias maxime dolor illum. Amet eius,
            deserunt atque perspiciatis sapiente eos laudantium sit quod
            inventore distinctio iste.
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
          {project?.companyWebsite ? (
            <a
              href={project?.companyWebsite}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              {project?.company}
            </a>
          ) : (
            project?.company
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
