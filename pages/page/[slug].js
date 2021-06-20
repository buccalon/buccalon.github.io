import Head from "next/head";
import Link from "next/link";

import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page Title</title>
      </Head>
      <Layout>
        <VStack align="stretch" spacing={4} m={4}>
          <Box
            style={{ transition: "background 300ms" }}
            _hover={{ bg: "yellow.200", cursor: "pointer" }}
          >
            <Link href="/" passHref>
              <a>← Back to home</a>
            </Link>
          </Box>
          <Divider />
          <Heading size="lg">Title</Heading>
          <Divider />
          <Text size="sm">Page Content</Text>
        </VStack>
      </Layout>
    </div>
  );
}
