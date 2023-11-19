import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {
  const profile = ProfileArray();
  const colors = {
    blue: "#3182CE",
    cyan: "#00B5D8",
    gray: "#718096",
    green: "#38A169",
    orange: "#DD6B20",
    pink: "#D53F8C",
    purple: "#805AD5",
    red: "#E53E3E",
    teal: "#319795",
    yellow: "#D69E2E",
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollTo = (to) => {
    onClose();
    const heroSection = document.querySelector(`#${to}`);
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link onClick={() => scrollTo("hero")}>
          <HStack>
            {TbLetterComponents.map((Component, index) => (
              <Component key={index} color={colors[color]} />
            ))}
          </HStack>
        </Link>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={() => scrollTo("hero")}>
                  About
                </Button>
                <Button variant="ghost" onClick={() => scrollTo("skills")}>
                  Skills
                </Button>
                <Button variant="ghost" onClick={() => scrollTo("projects")}>
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollTo("testimonials")}
                >
                  Testimonials
                </Button>
                <Button variant="ghost" onClick={() => scrollTo("contact")}>
                  Contact
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer
                  placement="top"
                  size="full"
                  onClose={onClose}
                  isOpen={isOpen}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                      <Stack h="100%" spacing={4} justify="center">
                        <Button
                          size="lg"
                          fontSize="3xl"
                          variant="ghost"
                          onClick={() => scrollTo("hero")}
                        >
                          About
                        </Button>
                        <Button
                          size="lg"
                          fontSize="3xl"
                          variant="ghost"
                          onClick={() => scrollTo("skills")}
                        >
                          Skills
                        </Button>
                        <Button
                          size="lg"
                          fontSize="3xl"
                          variant="ghost"
                          onClick={() => scrollTo("projects")}
                        >
                          Projects
                        </Button>
                        <Button
                          size="lg"
                          fontSize="3xl"
                          variant="ghost"
                          onClick={() => scrollTo("testimonials")}
                        >
                          Testimonials
                        </Button>
                        <Button
                          size="lg"
                          fontSize="3xl"
                          variant="ghost"
                          onClick={() => scrollTo("contact")}
                        >
                          Contact
                        </Button>
                      </Stack>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
