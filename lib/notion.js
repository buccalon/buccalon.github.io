const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_KEY });

export const getDatabase = async () => {
  const databaseId = process.env.NOTION_DB;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
};
