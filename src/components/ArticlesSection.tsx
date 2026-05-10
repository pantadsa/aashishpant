import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import youthImg from "@/assets/article-youth-future.jpg";
import genzImg from "@/assets/article-genz-politics.jpg";
import voteImg from "@/assets/article-vote-rebellion.jpg";
import comingSoonImg from "@/assets/article-coming-soon.jpg";

const articles = [
  {
    title: "१८ वर्षे आँखाबाट मेरो देश, मेरो भविष्य !",
    description:
      "An 18-year-old's perspective on Nepal's future, identity, and the dreams of a new generation stepping into civic life.",
    href: "https://nayasandesh.com/archives/70948",
    image: youthImg,
    category: "Youth",
    readTime: "5 min read",
    author: "Aashish Pant",
  },
  {
    title:
      "प्रदर्शनबाट सत्तासम्म : जेन–जेड पुस्ताले नेपालको राजनीति कसरी पुनःपरिभाषित गर्‍यो?",
    description:
      "How Nepal's Gen-Z generation moved from street protests to political power — redefining the country's political landscape.",
    href: "https://nayasandesh.com/archives/77135",
    image: genzImg,
    category: "Politics",
    readTime: "8 min read",
    author: "Aashish Pant",
  },
  {
    title: "भोटलाई विद्रोह बनाउने जेन्जी पुस्ता : फागुन निर्वाचन निर्णायक",
    description:
      "The Gen-Z generation turning votes into rebellion — why the upcoming Falgun election will be decisive for Nepal.",
    href: "https://simananews.com/archives/9174",
    image: voteImg,
    category: "Society",
    readTime: "6 min read",
    author: "Aashish Pant",
  },
  {
    title: "Coming Soon",
    description: "New insights on politics, youth, and digital society.",
    href: "#",
    image: comingSoonImg,
    category: "Upcoming",
    readTime: "—",
    author: "Aashish Pant",
    placeholder: true,
  },
];

const ArticlesSection = () => (
  <section id="articles" className="relative bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-1 max-w-[60px] bg-accent" />
          <span className="text-accent text-sm font-medium uppercase tracking-widest">
            Published Work
          </span>
        </div>
        <h2 className="section-title">
          <span className="gradient-text">Articles</span>
        </h2>
        <p className="section-subtitle">
          Selected pieces published in national media
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card !p-0 overflow-hidden flex flex-col hover-lift"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-90" />
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/80 backdrop-blur border border-accent/30 text-accent">
                  {a.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <User size={12} /> {a.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {a.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {a.description}
                </p>

                {a.placeholder ? (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="self-start"
                  >
                    Coming Soon
                  </Button>
                ) : (
                  <Button
                    asChild
                    size="sm"
                    className="self-start gap-1.5 group/btn"
                  >
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read full article: ${a.title}`}
                    >
                      Read More
                      <ArrowUpRight
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </Button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ArticlesSection;
