import { ArrowUp } from "lucide-react";
import logoA from "@/assets/logo-a.jpg";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border">
    <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
    
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <a href="#" aria-label="Aashish Pant" className="inline-flex items-center">
            <img src={logoA} alt="Aashish Pant logo" className="h-10 w-10 rounded-md object-cover shadow-sm" />
          </a>
          <p className="text-sm text-muted-foreground mt-1">
            Building bridges between technology and society.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          {["About", "Skills", "Writing", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">
              {l}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md hover:-translate-y-1 transition-transform"
          style={{ background: "var(--gradient-accent)" }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="text-primary-foreground" />
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aashish Pant. Crafted with passion & purpose.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
