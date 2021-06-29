import { HStack, IconButton } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { GoMarkGithub } from "react-icons/go";
import { SiAcademia, SiOrcid } from "react-icons/si";
import siteConfig from "../../site.config";

export default function Social() {
  return (
    <HStack>
      <a href={"mailto:" + siteConfig.email} target="_blank">
        <IconButton
          colorScheme="gray"
          aria-label="Email"
          isRound="True"
          icon={<EmailIcon />}
        />
      </a>
      <a href={"https://github.com/" + siteConfig.github} target="_blank">
        <IconButton
          colorScheme="gray"
          aria-label="GitHub"
          isRound="True"
          icon={<GoMarkGithub />}
        />
      </a>
      <a href={siteConfig.academia} target="_blank">
        <IconButton
          colorScheme="gray"
          aria-label="Academia.edu"
          isRound="True"
          icon={<SiAcademia />}
        />
      </a>
      <a href={"https://orcid.org/" + siteConfig.orcid} target="_blank">
        <IconButton
          colorScheme="gray"
          aria-label="ORCID"
          isRound="True"
          icon={<SiOrcid />}
        />
      </a>
    </HStack>
  );
}
