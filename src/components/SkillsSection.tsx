import { motion } from "framer-motion";
import {
  Megaphone, Palette, Cpu, Code, TrendingUp, Clock,
  PuzzleIcon, Brain, Users, Video
} from "lucide-react";

const skills = [
  { name: "Social Media Advertising", icon: Megaphone, level: 85 },
  { name: "Canva Designing", icon: Palette, level: 90 },
  { name: "AI Tools", icon: Cpu, level: 75 },
  { name: "Basic Programming", icon: Code, level: 65 },
  { name: "Research & Trend Analysis", icon: TrendingUp, level: 80 },
  { name: "Time Management", icon: Clock, level: 85 },
  { name: "Problem-Solving", icon: PuzzleIcon, level: 80 },
  { name: "Critical Thinking", icon: Brain, level: 85 },
  { name: "Teamwork & Collaboration", icon: Users, level: 90 },
  { name: "Image & Video Design", icon: Video, level: 78 },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">What I bring to the table</p>

      <div className="grid sm:grid-cols-2 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="glass-card hover-lift"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <s.icon size={18} className="text-accent" />
              </div>
              <span className="font-medium text-sm">{s.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-accent)" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SkillsSection;
