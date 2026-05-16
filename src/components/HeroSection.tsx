import { motion } from "framer-motion";
import { ArrowDown, Mail, ChevronDown } from "lucide-react";
import RotatingTitle from "@/components/RotatingTitle";
import NepalMapBg from "@/components/NepalMapBg";
const profilePhoto = "https://i.postimg.cc/MHC13Mcm/IMG-1185.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const headline = ["Hi,", "I'm", "Aashish", "Pant"];

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    id="hero"
  >
    {/* BG layers */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover scale-105 opacity-40" />
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-background/40" />
    </div>

    {/* Animated grid overlay */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: "linear-gradient(hsl(217 91% 60% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.3) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    {/* Nepal map outline */}
    <NepalMapBg className="absolute inset-x-0 bottom-10 mx-auto w-[90%] max-w-5xl h-[40%] opacity-30" />

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

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-5 drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
              className="inline-block mr-3"
            >
              {word === "Aashish" ? (
                <span className="relative">
                  <span className="gradient-text">{word}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 rounded-full"
                    style={{ background: "var(--gradient-accent)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  />
                </span>
              ) : (
                <span className={word === "Pant" ? "text-white/95" : ""}>{word}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <RotatingTitle />
        </motion.div>

        <motion.p
          className="text-white/80 max-w-lg mb-8 leading-relaxed text-lg drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Amplifying Youth Voices through Technology and Digital Media.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="#articles"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/40 hover:shadow-purple-500/60 hover:scale-105 hover:brightness-110 transition-all duration-300"
          >
            <ArrowDown size={16} /> View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg font-semibold text-sm border border-white/40 bg-white/5 text-white backdrop-blur-md hover:bg-white/15 hover:border-white/70 hover:scale-105 transition-all duration-300"
          >
            <Mail size={16} /> Contact Me
          </a>
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
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-dashed border-accent/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -inset-8 rounded-full border border-white/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute -inset-2 rounded-full opacity-60 blur-2xl"
          style={{ background: "linear-gradient(135deg, hsl(var(--np-red) / 0.7), hsl(var(--np-blue) / 0.7))" }}
        />

        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_30px_80px_-20px_hsl(var(--np-blue)/0.5)]">
          <img
            src={profilePhoto}
            alt="Aashish Pant"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>

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
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <a
        href="#about"
        className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-xs tracking-wider uppercase">Explore</span>
        <ChevronDown size={18} />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
