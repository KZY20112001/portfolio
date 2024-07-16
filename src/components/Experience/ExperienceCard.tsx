import {
  ListItem,
  Flex,
  Collapse,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import React, { FC, useContext } from "react";

import { quicksand, open_sans } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { Experience } from "@/definitions";
import { Image } from "@/components";
import Link from "next/link";
import useDesktop from "@/hooks/useDesktop";

interface ExperienceProps {
  experience: Experience;
}
const ExperienceCard: FC<ExperienceProps> = ({ experience }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { isOpen, onToggle } = useDisclosure();
  const isDesktop = useDesktop();
  return (
    <ListItem
      gap="1rem"
      borderBottomWidth={"1px"}
      display="flex"
      borderColor={isDarkMode ? "#989494" : "#656565"}
      flexGrow={1}
    >
      {isOpen ? (
        <TiArrowSortedUp
          className="mt-1.5 dark:invert cursor-pointer"
          onClick={onToggle}
        />
      ) : (
        <TiArrowSortedDown
          className="mt-1.5 dark:invert cursor-pointer"
          onClick={onToggle}
        />
      )}
      <Flex w="full" flexDir={"column"}>
        <Flex w="full" h={["6rem", "4rem"]}>
          <Flex
            flexDir={"column"}
            className={quicksand.className}
            fontWeight={"bold"}
            gap="0.5rem"
          >
            <Text
              ml="0"
              mr="auto"
              fontSize={["lg", "xl"]}
              maxW={["10rem", "20rem"]}
              textColor={isDarkMode ? "white" : "black"}
            >
              {experience.title}
            </Text>
            {!isDesktop && (
              <TextTransition
                springConfig={presets.default}
                inline
                className={`dark:text-white text-base text-black ml-0 mr-auto`}
              >
                {isOpen
                  ? `${experience.startDate} - ${experience.endDate}`
                  : ""}
              </TextTransition>
            )}
          </Flex>

          <Flex maxW={"50%"} mr="0" ml="auto" gap={["0.5rem", "1rem"]}>
            <Flex
              flexDir={"column"}
              className={quicksand.className}
              fontWeight={"bold"}
            >
              {experience.companyWebsite ? (
                <Link
                  href={experience.companyWebsite}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TextTransition
                    springConfig={presets.stiff}
                    inline
                    className={`dark:text-white text-black text-lg md:text-xl mr-0 ml-auto`}
                  >
                    {isOpen && isDesktop
                      ? experience.company
                      : experience.companyShortName}
                  </TextTransition>
                </Link>
              ) : (
                <TextTransition
                  springConfig={presets.stiff}
                  inline
                  className={`dark:text-white text-black text-lg md:text-xl mr-0 ml-auto`}
                >
                  {isOpen && isDesktop
                    ? experience.company
                    : experience.companyShortName}
                </TextTransition>
              )}

              {isDesktop && (
                <TextTransition
                  springConfig={presets.stiff}
                  inline
                  className={`dark:text-white text-base text-black mr-0 ml-auto`}
                >
                  {isOpen
                    ? `${experience.startDate} - ${experience.endDate}`
                    : ""}
                </TextTransition>
              )}
            </Flex>
            {experience.companyWebsite ? (
              <Link
                href={experience.companyWebsite}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={experience.companyLogo}
                  alt="logo"
                  height={5}
                  width={5}
                  mt="0.25rem"
                  placeholder="blur"
                  className={`${
                    experience.companyShortName === "NBS" ? "" : "dark:invert"
                  }`}
                />
              </Link>
            ) : (
              <Image
                src={experience.companyLogo}
                alt="logo"
                height={5}
                width={5}
                mt="0.25rem"
                placeholder="blur"
                className={`${
                  experience.companyShortName === "NBS" ? "" : "dark:invert"
                }`}
              />
            )}
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Text
            className={open_sans.className}
            textColor={isDarkMode ? "white" : "black"}
            overflowY="scroll"
            lineHeight={"1.75rem"}
            fontSize={["md", "lg"]}
            fontWeight={550}
            maxH={["10rem"]}
            maxW={["85%"]}
            mb="2rem"
            mt={["1rem", null, null, "0rem"]}
          >
            {experience.description}
          </Text>
          <Flex
            textColor={isDarkMode ? "white" : "black"}
            alignItems={"center"}
            gap={["1rem", "1.5rem"]}
            maxW={"80%"}
            flexWrap={"wrap"}
            mb="2rem"
          >
            {experience.techStack.map((skill, i) => (
              <Text
                borderRadius="md"
                bgColor={isDarkMode ? "#212934" : "#f3f1f1"}
                px="1rem"
                py="0.25rem"
                fontSize={["sm", "md"]}
                fontWeight={"semibold"}
                className={open_sans.className}
                key={i + skill}
                _hover={{ cursor: "pointer" }}
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
