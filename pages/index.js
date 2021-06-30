import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import List from "../components/List";

import siteConfig from "../site.config";
import { getDatabase } from "../lib/notion";

export const databaseId = process.env.NOTION_DB;

export default function Home({ pages }) {
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
        <List pages={pages} />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const database = await getDatabase(databaseId);
    return {
      props: {
        pages: database,
      },
      revalidate: 1,
    };
  } catch (err) {
    console.error("page error", err);
    throw err;
  }
};
