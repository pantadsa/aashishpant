import { motion } from "framer-motion";
import { Award, Presentation, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Leadership & Teamwork",
    desc: "Contributed to school and community events through leadership and teamwork.",
  },
  {
    icon: Presentation,
    title: "Event Organization & Content",
    desc: "Experience in event organization and digital content creation.",
  },
  {
    icon: MessageCircle,
    title: "Communication & Coordination",
    desc: "Strong communication and coordination skills from group and club activities.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="bg-secondary/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Highlights & contributions</p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card text-center hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
