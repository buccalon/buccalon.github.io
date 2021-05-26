import React, { useState } from "react";
import Head from "next/head";
import Card from "../components/Card";
import { getItemsByType } from "../utils/notion";
import {
  Box,
  Container,
  Text,
  Tag,
  Flex,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";

export async function getServerSideProps() {
  const data = await getItemsByType("post", "date");
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [items, setItems] = useState(data);

  console.log(data);
  return (
    <div>
      <Head>
        <title>Brunoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="green.100" minH="100vh">
        <Container>
          <Text
            color="cyan.900"
            fontWeight="semibold"
            m="2rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            Hello World!
          </Text>
          <UnorderedList spacing={4}>
            {items.map((item) => (
              <Flex bg="cyan.900" h="60px" color="green.100" borderRadius="md">
                <Box p="4">{item.properties.title.title[0].plain_text}</Box>
                <Spacer />
                <Box p="4">
                  <Tag>{item.properties.date.date.start}</Tag>
                </Box>
              </Flex>
            ))}

            <Card />
          </UnorderedList>
        </Container>
      </Box>
    </div>
  );
}
