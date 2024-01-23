import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Icon,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGit, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiAmazonaws,
  SiSass,
  SiExpress,
  SiAuth0,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills({ color }) {
  const skills = [
    {
      title: "Javascript",
      icon: IoLogoJavascript,
      color: "yellow",
    },
    {
      title: "ReactJS",
      icon: FaReact,
      color: "cyan",
    },

    {
      title: "NextJS",
      icon: SiNextdotjs,
      color: "white",
    },
    {
      title: "Sass",
      icon: SiSass,
      color: "pink",
    },
    {
      title: "NodeJS",
      icon: FaNodeJs,
      color: "lightgreen",
    },
    {
      title: "ExpressJS",
      icon: SiExpress,
      color: "blue.300",
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
      color: "green",
    },
    {
      title: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "lightblue",
    },
    {
      title: "Git",
      icon: FaGit,
      color: "orange.500",
    },
    {
      title: "AWS",
      icon: SiAmazonaws,
      color: "yellow.400",
    },
    {
      title: "Auth0",
      icon: SiAuth0,
      color: "white",
    },
  ];

  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack as={Box} spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Fade top>
            <Stack textAlign="center">
              <Heading size="lg" color={`${color}.400`}>
                My Skills
              </Heading>
              <Text as="b">
                I like to take responsibility to craft aesthetic user experience{" "}
                <br /> using modern architecture.
              </Text>
            </Stack>
          </Fade>
          <Fade bottom>
            <SimpleGrid
              placeItems="center"
              columns={{ base: 2, lg: 6 }}
              spacingY={"4vh"}
            >
              {skills.map(({ title, icon, color }, idx) => (
                <Tooltip key={idx} hasArrow label={title}>
                  <div>
                    <Icon
                      cursor="pointer"
                      fontSize="5vh"
                      color={color}
                      as={icon}
                    />
                  </div>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Fade>
        </Stack>
      </Container>
    </>
  );
}
