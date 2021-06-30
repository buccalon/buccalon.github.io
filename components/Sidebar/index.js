import { GridItem } from "@chakra-ui/react";
import siteConfig from "../../site.config";

export default function Sidebar() {
  return (
    <GridItem
      rowSpan={[1, 1, 2, 2]}
      colSpan={1}
      bgImage={`url(${siteConfig.background})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRight={["0", "0", "0.6rem solid"]}
      borderBottom={["0.4rem solid", "0.6rem solid", "0"]}
      borderColor="black"
    ></GridItem>
  );
}
