import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    id="hero"
  >
    {/* BG */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
    </div>

    <div className="relative z-10 section-container flex flex-col md:flex-row items-center gap-12 pt-20">
      {/* Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-accent font-medium mb-3 tracking-wide uppercase text-sm">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-4">
          Aashish <span className="gradient-text">Pant</span>
        </h1>
        <p className="text-lg text-primary-foreground/80 font-medium mb-2">
          Computer Engineering Student | Political Observer
        </p>
        <p className="text-primary-foreground/60 max-w-lg mb-8 leading-relaxed">
          Amplifying Youth Voices through Technology and Digital Media
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button size="lg" className="gap-2" asChild>
            <a href="#writing">
              <ArrowDown size={16} /> View My Work
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#contact">
              <Mail size={16} /> Contact Me
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent/40 shadow-2xl">
          <img
            src={profilePhoto}
            alt="Aashish Pant"
            className="w-full h-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
