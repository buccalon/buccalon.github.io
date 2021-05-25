import React, { useState } from "react";
import Head from "next/head";
import {
  Spinner,
  Box,
  Container,
  Text,
  Tag,
  Flex,
  ListItem,
  UnorderedList,
  Spacer,
} from "@chakra-ui/react";
import { getPosts } from "../lib/notion";

export async function getServerSideProps() {
  const data = await getPosts();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [posts, setPosts] = useState(data);
  console.log(data);
  return (
    <div>
      <Head>
        <title>Brunoland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box overflow="hidden" bg="green.100" minH="200vh">
        <Container>
          <Text
            color="cyan.900"
            fontWeight="semibold"
            m="2rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            Hell
            <Spinner />
            &nbsp;World!
          </Text>

          <UnorderedList spacing={4}>
            {posts.map((post) => (
              <Flex bg="cyan.900" h="60px" color="green.100" borderRadius="md">
                <Box p="4">{post.properties.title.title[0].plain_text}</Box>
                <Spacer />
                <Box p="4">
                  <Tag>{post.properties.date.date.start}</Tag>
                </Box>
              </Flex>
            ))}
          </UnorderedList>
        </Container>
      </Box>
    </div>
  );
}
