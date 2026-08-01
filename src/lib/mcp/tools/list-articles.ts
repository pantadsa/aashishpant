import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { articles } from "../data";

export default defineTool({
  name: "list_articles",
  title: "List articles",
  description:
    "List Aashish Pant's published articles with title, summary, category, read time and public URL.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category filter, e.g. Politics, Youth, Society."),
    publishedOnly: z
      .boolean()
      .optional()
      .describe("When true, exclude upcoming/placeholder articles."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, publishedOnly }) => {
    let items = articles;
    if (publishedOnly) items = items.filter((a) => a.published);
    if (category) {
      const needle = category.toLowerCase();
      items = items.filter((a) => a.category.toLowerCase() === needle);
    }
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { articles: items },
    };
  },
});
