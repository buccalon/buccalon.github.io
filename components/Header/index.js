import { GridItem, VStack, Spacer, Heading, Text } from "@chakra-ui/react";

import Social from "../Social";

export default function Header({ title, subtitle }) {
  return (
    <GridItem colSpan={1} borderBottom="2px" borderColor="black">
      <VStack
        p={["1em", "1em", "2em", "2em"]}
        m={0}
        align="left"
        h="100%"
        w="100%"
      >
        <Spacer />
        <Heading
          as="h1"
          fontSize={["2xl", "2xl", "3xl", "4xl"]}
          m={2}
          isTruncated
        >
          {title}
        </Heading>
        <Text fontWeight="light" m={2} fontSize={["md", "lg", "xl", "2xl"]}>
          {subtitle}
        </Text>
        <Social />
      </VStack>
    </GridItem>
  );
}

// To-do: Turn top image on mobile devices
