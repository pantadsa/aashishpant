import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Why Youth Voices Matter in Today's Democracy",
    category: "Youth Voices",
    excerpt: "Exploring how young people can shape the future of governance through active participation and digital advocacy.",
    readTime: "5 min read",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "The Role of Social Media in Political Awareness",
    category: "Politics & Society",
    excerpt: "An analysis of how digital platforms are transforming political discourse among Nepal's youth.",
    readTime: "7 min read",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Digital Literacy: A Necessity, Not a Luxury",
    category: "Digital Awareness",
    excerpt: "Understanding the importance of digital skills in bridging the gap between urban and rural communities.",
    readTime: "4 min read",
    color: "from-emerald-500 to-teal-500",
  },
];

const WritingSection = () => (
  <section id="writing" className="relative overflow-hidden">
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
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Writing & Blog</span>
        </div>
        <h2 className="section-title">Articles & <span className="gradient-text">Thoughts</span></h2>
        <p className="section-subtitle">Perspectives on society, tech, and youth</p>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              className="glass-card group hover-lift flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.color}`} />

              {/* Category + read time */}
              <div className="flex items-center justify-between mb-4 pt-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${a.color} text-primary-foreground`}>
                  {a.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} /> {a.readTime}
                </span>
              </div>

              <div className="flex items-start gap-2 mb-2">
                <BookOpen size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors leading-snug">
                  {a.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{a.excerpt}</p>

              <Button variant="ghost" size="sm" className="self-start gap-1 text-accent hover:text-accent/80 px-0 group/btn">
                Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WritingSection;
