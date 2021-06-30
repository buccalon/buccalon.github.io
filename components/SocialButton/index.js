import { IconButton } from "@chakra-ui/react";

export default function SocialButton(props) {
  const { ...rest } = props;
  return (
    <IconButton
      variant="outline"
      colorScheme="gray"
      isRound="True"
      _hover={{ bg: "theme.featured", borderColor: "#FFF" }}
      {...rest}
    />
  );
}
