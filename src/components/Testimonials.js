import {
  Divider,
  Stack,
  Text,
  Container,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Tooltip,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Fade } from "react-reveal";
import TestimonialsArray from "./TestimonialsArray";

const TestimonialCard = ({ item }) => {
  const renderStars = () => {
    const fullStars = Math.floor(item.stars);
    const hasHalfStar = item.stars - fullStars !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          as={FaStar}
          w={6}
          h={6}
          color="yellow.400"
          _hover={{
            color: "yellow.400",
          }}
          cursor="pointer"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Icon
          key={`half`}
          as={FaStarHalf}
          w={6}
          h={6}
          color="yellow.400"
          _hover={{
            color: "yellow.400",
          }}
          cursor="pointer"
        />
      );
    }

    return stars;
  };

  return (
    <Card
      w="100%"
      boxShadow="md"
      transition="box-shadow 0.3s, transform 0.3s"
      _hover={{
        boxShadow: "xl",
        transform: "scale(1.05)",
      }}
    >
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Heading size="md">{item.name}</Heading>
          <Text color="gray.400" maxW={{ base: "15vh", lg: "unset" }}>
            {item.title}
          </Text>
        </Box>
        <Tooltip hasArrow label={`Client rated ${item.stars}/5`}>
          <Flex display="flex" gap={"0.5vh"}>
            {renderStars()}
          </Flex>
        </Tooltip>
      </CardHeader>
      <CardBody>{item.review}</CardBody>
    </Card>
  );
};

export default function Testimonials({ color }) {
  const testimonials = TestimonialsArray();

  return (
    <>
      <Container maxW={"3xl"} id="testimonials">
        <Stack as={Box} spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Testimonials</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={"5vh"}>
            {testimonials?.map((item) => (
              <Fade bottom>
                <TestimonialCard item={item} />
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
