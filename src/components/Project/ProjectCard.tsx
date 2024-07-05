import { ThemeContext } from "@/context/ThemeContext";
import { Box, Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import React, { FC, useContext, useState } from "react";
import Image from "@/components/CustomImage";
import { quicksand, raleway } from "@/app/fonts";

interface ProjectCardInterface {
  name: string;
  companyShortName: string;
  thumbnail: string;
}

const ProjectCard: FC<ProjectCardInterface> = ({
  name,
  companyShortName,
  thumbnail,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      position={"relative"}
      h="full"
      w="full"
      borderRadius={"2xl"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ cursor: "pointer" }}
      backgroundColor={isDarkMode ? " #0d1012" : "#fffbfb"}
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
          isHovered ? (isDarkMode ? "#333333" : "#e0f7fa") : "transparent"
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
          width="250"
          height="250"
          alt="thumbnail"
          position={"absolute"}
          bgBlendMode={"multiply"}
        />
      </Box>
      {isHovered && (
        <>
          <CardHeader
            fontSize="2.25rem"
            fontWeight={"bold"}
            className={quicksand.className}
            zIndex={2}
          >
            {name}
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter
            fontSize="xl"
            fontWeight={"bold"}
            className={raleway.className}
            zIndex={2}
          >
            {companyShortName}
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default ProjectCard;
