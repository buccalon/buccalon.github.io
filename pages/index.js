// import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";

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
  const subtitle = "Graduate Student at Rice University";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header title={title} subtitle={subtitle} />
        <List />
      </Layout>
    </div>
  );
}
