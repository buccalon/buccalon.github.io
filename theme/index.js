import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lora";
import "@fontsource/notable";

const Theme = extendTheme({
  fonts: {
    body: "Lora, sans-serif",
    heading: "Notable, sans-serif",
  },
  colors: {
    marker: {
      yellow: "#f7fafc",
    },
  },
});

export default Theme;
