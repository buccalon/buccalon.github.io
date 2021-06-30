const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });
  console.log(response.results);
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
