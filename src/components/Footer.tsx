import { ArrowUp, Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import logoA from "@/assets/logo-a.jpg";

const quickLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Articles", id: "articles" },
  { label: "Contact", id: "contact" },
];
const socials = [
  { Icon: Facebook, href: "https://facebook.com/aashish.pant.02/", label: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/aashishpant", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/officialaashishpant", label: "Instagram" },
];

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Glowing top divider */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--np-blue))] to-transparent shadow-[0_0_20px_hsl(var(--np-blue)/0.6)]" />

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-secondary/40" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div>
          <a href="#" aria-label="Aashish Pant" className="inline-flex items-center gap-2 group">
            <span className="relative">
              <span
                aria-hidden
                className="absolute -inset-1 rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-opacity"
                style={{ background: "var(--gradient-np)" }}
              />
              <img
                src={logoA}
                alt="Aashish Pant logo"
                className="relative h-10 w-10 rounded-lg object-cover ring-1 ring-white/20"
              />
            </span>
            <span className="font-display font-bold tracking-wide gradient-text-np">
              Aashish Pant
            </span>
          </a>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
            Building bridges between technology and society. Amplifying youth voices through code and words.
          </p>
        </div>

        {/* Quick links */}
        <div className="md:justify-self-center">
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Navigate
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="group inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-white transition-colors"
                >
                  <span className="h-px w-3 bg-gradient-to-r from-[hsl(var(--np-red))] to-[hsl(var(--np-blue))] transition-all group-hover:w-6" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Socials */}
        <div className="md:justify-self-end">
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Connect
          </h4>
          <div className="space-y-2 text-sm text-foreground/70">
            <p className="flex items-center gap-2"><MapPin size={14} className="text-[hsl(var(--np-blue))]" /> Kathmandu, Nepal</p>
            <p className="flex items-center gap-2"><Mail size={14} className="text-[hsl(var(--np-blue))]" /> pantaashish2076@gmail.com</p>
            <p className="flex items-center gap-2"><Phone size={14} className="text-[hsl(var(--np-blue))]" /> +977 9841699162</p>
          </div>
          <div className="flex items-center gap-3 mt-5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/10 text-foreground/80 hover:text-white transition-all hover:scale-110 hover:border-[hsl(var(--np-blue)/0.6)] hover:shadow-[0_0_20px_hsl(var(--np-blue)/0.4)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground inline-flex items-center gap-2">
          © {new Date().getFullYear()} Aashish Pant
          <span className="h-1 w-1 rounded-full bg-[hsl(var(--np-red))]" />
          Crafted with passion
          <span className="h-1 w-1 rounded-full bg-[hsl(var(--np-blue))]" />
          purpose
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative h-11 w-11 rounded-full grid place-items-center bg-white/5 border border-white/10 hover:scale-110 transition-all"
          aria-label="Back to top"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"
            style={{ background: "var(--gradient-np)" }}
          />
          <ArrowUp size={18} className="relative text-white" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
