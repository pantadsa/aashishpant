import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: "Balkumari, Kathmandu", color: "from-blue-500 to-cyan-400" },
  { icon: Phone, label: "+977 9841699162", color: "from-emerald-500 to-teal-400" },
  { icon: Mail, label: "pantaashish2076@gmail.com", color: "from-violet-500 to-purple-400" },
];

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/aashish.pant.02/",
    color: "from-blue-600 to-blue-400",
    glow: "hover:shadow-blue-500/50",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/",
    color: "from-sky-600 to-sky-400",
    glow: "hover:shadow-sky-500/50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/officialaashishpant",
    color: "from-pink-500 via-red-500 to-yellow-500",
    glow: "hover:shadow-pink-500/50",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! Thank you for reaching out.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="h-px flex-1 max-w-[60px] bg-accent" />
              <span className="text-accent text-sm font-medium uppercase tracking-widest">Contact</span>
              <div className="h-px flex-1 max-w-[60px] bg-accent" />
            </div>
            <h2 className="section-title text-center">Let's <span className="gradient-text">Connect</span></h2>
            <p className="section-subtitle text-center">I'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  className="glass-card flex items-center gap-4 hover-lift group"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                    <Icon size={20} className="text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-accent transition-colors text-sm">{label}</span>
                </motion.div>
              ))}

              {/* Social */}
              <div className="pt-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      className="glass-card flex items-center gap-2 px-4 py-2.5 hover-lift group"
                    >
                      <span className="text-lg">{s.emoji}</span>
                      <span className="text-sm font-medium group-hover:text-accent transition-colors">{s.name}</span>
                      <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card space-y-4 relative overflow-hidden"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ background: "var(--gradient-accent)" }} />

              <h3 className="font-display font-bold text-lg pt-2">Send a Message</h3>

              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-secondary/50 border-border/50 focus:border-accent"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-secondary/50 border-border/50 focus:border-accent"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="bg-secondary/50 border-border/50 focus:border-accent resize-none"
              />
              <Button type="submit" className="w-full gap-2 shadow-lg shadow-accent/20">
                <Send size={16} /> Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
