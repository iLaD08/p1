import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Icon,
  Tooltip
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaSlack } from "react-icons/fa";
import { SiMongodb, SiAuth0 } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills({ color }) {
  const skills = [
    {
      title: "Javascript",
      icon: IoLogoJavascript,
      color: "yellow"
    },
    {
      title: "React",
      icon: FaReact,
      color: "cyan"
    },
    {
      title: "Node.js",
      icon: FaNodeJs,
      color: "lightgreen"
    },
    {
      title: "MongoDB",
      icon: SiMongodb,
      color: "green"
    },
    {
      title: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "lightblue"
    },
    {
      title: "Auth0",
      icon: SiAuth0,
      color: "white"
    },
    {
      title: "Slack",
      icon: FaSlack,
      color: "pink"
    }
  ];

  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack
          as={Box}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
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
            <Stack
              textAlign="center"
            >
              <Heading size="lg" bgGradient="linear-gradient(90deg,#9f55ff,#7000ff)" bgClip="text">
                My Skills
              </Heading>
              <Text as="b">
                I like to take responsibility to craft aesthetic user experience <br /> using modern architecture.
              </Text>
            </Stack>
          </Fade>
          <Fade bottom>
            <HStack justify="center" spacing={4}>
              {
                skills.map(({ title, icon, color }, idx) => (
                  <Tooltip key={idx} hasArrow label={title}>
                    <div>
                      <Icon cursor="pointer" fontSize="5vh" color={color} as={icon} />
                    </div>
                  </Tooltip>
                ))
              }
            </HStack>
          </Fade>
        </Stack>
      </Container>
    </>
  );
}
