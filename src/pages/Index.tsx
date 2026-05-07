import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ArticlesSection from "@/components/ArticlesSection";
import CareerObjectiveSection from "@/components/CareerObjectiveSection";
import LanguagesInterestsSection from "@/components/LanguagesInterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <div className="divide-y divide-border/60 [&>*]:shadow-[0_1px_0_0_hsl(var(--border)/0.4)]">
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ArticlesSection />
      <CareerObjectiveSection />
      <LanguagesInterestsSection />
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default Index;
