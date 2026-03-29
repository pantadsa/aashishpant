import { motion } from "framer-motion";
import { Award, Presentation, MessageCircle, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Leadership & Teamwork",
    desc: "Contributed to school and community events through leadership and teamwork.",
    color: "from-amber-500 to-orange-500",
    emoji: "🏅",
  },
  {
    icon: Presentation,
    title: "Event Organization & Content",
    desc: "Experience in event organization and digital content creation.",
    color: "from-blue-500 to-cyan-500",
    emoji: "🎯",
  },
  {
    icon: MessageCircle,
    title: "Communication & Coordination",
    desc: "Strong communication and coordination skills from group and club activities.",
    color: "from-emerald-500 to-teal-500",
    emoji: "💬",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />

    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Experience</span>
        </div>
        <h2 className="section-title">Highlights & <span className="gradient-text">Impact</span></h2>
        <p className="section-subtitle">Key contributions and achievements</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card group hover-lift relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
              
              {/* BG decoration */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity blur-2xl`} />

              <div className="relative text-center pt-4">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
