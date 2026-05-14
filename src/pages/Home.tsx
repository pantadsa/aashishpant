import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, User, Sparkles, BookOpen, Flag, Mail } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const explore = [
  { to: "/about", label: "About", desc: "Background, education & vision", Icon: User, color: "from-blue-500 to-cyan-400" },
  { to: "/skills", label: "Skills & Experience", desc: "Technical and creative strengths", Icon: Sparkles, color: "from-violet-500 to-purple-500" },
  { to: "/political-view", label: "Political View", desc: "Perspective on Nepal's future", Icon: Flag, color: "from-red-500 to-blue-500" },
  { to: "/articles", label: "Articles", desc: "Published writing in national media", Icon: BookOpen, color: "from-amber-500 to-orange-500" },
  { to: "/contact", label: "Contact", desc: "Let's connect and collaborate", Icon: Mail, color: "from-emerald-500 to-teal-400" },
];

const Home = () => (
  <>
    <HeroSection />

    <section className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 justify-center mb-2">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="text-accent text-sm font-medium uppercase tracking-widest">Explore</span>
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
          </div>
          <h2 className="section-title text-center">
            Discover <span className="gradient-text">More</span>
          </h2>
          <p className="section-subtitle text-center">
            A journey through code, words, and vision
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {explore.map(({ to, label, desc, Icon, color }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={to}
                  className="glass-card hover-lift group relative overflow-hidden block h-full"
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity`} />
                  <div className="relative flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors">
                        {label}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-3"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Home;
