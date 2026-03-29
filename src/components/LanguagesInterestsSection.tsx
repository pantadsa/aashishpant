import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";

const languages = ["English", "Nepali", "Hindi"];
const interests = [
  "Exploring AI and emerging technologies",
  "Social media trends & digital marketing",
  "Designing images and videos",
];

const LanguagesInterestsSection = () => (
  <section className="section-container">
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe size={24} className="text-accent" />
          <h2 className="section-title mb-0">Languages</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {languages.map((l) => (
            <span
              key={l}
              className="px-5 py-2.5 rounded-full bg-accent/10 text-accent font-medium text-sm hover-lift cursor-default"
            >
              {l}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={24} className="text-accent" />
          <h2 className="section-title mb-0">Interests</h2>
        </div>
        <ul className="space-y-3">
          {interests.map((item) => (
            <li key={item} className="glass-card py-3 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default LanguagesInterestsSection;
