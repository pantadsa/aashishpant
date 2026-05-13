import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import AuroraBackground from "@/components/AuroraBackground";
import MouseGlow from "@/components/MouseGlow";
import Particles from "@/components/Particles";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PoliticalViewSection from "@/components/PoliticalViewSection";
import ArticlesSection from "@/components/ArticlesSection";
import CareerObjectiveSection from "@/components/CareerObjectiveSection";
import LanguagesInterestsSection from "@/components/LanguagesInterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen relative">
    <AuroraBackground />
    <MouseGlow />
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <div className="relative">
      <Particles count={18} className="!fixed inset-0 -z-10" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>
      <div className="divide-y divide-border/30">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <PoliticalViewSection />
        <ArticlesSection />
        <CareerObjectiveSection />
        <LanguagesInterestsSection />
        <ContactSection />
      </div>
    </div>
    <Footer />
  </div>
);

export default Index;
