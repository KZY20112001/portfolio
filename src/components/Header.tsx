import { Flex, Text, Tooltip } from "@chakra-ui/react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

import { useContext } from "react";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";

const GITHUB_URL = "https://github.com/KZY20112001";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/christopher-khant-zayar-5057051bb/";

const Header = () => {
  const { isDarkMode, switchTheme } = useContext(ThemeContext);
  return (
    <Flex
      position={"fixed"}
      width="full"
      zIndex={50}
      px={"10rem"}
      py={"1rem"}
      borderBottom="1px"
      borderColor={isDarkMode ? "white" : "black"}
      justifyContent={"space-between"}
      backgroundColor={isDarkMode ? "black" : "white"}
    >
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        christopher khant zayar
      </Text>
      <Flex gap="2rem" alignItems={"center"}>
        <Tooltip label="linkedin">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-md px-8 py-2 hover:bg-slate-200  dark:hover:bg-slate-600"
          >
            <FaLinkedinIn className="dark:invert" />
          </a>
        </Tooltip>
        <Tooltip label="github">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-md px-8 py-2 hover:bg-slate-200  dark:hover:bg-slate-600"
          >
            <FaGithub className="dark:invert" />
          </a>
        </Tooltip>
        <Text
          fontSize={"lg"}
          fontWeight={"bold"}
          px="1rem"
          py="0.25rem"
          borderRadius={"md"}
          textColor={isDarkMode ? "white" : "black"}
          _hover={{
            cursor: "pointer",
            backgroundColor: isDarkMode ? "rgb(71 85 105)" : "rgb(226 232 240)",
          }}
          className={raleway.className}
        >
          contact me
        </Text>
        <MdDarkMode
          onClick={switchTheme}
          className="dark:invert cursor-pointer absolute right-24 top-7"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
