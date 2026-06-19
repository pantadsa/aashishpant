import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PoliticalViewSection from "@/components/PoliticalViewSection";
import ArticlesSection from "@/components/ArticlesSection";
import CareerObjectiveSection from "@/components/CareerObjectiveSection";
import LanguagesInterestsSection from "@/components/LanguagesInterestsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <HeroSection />
    <AboutSection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <PoliticalViewSection />
    <ArticlesSection />
    <section id="career-objective"><CareerObjectiveSection /></section>
    <section id="languages-interests"><LanguagesInterestsSection /></section>
    <ContactSection />
  </>
);

export default Index;
