import { GridItem } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <GridItem
      rowSpan={[1, 1, 2]}
      colSpan={1}
      bgImage="url('images/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      borderRight={["0", "0", "0.6rem solid"]}
      borderBottom={["0.4rem solid", "0.6rem solid", "0"]}
      borderColor="black"
    ></GridItem>
  );
}

// To-do: Turn top image on mobile devices
