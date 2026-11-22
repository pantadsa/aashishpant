import { motion } from "@/components/adaptive-motion";
import { Globe, Sparkles, CheckCircle } from "lucide-react";

const languages = [
  { name: "English", level: "Proficient", flag: "🇬🇧" },
  { name: "Nepali", level: "Native", flag: "🇳🇵" },
  { name: "Hindi", level: "Conversational", flag: "🇮🇳" },
];

const interests = [
  { text: "Political awareness and understanding governance", emoji: "🏛️" },
  { text: "Writing and expressing youth voices", emoji: "✍️" },
  { text: "Public speaking and communication", emoji: "🎤" },
  { text: "Analyzing current affairs and societal issues", emoji: "📊" },
];

const LanguagesInterestsSection = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)",
      backgroundSize: "32px 32px",
    }} />

    <div className="section-container relative">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-[40px] bg-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Languages</span>
          </div>
          <h2 className="section-title mb-6">I <span className="gradient-text">Speak</span></h2>

          <div className="space-y-3">
            {languages.map((l, i) => (
              <motion.div
                key={l.name}
                className="glass-card flex items-center gap-4 hover-lift group"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl">{l.flag}</span>
                <div className="flex-1">
                  <span className="font-display font-semibold group-hover:text-accent transition-colors">{l.name}</span>
                  <p className="text-xs text-muted-foreground">{l.level}</p>
                </div>
                <CheckCircle size={18} className="text-emerald-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-[40px] bg-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Interests</span>
          </div>
          <h2 className="section-title mb-6">I <span className="gradient-text">Explore</span></h2>

          <div className="space-y-3">
            {interests.map((item, i) => (
              <motion.div
                key={item.text}
                className="glass-card flex items-center gap-4 hover-lift group"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LanguagesInterestsSection;
