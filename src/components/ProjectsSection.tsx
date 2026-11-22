import { motion } from "@/components/adaptive-motion";
import { ExternalLink, Github, Code2, Newspaper, Cpu } from "lucide-react";

const projects = [
  {
    icon: Code2,
    title: "Personal Portfolio",
    description:
      "A modern, animated portfolio built with React, Tailwind CSS, and Framer Motion — showcasing my work as a student, writer, and thinker.",
    tags: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    code: "#",
  },
  {
    icon: Newspaper,
    title: "Youth Voices Blog",
    description:
      "A long-form writing project amplifying youth perspectives on Nepali politics, technology, and social change.",
    tags: ["Writing", "Editorial", "Civic Tech"],
    live: "#articles",
    code: "#",
  },
  {
    icon: Cpu,
    title: "Engineering Notes",
    description:
      "An evolving collection of computer engineering notes, mini-projects, and experiments from my coursework.",
    tags: ["C", "Python", "Hardware"],
    live: "#",
    code: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-2">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Projects
            </span>
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
          </div>
          <h2 className="section-title text-center">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            A few things I've been building and writing lately.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group flex flex-col"
            >
              <div
                className="h-12 w-12 rounded-xl grid place-items-center mb-4 text-white"
                style={{ background: "var(--gradient-np)" }}
              >
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border/60 bg-secondary/40 text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1 border-t border-border/40">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-[hsl(var(--np-blue))] transition-colors"
                >
                  <ExternalLink size={13} /> Live
                </a>
                <a
                  href={p.code}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-[hsl(var(--np-red))] transition-colors"
                >
                  <Github size={13} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
