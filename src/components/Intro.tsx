import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Intro = () => {
  return (
    <Flex
      px={"10rem"}
      h={"100vh"}
      alignItems={"center"}
      zIndex={1}
      scrollSnapAlign={"center"}
    >
      <Text>Hello, I am Christopher </Text>
      christopher.khant.work@gmail.com
    </Flex>
  );
};

export default Intro;
