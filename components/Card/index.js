import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export default function Card() {
  const project = {
    title: "Projeto #1",
    description: "Lorem ipsum",
    date: "2017",
    tags: ["design", "code"],
  };

  return (
    <Box overflow="hidden" bgColor="white">
      <LinkBox as="article" p="5" borderWidth="1px" rounded="md">
        <Heading size="md" my="2">
          <LinkOverlay href="#">{project.title}</LinkOverlay>
        </Heading>
        <Text mb="3">{project.description}</Text>

        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          {project.date}
        </Box>
      </LinkBox>
      <Divider orientation="horizontal" />
    </Box>
  );
}
