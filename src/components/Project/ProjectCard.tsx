import { ThemeContext } from "@/context/ThemeContext";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import React, { FC, useContext, useState } from "react";
import { Image } from "@/components";
import { quicksand, raleway } from "@/app/fonts";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ProjectCardInterface {
  name: string;
  organizationShortName?: string;
  thumbnail: string;
}

const ProjectCard: FC<ProjectCardInterface> = ({
  name,
  organizationShortName,
  thumbnail,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = useMediaQuery(992);
  const isTablet = useMediaQuery(750);
  return (
    <Card
      position={"relative"}
      h="full"
      w="full"
      borderRadius={"2xl"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ cursor: "pointer" }}
      backgroundColor={isDarkMode ? " #1c1c27" : "#edecec"}
      textColor={isDarkMode ? "white" : "black"}
      boxShadow={"xl"}
    >
      <Box
        position="absolute"
        borderRadius={"2xl"}
        top={0}
        left={0}
        w="full"
        h="full"
        bgColor={
          isHovered ? (isDarkMode ? "#333333" : "#dce7e9") : "transparent"
        }
        opacity={isHovered ? 0.5 : 1}
        zIndex={1}
      >
        <Image
          src={thumbnail}
          objectFit={"contain"}
          left={0}
          right={0}
          top={0}
          bottom={0}
          margin="auto"
          width={isTablet ? 400 : 270}
          height={isTablet ? 250 : 170}
          alt="thumbnail"
          position={"absolute"}
          bgBlendMode={"multiply"}
          placeholder="blur"
        />
      </Box>
      {(isHovered || !isDesktop) && (
        <>
          <CardHeader
            fontSize={["2xl", null, null, "3xl"]}
            fontWeight={"bold"}
            className={quicksand.className}
            zIndex={2}
          >
            {name}
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter zIndex={2}>
            <Text
              display="flex"
              mr="0"
              ml="auto"
              fontSize="xl"
              fontWeight={"bold"}
              className={raleway.className}
            >
              {organizationShortName}
            </Text>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default ProjectCard;
