import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
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
  <div className="min-h-screen relative">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[5%] -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/15 blur-3xl animate-blob" />
        <div className="absolute top-[40%] -right-32 w-[32rem] h-[32rem] rounded-full bg-purple-400/15 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-[10%] left-1/3 w-[26rem] h-[26rem] rounded-full bg-blue-300/15 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>
      <div className="divide-y divide-border/40 [&>*]:shadow-[0_1px_0_0_hsl(var(--border)/0.4)]">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
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
