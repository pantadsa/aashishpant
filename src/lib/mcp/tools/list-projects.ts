import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List Aashish Pant's portfolio projects with descriptions and tech tags.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});
