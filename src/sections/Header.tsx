import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";

import { FC, useContext } from "react";

import { raleway } from "@/app/fonts";
import { ThemeContext } from "@/context/ThemeContext";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/constants/contacts";
import useDesktop from "@/hooks/useDesktop";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { isDarkMode, switchTheme } = useContext(ThemeContext);
  const isDesktop = useDesktop();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      position={"fixed"}
      width="full"
      zIndex={50}
      px={["1rem", "10rem"]}
      py={"1rem"}
      borderBottom="1px"
      borderColor={isDarkMode ? "white" : "black"}
      justifyContent={["normal", "space-between"]}
      backgroundColor={isDarkMode ? "black" : "white"}
    >
      <Text
        fontSize={["xl", "2xl"]}
        fontWeight={"bold"}
        _hover={{ cursor: "pointer" }}
        textColor={isDarkMode ? "white" : "black"}
        className={raleway.className}
      >
        christopher khant zayar
      </Text>
      {isDesktop && <Contacts />}
      <Drawer
        isOpen={!isDesktop && isOpen}
        autoFocus={false}
        placement="right"
        onClose={onClose}
        size="sidebar"
      >
        <DrawerOverlay />
        <DrawerContent
          display="flex"
          flexDir="column"
          backgroundColor={isDarkMode ? "#16191D" : "white"}
        >
          <Contacts />
        </DrawerContent>
      </Drawer>
      <MdDarkMode
        onClick={switchTheme}
        className="dark:invert cursor-pointer absolute right-20 top-6 md:right-24 md:top-7"
      />

      <IoReorderThree
        size={40}
        onClick={onOpen}
        className="dark:invert absolute right-2 left-auto top-3 md:hidden"
      />
    </Flex>
  );
};

const Contacts = () => {
  return (
    <Flex
      gap={["1rem", "2rem"]}
      flexDirection={["column", "row"]}
      alignItems={["normal", "center"]}
      py={["1rem", 0]}
    >
      <Tooltip label="linkedin">
        <Link
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="text-black dark:text-white cursor-pointer rounded-md md:h-8 md:w-20 gap-4 px-4 py-1.5 md:px-0 md:py-0 flex items-center md:justify-center hover:bg-slate-200  dark:hover:bg-slate-600"
        >
          <FaLinkedinIn />
          <Text
            display={["block", "none"]}
            className={raleway.className}
            fontWeight={"bold"}
            fontSize="lg"
          >
            linkedin
          </Text>
        </Link>
      </Tooltip>
      <Tooltip label="github">
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="text-black dark:text-white cursor-pointer rounded-md md:h-8 md:w-20  gap-4 px-4 py-1.5 md:px-0 md:py-0 flex items-center md:justify-center hover:bg-slate-200  dark:hover:bg-slate-600"
        >
          <FaGithub />
          <Text
            display={["block", "none"]}
            className={raleway.className}
            fontWeight={"bold"}
            fontSize="lg"
          >
            github
          </Text>
        </Link>
      </Tooltip>
      <Link
        href={`mailto:${EMAIL}`}
        className={`text-black dark:text-white gap-4 px-4 flex items-center py-1.5 rounded-md hover:cursor-pointer hover:bg-slate-200  dark:hover:bg-slate-600`}
      >
        <CiMail className="md:hidden" />
        <Text className={raleway.className} fontWeight={"bold"} fontSize="lg">
          contact me
        </Text>
      </Link>
    </Flex>
  );
};
export default Header;
