import { GridItem, VStack, StackDivider } from "@chakra-ui/react";

import Card from "../Card";

export default function List() {
  return (
    <GridItem colSpan={1} w="full" overflowY="auto">
      <VStack spacing={0} align="stretch"></VStack>
    </GridItem>
  );
}
