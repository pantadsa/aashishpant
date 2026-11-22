import { motion } from "@/components/adaptive-motion";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    school: "Nepal College of Information and Technology",
    year: "2082 – Present",
    gpa: null,
    status: "Currently Pursuing",
    icon: "🎓",
  },
  {
    degree: "+2 Science",
    school: "LRI School (NEB Board)",
    year: "2079 – 2082",
    gpa: "3.86",
    status: "Completed",
    icon: "🏆",
  },
  {
    degree: "SEE (School Level)",
    school: "Shree Mountain EMB School (NEB Board)",
    year: "Completed 2079",
    gpa: "3.70",
    status: "Completed",
    icon: "🏫",
  },
];

const EducationSection = () => (
  <section id="education" className="relative overflow-hidden">
    {/* Accent bg */}
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
          <span className="text-accent text-sm font-medium uppercase tracking-widest">Education</span>
        </div>
        <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">Building a strong foundation</p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-10">
            {education.map((e, i) => (
              <motion.div
                key={i}
                className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-4 border-background"
                    style={{ background: "var(--gradient-accent)" }}
                    whileHover={{ scale: 1.15 }}
                  >
                    {e.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                  <div className="glass-card hover-lift group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full" style={{ background: "var(--gradient-accent)" }} />
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${e.gpa ? "bg-emerald-500/10 text-emerald-300 border-emerald-400/30" : "bg-accent/10 text-accent border-accent/30"}`}>
                        {e.status}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors">{e.degree}</h3>
                    <p className="text-muted-foreground mt-1">{e.school}</p>
                    
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-accent" /> {e.year}
                      </span>
                      {e.gpa && (
                        <span className="flex items-center gap-1.5">
                          <Trophy size={14} className="text-amber-500" />
                          <span className="font-semibold text-foreground">GPA: {e.gpa}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
