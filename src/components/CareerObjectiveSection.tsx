import { motion } from "@/components/adaptive-motion";
import { Target, Quote } from "lucide-react";

const CareerObjectiveSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />

    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
          style={{ background: "var(--gradient-accent)" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Target size={30} className="text-primary-foreground" />
        </motion.div>

        <div className="flex items-center gap-3 justify-center mb-2">
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Vision</span>
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
        </div>
        <h2 className="section-title text-center">Career <span className="gradient-text">Objective</span></h2>

        <div className="glass-card mt-8 relative overflow-hidden">
          {/* Decorative quote */}
          <Quote size={60} className="absolute top-4 left-4 text-accent/5" />
          <Quote size={60} className="absolute bottom-4 right-4 text-accent/5 rotate-180" />

          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" style={{ background: "var(--gradient-accent)" }} />
            <p className="text-foreground/80 text-lg leading-relaxed pt-6 italic">
              "To become an exemplary person who uses knowledge, technology, and creativity to make a positive impact in society. I aim to raise the voices of the voiceless through writing and digital platforms while growing into a skilled and responsible computer engineer. My goal is to combine technical expertise with social awareness to contribute meaningfully to both the digital world and the community."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CareerObjectiveSection;
