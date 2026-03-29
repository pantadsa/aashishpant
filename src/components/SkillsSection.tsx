import { motion } from "framer-motion";
import {
  Megaphone, Palette, Cpu, Code, TrendingUp, Clock,
  PuzzleIcon, Brain, Users, Video
} from "lucide-react";

const skills = [
  { name: "Social Media Advertising", icon: Megaphone, level: 85, color: "from-blue-500 to-cyan-400" },
  { name: "Canva Designing", icon: Palette, level: 90, color: "from-violet-500 to-purple-400" },
  { name: "AI Tools", icon: Cpu, level: 75, color: "from-emerald-500 to-teal-400" },
  { name: "Basic Programming", icon: Code, level: 65, color: "from-orange-500 to-amber-400" },
  { name: "Research & Trend Analysis", icon: TrendingUp, level: 80, color: "from-rose-500 to-pink-400" },
  { name: "Time Management", icon: Clock, level: 85, color: "from-sky-500 to-blue-400" },
  { name: "Problem-Solving", icon: PuzzleIcon, level: 80, color: "from-amber-500 to-yellow-400" },
  { name: "Critical Thinking", icon: Brain, level: 85, color: "from-indigo-500 to-violet-400" },
  { name: "Teamwork & Collaboration", icon: Users, level: 90, color: "from-teal-500 to-emerald-400" },
  { name: "Image & Video Design", icon: Video, level: 78, color: "from-pink-500 to-rose-400" },
];

const SkillsSection = () => (
  <section id="skills" className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)",
      backgroundSize: "32px 32px",
    }} />

    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Skills</span>
        </div>
        <h2 className="section-title">What I <span className="gradient-text">Bring</span></h2>
        <p className="section-subtitle">Technical and soft skills combined</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="glass-card hover-lift group relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              {/* Subtle gradient corner */}
              <div className={`absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br ${s.color} opacity-10 group-hover:opacity-20 transition-opacity blur-xl`} />

              <div className="flex items-center gap-3 mb-3 relative">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}>
                  <s.icon size={18} className="text-primary-foreground" />
                </div>
                <span className="font-medium text-sm flex-1 group-hover:text-accent transition-colors">{s.name}</span>
                <span className="text-xs font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{s.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.04 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
