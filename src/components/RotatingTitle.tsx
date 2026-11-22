import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "@/components/adaptive-motion";
import { useStaticMotion } from "@/hooks/use-static-motion";

const titles = [
  "Computer Engineering Student",
  "Political Observer",
  "Social Writer",
  "Youth Voice Advocate",
];

const RotatingTitle = () => {
  const [i, setI] = useState(0);
  const staticMotion = useStaticMotion();
  useEffect(() => {
    if (staticMotion) return;
    const id = setInterval(() => setI((n) => (n + 1) % titles.length), 2600);
    return () => clearInterval(id);
  }, [staticMotion]);

  return (
    <div className="h-8 md:h-9 relative overflow-hidden flex items-center justify-center md:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[staticMotion ? 0 : i]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/8 border border-white/15 backdrop-blur-md text-white/95 text-sm md:text-[15px] font-medium"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--np-red))] to-[hsl(var(--np-blue))]" />
          {titles[staticMotion ? 0 : i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTitle;
