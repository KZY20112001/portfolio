import { Flex, Text, Tooltip } from "@chakra-ui/react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

import { lato } from "@/app/fonts";
import { useContext } from "react";
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
      borderColor={"black"}
      justifyContent={"space-between"}
      backgroundColor={isDarkMode ? "black" : "white"}
    >
      <Text
        fontSize={"2xl"}
        className={lato.className}
        _hover={{ cursor: "pointer" }}
      >
        christopher khant zayar
      </Text>
      <Flex gap="2rem" alignItems={"center"}>
        <Tooltip label="linkedin">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-md px-8 py-2 border-[1px] border-white  hover:border-slate-100   hover:bg-slate-100"
          >
            <FaLinkedinIn />
          </a>
        </Tooltip>
        <Tooltip label="github">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-md px-8 py-2 border-[1px] border-white  hover:border-slate-100  hover:bg-slate-100"
          >
            <FaGithub />
          </a>
        </Tooltip>
        <Text
          className={lato.className}
          fontSize={"lg"}
          px="1rem"
          py="0.25rem"
          borderRadius={"md"}
          borderWidth={"1px"}
          borderColor={"white"}
          _hover={{
            cursor: "pointer",
            backgroundColor: "rgb(241 245 249)",
            borderColor: "rgb(241 245 249)",
          }}
        >
          contact me
        </Text>

        <MdDarkMode
          onClick={switchTheme}
          className="dark:invert cursor-pointer"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
