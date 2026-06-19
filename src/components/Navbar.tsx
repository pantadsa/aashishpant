import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoA from "@/assets/logo-a.jpg";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Articles", id: "articles" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "nav-pill rounded-full px-3 sm:px-4 h-14"
              : "h-16 px-1 border-b border-transparent"
          }`}
        >
          <a href="#hero" onClick={go("hero")} aria-label="Aashish Pant" className="flex items-center gap-2 group">
            <span className="relative">
              <span
                aria-hidden
                className="absolute -inset-1 rounded-xl opacity-60 blur-md transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-np)" }}
              />
              <img
                src={logoA}
                alt="Aashish Pant logo"
                className="relative h-9 w-9 rounded-lg object-cover ring-1 ring-white/20"
              />
            </span>
            <span className="hidden sm:block font-display font-bold text-sm tracking-wide gradient-text-np">
              Aashish Pant
            </span>
          </a>

          {/* Desktop */}
          <div
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  onMouseEnter={() => setHovered(l.id)}
                  className={`relative text-sm font-medium px-3.5 py-2 rounded-full transition-colors ${
                    isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {hovered === l.id && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-foreground/5 border border-border/60"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full"
                      style={{ background: "var(--gradient-np)" }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={go("contact")}
              className="ml-2 inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-xs font-semibold text-white bg-[linear-gradient(135deg,hsl(var(--np-red)),hsl(var(--np-blue)))] shadow-[0_0_20px_hsl(var(--np-blue)/0.4)] hover:shadow-[0_0_28px_hsl(var(--np-red)/0.5)] hover:scale-[1.03] transition-all"
            >
              <Sparkles size={13} /> Hire Me
            </a>
            <ThemeToggle className="ml-2" />
          </div>

          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="text-foreground p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 nav-pill rounded-2xl overflow-hidden"
          >
            <div className="p-3 space-y-1">
              {navLinks.map((l, i) => {
                const isActive = active === l.id;
                return (
                  <motion.a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={go(l.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? "text-foreground bg-foreground/10"
                        : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={go("contact")}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg text-xs font-semibold text-white bg-[linear-gradient(135deg,hsl(var(--np-red)),hsl(var(--np-blue)))]"
              >
                <Sparkles size={14} /> Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
