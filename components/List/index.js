import { GridItem, VStack, StackDivider } from "@chakra-ui/react";

import Card from "../Card";

export default function List({ data }) {
  return (
    <GridItem colSpan={1} w="full" overflowY="auto">
      <VStack spacing={0} align="stretch">
        {data.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </VStack>
    </GridItem>
  );
}
