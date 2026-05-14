import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoA from "@/assets/logo-a.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills & Experience", to: "/skills" },
  { label: "Political View", to: "/political-view" },
  { label: "Articles", to: "/articles" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
          <Link to="/" aria-label="Aashish Pant" className="flex items-center gap-2 group">
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
          </Link>

          {/* Desktop */}
          <div
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={() => setHovered(null)}
          >
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onMouseEnter={() => setHovered(l.to)}
                className={({ isActive }) =>
                  `relative text-sm font-medium px-3.5 py-2 rounded-full transition-colors ${
                    isActive ? "text-white" : "text-foreground/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {hovered === l.to && (
                      <motion.span
                        layoutId="nav-hover"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
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
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 h-9 px-4 rounded-full text-xs font-semibold text-white bg-[linear-gradient(135deg,hsl(var(--np-red)),hsl(var(--np-blue)))] shadow-[0_0_20px_hsl(var(--np-blue)/0.4)] hover:shadow-[0_0_28px_hsl(var(--np-red)/0.5)] hover:scale-[1.03] transition-all"
            >
              <Download size={13} /> Resume
            </Link>
          </div>

          <button
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-foreground/80 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 h-10 rounded-lg text-xs font-semibold text-white bg-[linear-gradient(135deg,hsl(var(--np-red)),hsl(var(--np-blue)))]"
              >
                <Download size={14} /> Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
