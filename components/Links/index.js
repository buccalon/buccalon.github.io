import { Container, IconButton } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { GoMarkGithub } from "react-icons/go";
import { SiAcademia, SiOrcid } from "react-icons/si";

export default function Links() {
  return (
    <Container my={5} p={0}>
      <a href="mailto:buccalon@rice.edu" target="_blank">
        <IconButton variant="link" aria-label="Email" icon={<EmailIcon />} />
      </a>
      <a href="https://github.com/buccalon" target="_blank">
        <IconButton
          variant="link"
          aria-label="GitHub"
          icon={<GoMarkGithub />}
        />
      </a>
      <a href="https://rice.academia.edu/buccalon" target="_blank">
        <IconButton
          variant="link"
          aria-label="Academia"
          icon={<SiAcademia />}
        />
      </a>
      <a href="https://orcid.org/0000-0002-6463-936X" target="_blank">
        <IconButton variant="link" aria-label="ORCID" icon={<SiOrcid />} />
      </a>
    </Container>
  );
}
