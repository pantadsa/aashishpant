import { motion } from "framer-motion";
import { Target } from "lucide-react";

const CareerObjectiveSection = () => (
  <section className="bg-secondary/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Target size={28} className="text-accent" />
        </div>
        <h2 className="section-title text-center">Career Objective</h2>
        <p className="text-foreground/80 text-lg leading-relaxed mt-6">
          "To secure an entry-level position as a Social Media Handler or Online Advertising Assistant where I can apply my creativity, technical knowledge, and passion for digital marketing while gaining real-world experience and growing professionally."
        </p>
      </motion.div>
    </div>
  </section>
);

export default CareerObjectiveSection;
