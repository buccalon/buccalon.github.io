import { Container, IconButton } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { GoMarkGithub } from "react-icons/go";
import { SiAcademia, SiOrcid } from "react-icons/si";
import siteConfig from "../../site.config";

export default function Social() {
  return (
    <Container my={5} p={0}>
      <a href={"mailto:" + siteConfig.email} target="_blank">
        <IconButton variant="link" aria-label="Email" icon={<EmailIcon />} />
      </a>
      <a href={"https://github.com/" + siteConfig.github} target="_blank">
        <IconButton
          variant="link"
          aria-label="GitHub"
          icon={<GoMarkGithub />}
        />
      </a>
      <a href={siteConfig.academia} target="_blank">
        <IconButton
          variant="link"
          aria-label="Academia"
          icon={<SiAcademia />}
        />
      </a>
      <a href={"https://orcid.org/" + siteConfig.orcid} target="_blank">
        <IconButton variant="link" aria-label="ORCID" icon={<SiOrcid />} />
      </a>
    </Container>
  );
}
