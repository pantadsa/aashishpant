import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listArticles from "./tools/list-articles";
import listSkills from "./tools/list-skills";
import listEducation from "./tools/list-education";
import listProjects from "./tools/list-projects";
import getPoliticalView from "./tools/get-political-view";

export default defineMcp({
  name: "aashish-pant",
  title: "Aashish Pant",
  version: "0.1.0",
  instructions:
    "Public tools for Aashish Pant's portfolio. Use `get_profile` for bio, roles and social links, `list_articles` for published writing, `list_skills`, `list_projects`, `list_education_and_experience`, and `get_political_view` for his stated political vision. All data is public portfolio content.",
  tools: [
    getProfile,
    listArticles,
    listSkills,
    listProjects,
    listEducation,
    getPoliticalView,
  ],
});
