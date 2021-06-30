import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lora";
import "@fontsource/notable";
import siteConfig from "../site.config";

const Theme = extendTheme({
  fonts: {
    body: "Lora, sans-serif",
    heading: "Notable, sans-serif",
  },
  colors: {
    theme: {
      featured: siteConfig.featuredColor,
    },
  },
});

export default Theme;
