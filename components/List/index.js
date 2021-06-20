import { GridItem } from "@chakra-ui/react";

import Card from "../Card";

export default function List() {
  return (
    <GridItem colSpan={1}>
      <Card />
      {/* <UnorderedList spacing={4}>
              {items.map((item) => (
                <Flex
                  bg="cyan.900"
                  h="60px"
                  color="green.100"
                  borderRadius="md"
                >
                  <Box p="4">{item.properties.title.title[0].plain_text}</Box>
                  <Spacer />
                  <Box p="4">
                    <Tag>{item.properties.date.date.start}</Tag>
                  </Box>
                </Flex>
              ))}
            </UnorderedList>*/}
    </GridItem>
  );
}

// To-do: Turn top image on mobile devices
