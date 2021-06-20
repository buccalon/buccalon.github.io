import Link from "next/link";
import {
  GridItem,
  Container,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Header({ title, subtitle }) {
  return (
    <GridItem colSpan={1} borderBottom="2px" borderColor="black">
      <Container p={[4, 4, 18, 18]} m={0} textAlign="left" h="100%" w="100%">
        <Heading
          as="h1"
          fontSize={["2xl", "2xl", "3xl", "4xl"]}
          m={2}
          isTruncated
        >
          {title}
        </Heading>
        <Text fontWeight="light" m={2} fontSize={["md", "lg", "xl", "2xl"]}>
          {subtitle}
        </Text>

        <a href="mailto:buccalon@rice.edu" target="_blank">
          <IconButton
            m={2}
            variant="ghost"
            colorScheme="gray"
            aria-label="Send email"
            icon={<EmailIcon />}
          />
        </a>
      </Container>
    </GridItem>
  );
}

// To-do: Turn top image on mobile devices
