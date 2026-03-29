import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    id="hero"
  >
    {/* BG layers */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 hero-gradient opacity-85" />
    </div>

    {/* Animated grid overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(hsl(217 91% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.3) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    {/* Glowing orbs */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[120px] opacity-20"
      style={{ background: "hsl(217, 91%, 60%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-15"
      style={{ background: "hsl(250, 80%, 60%)" }}
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Content */}
    <div className="relative z-10 section-container flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-20">
      {/* Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-medium tracking-wider uppercase">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Hi, I'm{" "}
          <span className="relative">
            <span className="gradient-text">Aashish</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 rounded-full"
              style={{ background: "var(--gradient-accent)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.6 }}
            />
          </span>
          <br />
          <span className="text-primary-foreground/90">Pant</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2 justify-center md:justify-start mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {["Computer Engineering", "Political Observer", "Social Writer"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-primary-foreground/10 text-primary-foreground/70 text-sm font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-primary-foreground/50 max-w-lg mb-8 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Amplifying Youth Voices through Technology and Digital Media
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button size="lg" className="gap-2 shadow-lg shadow-accent/20 px-6" asChild>
            <a href="#writing">
              <ArrowDown size={16} /> View My Work
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-6"
            asChild
          >
            <a href="#contact">
              <Mail size={16} /> Contact Me
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={floatingVariants}
      >
        {/* Rotating ring */}
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Accent ring glow */}
        <div className="absolute -inset-1 rounded-full opacity-40 blur-md" style={{ background: "var(--gradient-accent)" }} />
        
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-accent/40">
          <img
            src={profilePhoto}
            alt="Aashish Pant"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>

        {/* Floating badge */}
        <motion.div
          className="absolute -bottom-2 -right-2 md:bottom-2 md:right-0 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm shadow-lg border border-border text-xs font-medium"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          🇳🇵 Kathmandu, Nepal
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-xs tracking-wider uppercase">Scroll</span>
      <ChevronDown size={18} />
    </motion.a>
  </section>
);

export default HeroSection;
