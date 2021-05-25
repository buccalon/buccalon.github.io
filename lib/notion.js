const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DB;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
};

export const getPosts = async () => {
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
            equals: "post",
          },
        },
      ],
    },
    sorts: [
      {
        property: "date",
        direction: "ascending",
      },
    ],
  });
  return response.results;
};
