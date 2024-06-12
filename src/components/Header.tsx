import { Flex, Text, Tooltip, background } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { lato } from "@/app/fonts";

const GITHUB_URL = "https://github.com/KZY20112001";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/christopher-khant-zayar-5057051bb/";

const Header = () => {
  return (
    <Flex
      position={"sticky"}
      px={"10rem"}
      py={"1rem"}
      borderWidth="1px"
      borderColor={"black"}
      justifyContent={"space-between"}
    >
      <Text
        fontSize={"2xl"}
        className={lato.className}
        _hover={{ cursor: "pointer" }}
      >
        christopher khant zayar
      </Text>
      <Flex gap="4rem" alignItems={"center"}>
        <a
          href={LINKEDIN_URL}
          className="cursor-pointer rounded-md px-8 py-2 border-[1px] border-white dark:border-black hover:border-black hover:dark:border-white dark:hover:bg-white hover:bg-slate-100"
        >
          <Tooltip label="linkedin" hasArrow>
            <FaLinkedinIn />
          </Tooltip>
        </a>
        <a
          href={GITHUB_URL}
          className="cursor-pointer rounded-md px-8 py-2 border-[1px] border-white dark:border-black hover:border-black hover:dark:border-white dark:hover:bg-white hover:bg-slate-100"
        >
          <Tooltip label="github" hasArrow>
            <FaGithub />
          </Tooltip>
        </a>
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
            borderColor: "black",
          }}
        >
          contact me
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
