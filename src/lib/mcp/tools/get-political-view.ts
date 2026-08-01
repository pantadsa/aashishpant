import { defineTool } from "@lovable.dev/mcp-js";
import { politicalView } from "../data";

export default defineTool({
  name: "get_political_view",
  title: "Get political view",
  description:
    "Get Aashish Pant's stated political view and vision for Nepal, as published on his portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: politicalView.join("\n\n") }],
    structuredContent: { paragraphs: politicalView },
  }),
});
