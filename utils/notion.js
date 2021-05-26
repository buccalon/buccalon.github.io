const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DB;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
};

export const getItemsByType = async (type, sort) => {
  const databaseId = process.env.NOTION_DB;
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
        {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "type",
          select: {
            equals: type,
          },
        },
      ],
    },
    sorts: [
      {
        property: sort,
        direction: "ascending",
      },
    ],
  });
  return response.results;
};
