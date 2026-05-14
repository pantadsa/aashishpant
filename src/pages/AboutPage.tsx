import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import LanguagesInterestsSection from "@/components/LanguagesInterestsSection";
import CareerObjectiveSection from "@/components/CareerObjectiveSection";

const AboutPage = () => (
  <div className="pt-24 divide-y divide-border/30">
    <AboutSection />
    <EducationSection />
    <LanguagesInterestsSection />
    <CareerObjectiveSection />
  </div>
);

export default AboutPage;
