import { Grid } from "@chakra-ui/react";

import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    <Grid
      h="100vh"
      templateRows={["0.5fr 0.5fr 2fr", "1fr 0.5fr 2fr", "1fr 1fr"]}
      templateColumns={["1fr", "1fr", "1fr 2fr"]}
    >
      <Sidebar />
      {children}
    </Grid>
  );
}
