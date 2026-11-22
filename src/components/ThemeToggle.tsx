import { Moon, Sun } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "@/components/adaptive-motion";
import { useTheme } from "@/components/ThemeProvider";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative h-9 w-9 grid place-items-center rounded-full border border-border/60 bg-card/60 backdrop-blur-md text-foreground/80 hover:text-foreground hover:border-[hsl(var(--np-blue)/0.5)] transition-all ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
