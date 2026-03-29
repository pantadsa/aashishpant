import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor in Computer Engineering",
    school: "Nepal College of Information and Technology",
    year: "2082 – Present",
    gpa: null,
  },
  {
    degree: "+2 Science",
    school: "LRI School (NEB Board)",
    year: "2079 – 2082",
    gpa: "3.86",
  },
];

const EducationSection = () => (
  <section id="education" className="bg-secondary/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic journey</p>

        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              className="glass-card flex gap-4 items-start hover-lift"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{e.degree}</h3>
                <p className="text-muted-foreground">{e.school}</p>
                <p className="text-sm text-muted-foreground mt-1">{e.year}</p>
                {e.gpa && (
                  <span className="inline-block mt-2 text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                    GPA: {e.gpa}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
