import { Flex, Text, Tooltip } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

import { FC, useContext } from "react";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/constants/contacts";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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

        <a
          href={`mailto:${EMAIL}`}
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-lg font-bold px-4 py-1 rounded-md hover:cursor-pointer font-raleway hover:bg-slate-200  dark:hover:bg-slate-600`}
        >
          contact me
        </a>
      </Flex>
      <MdDarkMode
        onClick={switchTheme}
        className="dark:invert cursor-pointer absolute right-24 top-7"
      />
    </Flex>
  );
};

export default Header;
