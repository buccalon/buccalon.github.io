import Head from "next/head";
import Link from "next/link";
import { Box, Heading, Text, Divider, VStack } from "@chakra-ui/react";

export default function Page({ title, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <VStack align="stretch" spacing={4} m={4}>
        <Box
          style={{ transition: "background 300ms" }}
          _hover={{ bg: "theme.featured", cursor: "pointer" }}
        >
          <Link href="/" passHref>
            <a>← Back to home</a>
          </Link>
        </Box>
        <Divider />
        <Heading size="lg">{title}</Heading>
        <Divider />
        <Text size="sm">{content}</Text>
      </VStack>
    </div>
  );
}
