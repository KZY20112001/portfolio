import { Flex, Text } from "@chakra-ui/react";
import { TailSpin } from "react-loading-icons";
import { FC, useContext } from "react";
import { MdErrorOutline } from "react-icons/md";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";

interface ErrorProps {
  error: Error;
}
const Error: FC<ErrorProps> = ({ error }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap="1rem">
      <MdErrorOutline className="dark:invert" />
      <Text
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
        fontWeight={"bold"}
      >
        An error occurred:
      </Text>
    </Flex>
  );
};

export default Error;
