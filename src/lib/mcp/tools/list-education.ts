import { defineTool } from "@lovable.dev/mcp-js";
import { education, experience } from "../data";

export default defineTool({
  name: "list_education_and_experience",
  title: "List education and experience",
  description:
    "List Aashish Pant's academic journey (degrees, schools, GPA) and experience highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { education, experience };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
