import { motion } from "framer-motion";
import { MapPin, Lightbulb, Users, Code, PenLine } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Kathmandu, Nepal", color: "from-blue-500 to-cyan-400" },
  { icon: Lightbulb, label: "Tech & Social Impact", color: "from-amber-400 to-orange-500" },
  { icon: Users, label: "Youth Voice Advocate", color: "from-emerald-400 to-teal-500" },
  { icon: Code, label: "Computer Engineer", color: "from-violet-500 to-purple-500" },
  { icon: PenLine, label: "Social Writer", color: "from-rose-400 to-pink-500" },
];

const stats = [
  { value: "1st", label: "Year Student" },
  { value: "3.86", label: "GPA (+2 Science)" },
  { value: "5+", label: "Skills Mastered" },
];

const AboutSection = () => (
  <section id="about" className="relative overflow-hidden">
    {/* Subtle bg pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(222 60% 18%) 1px, transparent 0)",
      backgroundSize: "40px 40px",
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
          <span className="text-accent text-sm font-medium uppercase tracking-widest">About Me</span>
        </div>
        <h2 className="section-title">Getting to know <span className="gradient-text">Aashish</span></h2>
        <p className="section-subtitle">Bridging technology and society</p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main text */}
          <div className="lg:col-span-3">
            <div className="glass-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-full" style={{ background: "var(--gradient-accent)" }} />
              <p className="text-foreground/80 leading-relaxed text-lg pl-4">
                Aashish Pant is a motivated and creative first-year Computer Engineering student based in Kathmandu, Nepal. Alongside his technical journey, he is deeply engaged in understanding politics as a political observer and actively contributes as a social writer focusing on youth voices. He aims to uplift perspectives through impactful articles and digital platforms. With strong communication skills and curiosity, he bridges technology and society.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center glass-card py-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-2xl font-display font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 space-y-3">
            {highlights.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                className="glass-card flex items-center gap-4 hover-lift group cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon size={18} className="text-primary-foreground" />
                </div>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
