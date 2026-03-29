import { motion } from "framer-motion";
import { MapPin, Lightbulb, Users } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Based in Kathmandu, Nepal" },
  { icon: Lightbulb, label: "Tech & Social Impact" },
  { icon: Users, label: "Youth Voice Advocate" },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Getting to know Aashish</p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-foreground/80 leading-relaxed text-lg">
            Aashish Pant is a motivated and creative first-year Computer Engineering student based in Kathmandu, Nepal. Alongside his technical journey, he is deeply engaged in understanding politics as a political observer and actively contributes as a social writer focusing on youth voices. He aims to uplift perspectives through impactful articles and digital platforms. With strong communication skills and curiosity, he bridges technology and society.
          </p>
        </div>
        <div className="space-y-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="glass-card flex items-center gap-3 hover-lift">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon size={20} className="text-accent" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
