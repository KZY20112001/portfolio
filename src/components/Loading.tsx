import { Flex, Text } from "@chakra-ui/react";
import { TailSpin } from "react-loading-icons";
import { FC, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { raleway } from "@/app/fonts";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap="1rem">
      <TailSpin stroke={isDarkMode ? "white" : "black"} />
      <Text
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
        fontWeight={"bold"}
      >
        Loading
      </Text>
    </Flex>
  );
};

export default Loading;
