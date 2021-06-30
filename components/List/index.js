import { GridItem, VStack } from "@chakra-ui/react";

import Card from "../Card";

export default function List({ pages }) {
  return (
    <GridItem colSpan={1} w="full" overflowY="auto">
      <VStack spacing={0} align="stretch">
        {pages.map((page) => (
          <Card
            title={page.properties.title?.title[0].plain_text}
            summary={page.properties.summary?.rich_text[0].plain_text}
            slug={page.properties.slug?.rich_text[0].plain_text}
            year={new Date(page.properties.date?.date.start).getFullYear()}
            tags={page.properties.tags?.multi_select}
          />
        ))}
      </VStack>
    </GridItem>
  );
}
