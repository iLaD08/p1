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
import { FaReact, FaNodeJs, FaGit, FaStripe } from 'react-icons/fa';
import { SiNextdotjs, SiSass, SiExpress, SiMongodb, SiAmazonaws, SiSupabase, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

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
      title: "Supabase",
      icon: SiSupabase,
      color: "green.300",
    },
    {
      title: "Firebase",
      icon: SiFirebase,
      color: "orange",
    },
    {
      title: "Stripe",
      icon: FaStripe,
      color: "purple.400",
    },
    {
      title: "TailwindCSS",
      icon: SiTailwindcss,
      color: "teal.300",
    },
    {
      title: "Sass",
      icon: SiSass,
      color: "pink",
    },
    {
      title: "Git",
      icon: FaGit,
      color: "orange.400",
    },
    {
      title: "AWS",
      icon: SiAmazonaws,
      color: "yellow.400",
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
