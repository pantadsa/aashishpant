import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Why Youth Voices Matter in Today's Democracy",
    category: "Youth Voices",
    excerpt: "Exploring how young people can shape the future of governance through active participation and digital advocacy.",
  },
  {
    title: "The Role of Social Media in Political Awareness",
    category: "Politics & Society",
    excerpt: "An analysis of how digital platforms are transforming political discourse among Nepal's youth.",
  },
  {
    title: "Digital Literacy: A Necessity, Not a Luxury",
    category: "Digital Awareness",
    excerpt: "Understanding the importance of digital skills in bridging the gap between urban and rural communities.",
  },
];

const WritingSection = () => (
  <section id="writing" className="section-container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Writing & Blog</h2>
      <p className="section-subtitle">Articles and thoughts</p>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            className="glass-card group hover-lift flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
              {a.category}
            </span>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
              {a.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{a.excerpt}</p>
            <Button variant="ghost" size="sm" className="self-start gap-1 text-accent hover:text-accent/80 px-0">
              Read More <ArrowRight size={14} />
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default WritingSection;
