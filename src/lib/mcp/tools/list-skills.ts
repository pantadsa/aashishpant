import { defineTool } from "@lovable.dev/mcp-js";
import { skills } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List Aashish Pant's technical and soft skills with proficiency levels.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(skills, null, 2) }],
    structuredContent: { skills },
  }),
});
