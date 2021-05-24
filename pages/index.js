import Head from "next/head";
import { Box, Container, Text } from "@chakra-ui/react";
import { getDatabase } from "../lib/notion";

export async function getServerSideProps() {
  const data = await getDatabase();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
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
            mb="1rem"
            textAlign="center"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            Hello world!
          </Text>
        </Container>
      </Box>
    </div>
  );
}
