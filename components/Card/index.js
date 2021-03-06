import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  HStack,
  VStack,
  Badge,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

export default function Card() {
  const project = {
    title: "Sample Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    date: "2021",
    tags: ["design", "code"],
    slug: "slug",
  };

  return (
    <Box
      style={{ transition: "background 240ms" }}
      _hover={{ bg: "theme.featured", cursor: "pointer" }}
      borderBottom={"1px solid"}
      borderColor="gray.300"
    >
      <LinkBox as="article" p={["1em", "1em", "2em", "2em"]}>
        <Flex>
          <VStack spacing={4} align="stretch">
            <Heading fontFamily="Lora" fontWeight="800" size="sm">
              <Link
                href={{
                  pathname: "/[slug]",
                  query: { slug: project.slug },
                }}
                passHref
              >
                <LinkOverlay>{project.title}</LinkOverlay>
              </Link>
            </Heading>
            <Text
              size="sm"
              fontWeight="100"
              maxW={[200, 300, 400, 600]}
              isTruncated
            >
              {project.description}
            </Text>
          </VStack>
          <Spacer />
          <VStack spacing={4} align="stretch" textAlign="right">
            <Text fontWeight="400">{project.date}</Text>
            <HStack spacing={1}>
              <Badge
                fontSize="0.7em"
                colorScheme="blackAlpha"
                variant="outline"
              >
                Design
              </Badge>
              <Badge
                fontSize="0.7em"
                colorScheme="blackAlpha"
                variant="outline"
              >
                Coding
              </Badge>
            </HStack>
          </VStack>
        </Flex>
      </LinkBox>
    </Box>
  );
}
