import { defineTool } from "@lovable.dev/mcp-js";
import { profile, socialLinks } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Aashish Pant's public profile: name, location, roles, career objective, languages, interests and social links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { ...profile, socialLinks };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
