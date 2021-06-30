import { HStack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { GoMarkGithub } from "react-icons/go";
import { SiAcademia, SiOrcid } from "react-icons/si";
import SocialButton from "../SocialButton";
import siteConfig from "../../site.config";

export default function Social() {
  return (
    <HStack>
      <a href={"mailto:" + siteConfig.email} target="_blank">
        <SocialButton aria-label="Email" icon={<EmailIcon />} />
      </a>
      <a href={"https://github.com/" + siteConfig.github} target="_blank">
        <SocialButton aria-label="GitHub" icon={<GoMarkGithub />} />
      </a>
      <a href={siteConfig.academia} target="_blank">
        <SocialButton aria-label="Academia.edu" icon={<SiAcademia />} />
      </a>
      <a href={"https://orcid.org/" + siteConfig.orcid} target="_blank">
        <SocialButton aria-label="ORCID" icon={<SiOrcid />} />
      </a>
    </HStack>
  );
}
