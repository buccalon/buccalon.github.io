import { GridItem, VStack, StackDivider } from "@chakra-ui/react";

import Card from "../Card";

export default function List() {
  return (
    <GridItem colSpan={1} w="full" overflowY="auto">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={0}
        align="stretch"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </VStack>
    </GridItem>
  );
}

// To-do: Turn top image on mobile devices
