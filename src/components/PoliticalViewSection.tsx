import { motion } from "@/components/adaptive-motion";
import { Quote } from "lucide-react";

const paragraphs = [
  "I believe politics should be a platform for development, innovation, and positive change rather than conflict and division. My political view focuses on empowering youth, improving education, promoting technology-driven governance, and creating opportunities within Nepal so talented young people do not feel forced to leave the country for success.",
  "I support transparent leadership, accountability, and policies that prioritize practical development, entrepreneurship, digital transformation, and sustainable growth. I believe Nepal needs modern thinking, skilled leadership, and active participation from educated youth to build a stronger and more self-reliant nation.",
  "My vision is for a progressive Nepal where technology, education, and unity become the foundation of national growth, helping create a future that is globally competitive while preserving our identity, culture, and values.",
];

const PoliticalViewSection = () => (
  <section id="political-view" className="relative overflow-hidden">
    {/* Animated background accents */}
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-red-500/15 blur-3xl animate-blob" />
      <div
        className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] rounded-full bg-blue-500/20 blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div className="absolute inset-0 grid-lines opacity-[0.07]" />
      {/* Subtle Nepal-inspired triangular silhouette */}
      <svg
        className="absolute right-6 top-1/2 -translate-y-1/2 w-[22rem] h-[22rem] opacity-[0.06] hidden md:block"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 220 L20 20 L160 140 L60 140 L160 220 Z"
          stroke="url(#flag-grad)"
          strokeWidth="2"
          fill="url(#flag-grad)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient id="flag-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
            Perspective
          </span>
        </span>

        <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#f87171,#a78bfa_45%,#60a5fa)]">
            Political View of Aashish Pant
          </span>
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground tracking-wide">
          Vision <span className="text-red-400">•</span> Leadership{" "}
          <span className="text-blue-400">•</span> Innovation{" "}
          <span className="text-red-400">•</span> Development
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative mt-12 max-w-4xl mx-auto"
      >
        {/* Glow ring */}
        <div
          aria-hidden
          className="absolute -inset-px rounded-3xl bg-[linear-gradient(135deg,rgba(239,68,68,0.5),rgba(59,130,246,0.5))] opacity-50 blur-md"
        />

        <article className="relative glass-card !rounded-3xl !p-8 md:!p-12 hover-lift">
          {/* Animated quote icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            className="absolute -top-6 -left-2 md:-top-7 md:-left-4 h-14 w-14 rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#ef4444,#3b82f6)] shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-float"
          >
            <Quote className="h-6 w-6 text-white" strokeWidth={2.5} />
          </motion.div>

          <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Bottom signature accent */}
          <div className="mt-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-blue-500/50" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Aashish Pant
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 via-red-500/50 to-transparent" />
          </div>
        </article>
      </motion.div>

      {/* Glowing divider before articles */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-20 mx-auto h-px max-w-2xl bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.6)]"
      />
    </div>
  </section>
);

export default PoliticalViewSection;
