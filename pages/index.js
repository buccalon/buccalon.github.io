// import React, { useState } from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import List from "../components/List";

import { Grid } from "@chakra-ui/react";

// import { getItemsByType } from "../utils/notion";

/* export async function getServerSideProps() {
  const data = await getItemsByType("project", "date");
  return {
    props: {
      data,
    },
  };
} */

export default function Home() {
  /*   const [items, setItems] = useState(data);
   */

  const title = "Bruno Buccalon";
  const subtitle =
    "An architect writing about environmental history at Rice University.";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        h="100vh"
        templateRows={["0.5fr 0.5fr 2fr", "1fr 0.5fr 2fr", "1fr 1fr"]}
        templateColumns={["1fr", "1fr", "1fr 2fr"]}
      >
        <Sidebar />
        <Header title={title} subtitle={subtitle} />
        <List />
      </Grid>
    </div>
  );
}
