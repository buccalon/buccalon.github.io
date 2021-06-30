// import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";
import siteConfig from "../site.config";

import { getAllPublished } from "../utils/notion";

export const getStaticProps = async () => {
  try {
    const data = await getAllPublished();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.error("page error", err);
    throw err;
  }
};

export default function Home({ data }) {
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
        <List data={data} />
      </Layout>
    </div>
  );
}
