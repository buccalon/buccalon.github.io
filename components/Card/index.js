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

export default function Card({ slug, title, summary, year, tags }) {
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
            <Heading fontFamily="Lora" fontWeight="600" size="sm">
              <Link
                href={{
                  pathname: "/[slug]",
                  query: { slug: slug },
                }}
                passHref
              >
                <LinkOverlay>{title}</LinkOverlay>
              </Link>
            </Heading>
            <Text
              size="sm"
              fontWeight="100"
              maxW={[200, 300, 400, 600]}
              isTruncated
            >
              {summary}
            </Text>
          </VStack>
          <Spacer />
          <VStack spacing={4} align="stretch" textAlign="right">
            <Text fontWeight="400">{year}</Text>
            <HStack spacing={1}>
              {tags.map((tag) => (
                <Badge
                  fontSize="0.7em"
                  colorScheme="blackAlpha"
                  variant="outline"
                >
                  {tag.name}
                </Badge>
              ))}
            </HStack>
          </VStack>
        </Flex>
      </LinkBox>
    </Box>
  );
}
