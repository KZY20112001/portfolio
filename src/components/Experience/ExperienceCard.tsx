import {
  ListItem,
  Flex,
  Collapse,
  useDisclosure,
  Text,
  textDecoration,
} from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import React, { FC, useContext } from "react";

import { quicksand, open_sans } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { Experience } from "@/definitions/experience";

interface ExperienceProps {
  experience: Experience;
}
const ExperienceCard: FC<ExperienceProps> = ({ experience }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <ListItem
      gap="1rem"
      borderBottomWidth={"1px"}
      display="flex"
      borderColor={isDarkMode ? "#989494" : "#656565"}
      flexGrow={1}
      pb="1rem"
    >
      {isOpen ? (
        <TiArrowSortedUp className="mt-1.5 dark:invert" onClick={onToggle} />
      ) : (
        <TiArrowSortedDown className="mt-1.5 dark:invert" onClick={onToggle} />
      )}
      <Flex w="full" flexDir={"column"}>
        <Flex justifyContent={"space-between"} w="full" h={"4rem"}>
          <Text
            fontSize="xl"
            fontWeight={"bold"}
            textColor={isDarkMode ? "white" : "black"}
            className={quicksand.className}
          >
            {experience.position}
          </Text>

          <Flex flexDir={"column"} className={quicksand.className} maxW="30%">
            <a
              href={experience.companyWebsite}
              target="_blank"
              rel="noreferrer"
            >
              <TextTransition
                springConfig={presets.stiff}
                inline
                className={`dark:invert font-bold text-black text-xl mr-0 ml-auto `}
              >
                {isOpen ? experience.company : experience.companyShortName}
              </TextTransition>
            </a>

            <TextTransition
              springConfig={presets.stiff}
              inline
              className={`dark:invert text-md font-bold text-black mr-0 ml-auto`}
            >
              {isOpen && `${experience.startDate} - ${experience.endDate}`}
            </TextTransition>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Text
            className={open_sans.className}
            textColor={isDarkMode ? "white" : "black"}
            overflowY="scroll"
            fontSize={"md"}
            fontWeight={550}
            maxH={["10rem"]}
            maxW={["90%"]}
            mb="2rem"
          >
            {experience.description}
          </Text>
          <Flex
            textColor={isDarkMode ? "white" : "black"}
            alignItems={"center"}
            gap="1.5rem"
            maxW={"80%"}
            flexWrap={"wrap"}
          >
            {experience.techStack.map((skill, i) => (
              <Text
                borderRadius="md"
                backgroundColor={isDarkMode ? "#212934" : "#f3f1f1"}
                px="1rem"
                py="0.25rem"
                fontWeight={"semibold"}
                className={open_sans.className}
                key={i + skill}
              >
                {skill}
              </Text>
            ))}
          </Flex>
        </Collapse>
      </Flex>
    </ListItem>
  );
};

export default ExperienceCard;
