// import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";
import siteConfig from "../site.config";

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

  return (
    <div>
      <Head>
        <title>{siteConfig.title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={siteConfig.description} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <Header title={siteConfig.title} subtitle={siteConfig.description} />
        <List />
      </Layout>
    </div>
  );
}
