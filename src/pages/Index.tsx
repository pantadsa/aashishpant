import { useState, type FormEvent } from "react";
import { AudioLines, BookOpen, CircuitBoard, Facebook, Globe2, Instagram, Linkedin, Menu, Newspaper, PanelsTopLeft, Scale, Users, X } from "lucide-react";
import { motion } from "@/components/adaptive-motion";
import portraitSmall from "@/assets/aashish-profile-320.webp.asset.json";
import portraitLarge from "@/assets/aashish-profile-600.webp.asset.json";
import youthCover from "@/assets/article-youth-future.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";
import politicsCover from "@/assets/article-genz-politics.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";
import societyCover from "@/assets/article-vote-rebellion.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";

import upcomingCover from "@/assets/article-coming-soon.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";

const email = "pantaashish2076@gmail.com";
const portraitUrl = (path: string) => new URL(path, "https://aashishpant.lovable.app").href;
const navigation = [
  ["About", "about"], ["Experience", "experience"], ["Writing", "articles"],
  ["Work", "projects"], ["Contact", "contact"],
];
const footerNavigation = [["Home", "hero"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Articles", "articles"], ["Contact", "contact"]];
const tagline = "Building bridges between technology and society. Amplifying youth voices through ideas, innovation, and writing.";
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aashishpant" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/officialaashishpant" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/aashish.pant.02/" },
];
const education = [
  { date: "2082 – Present", title: "Bachelor in Computer Engineering", school: "Nepal College of Information and Technology (NCIT)", note: "Currently Pursuing" },
  { date: "2079 – 2082", title: "+2 Science", school: "LRI School – NEB Board", note: "GPA: 3.86" },
  { date: "Completed 2079", title: "SEE – School Level", school: "Shree Mountain EMB School – NEB Board", note: "GPA: 3.70" },
];
const experience = [
  { mark: "MoL", role: "Legal Tech Fellow", organization: "Ministry of Law, Justice and Parliamentary Affairs, Nepal", detail: "Secretariat of the Ministry of Law. Focus on legal technology, digital transformation, technology-driven public services, and access to legal information." },
  { mark: "AW", role: "Information Technology Consultant", organization: "Associates Welcome International Pvt. Ltd.", detail: "IT strategy, digital systems, technology planning, and digital transformation." },
  { mark: "NTK", role: "Executive – Public Relations", organization: "Nepal Tek Community (NTK)", detail: "Public relations, communication, community engagement, event coordination, and member engagement." },
  { mark: "YRC", role: "Secretary", organization: "Youth Red Cross Circle, LRI School" },
  { mark: "IC", role: "Member", organization: "Interact Club, LRI School" },
  { mark: "JP", role: "Exchange Program for Asian Students", organization: "Okinawa Prefectural Board of Education, Japan", date: "2024" },
];
const skills = [
  { category: "Creative & Digital", icon: PanelsTopLeft, items: [["Canva Designing", 90], ["Social Media Advertising", 85], ["Image & Video Design", 78], ["AI Tools", 75]] },
  { category: "Technical", icon: CircuitBoard, items: [["Basic Programming", 65], ["Technology & Digital Transformation"], ["Research & Trend Analysis", 80]] },
  { category: "Professional", icon: Users, items: [["Time Management", 85], ["Problem-Solving", 80], ["Critical Thinking", 85], ["Teamwork & Collaboration", 90]] },
];
const articles = [
  { title: "प्रदर्शनबाट सत्तासम्म : जेन–जी पुस्ताले नेपालको राजनीति कसरी पुनःपरिभाषित गर्‍यो?", category: "Politics", time: "8 min", image: politicsCover, href: "https://nayasandesh.com/archives/77135", description: "How Nepal's Gen-Z generation moved from street protests to political power, redefining the country's political landscape." },
  { title: "१८ वर्षे आँखाबाट मेरो देश, मेरो भविष्य !", category: "Youth", time: "5 min", image: youthCover, href: "https://nayasandesh.com/archives/70948", description: "An 18-year-old's perspective on Nepal's future, identity, and the dreams of a new generation stepping into civic life." },
  { title: "भोटलाई विद्रोह बनाउने जेन्जी पुस्ता : फागुन निर्वाचन निर्णायक", category: "Society", time: "6 min", image: societyCover, href: "https://simananews.com/archives/9174", description: "The Gen-Z generation turning votes into rebellion and why the upcoming Falgun election will be decisive for Nepal." },
  { title: "Coming Soon", category: "Upcoming", image: upcomingCover, description: "New insights on politics, youth, and digital society." },
];
const projects = [
  { name: "Personal Portfolio", status: "Live portfolio", description: "A modern animated portfolio built using React, Tailwind CSS, and Framer Motion.", tags: ["React", "Tailwind CSS", "Framer Motion"], icon: PanelsTopLeft, href: "https://github.com/pantadsa/aashishpant", label: "View source" },
  { name: "Youth Voices Blog", status: "Writing initiative", description: "A long-form writing initiative highlighting youth perspectives on Nepali politics, technology, and social change.", tags: ["Writing", "Editorial", "Civic Tech"], icon: Newspaper, href: "#articles", label: "Explore published writing" },
  { name: "Engineering Notes", status: "Ongoing work", description: "An evolving collection of computer engineering notes, coursework, mini-projects, and experiments.", tags: ["C", "Python", "Hardware"], icon: CircuitBoard },
];
const interests = [
  { label: "Political Awareness and Governance", icon: Scale }, { label: "Writing and Youth Voices", icon: BookOpen },
  { label: "Public Speaking and Communication", icon: AudioLines }, { label: "Current Affairs and Social Analysis", icon: Newspaper },
  { label: "Technology and Innovation", icon: CircuitBoard }, { label: "Digital Transformation", icon: Globe2 },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@500;600&family=Playfair+Display:wght@500;600&family=Space+Grotesk:wght@500;600;700&display=swap');
:has(> main > .ap-portfolio) > header, :has(> main > .ap-portfolio) > footer { display: none; }
.ap-portfolio { --navy:#101828; --blue:#2563eb; --paper:#f8f9fc; --ink:#202938; --gold:#c5a46d; --muted:#526074; --line:#d9e0ea; background:var(--paper); color:var(--ink); font-family:Inter,system-ui,sans-serif; line-height:1.65; }
.ap-portfolio h1,.ap-portfolio h2,.ap-portfolio h3 { font-family:'Space Grotesk',system-ui,sans-serif; font-weight:600; line-height:1.1; letter-spacing:-.04em; }
.ap-portfolio h2 { font-size:clamp(2.45rem,5vw,4.4rem); margin:.55rem 0 1.1rem; }
.ap-portfolio h3 { font-size:1.45rem; }
.ap-portfolio p { margin:0; }
.ap-portfolio a,.ap-portfolio button { transition:color .18s,background .18s,border-color .18s; }
.ap-portfolio :focus-visible { outline:3px solid #79a6ff; outline-offset:4px; }
.ap-wrap { width:min(74rem,calc(100% - 3rem)); margin-inline:auto; }
.ap-band { padding-block:clamp(4rem,8vw,8rem); }
.ap-dark { background:var(--navy); color:var(--paper); }
.ap-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:clamp(1.7rem,5.5vw,6rem); align-items:start; }
.ap-kicker { display:inline-block; font-size:.875rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#204db0; }
.ap-dark .ap-kicker { color:var(--gold); }
.ap-lede { max-width:43rem; font-size:clamp(1.04rem,1.6vw,1.25rem); color:var(--muted); }
.ap-dark .ap-lede,.ap-dark .ap-dim { color:#c7d0df; }
.ap-stack > * + * { margin-top:1.15rem; }
.ap-nav { background:var(--navy); color:var(--paper); border-bottom:1px solid #364153; position:sticky; top:0; z-index:40; }
.ap-nav .ap-wrap { display:flex; align-items:center; min-height:4.5rem; justify-content:space-between; gap:1.2rem; }
.ap-brand { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:1.2rem; white-space:nowrap; }
.ap-navlinks { display:flex; align-items:center; gap:clamp(.85rem,2.5vw,2.3rem); color:#dbe3f0; font-size:.9rem; }
.ap-navlinks a:hover,.ap-footer a:hover { color:var(--gold); }
.ap-menu { display:none; padding:.55rem; }
.ap-hero { border-bottom:1px solid #364153; }
.ap-hero .ap-grid { grid-template-columns:minmax(0,1.23fr) minmax(0,.77fr); align-items:center; }
.ap-hero h1 { font-size:clamp(3.4rem,8.2vw,8.35rem); margin:.5rem 0 .75rem; letter-spacing:-.075em; }
.ap-role { color:#d7e2f3; font-size:.95rem; font-weight:500; }
.ap-hero .ap-headline { font-family:'Playfair Display',Georgia,serif; font-size:clamp(1.75rem,3.6vw,3.2rem); line-height:1.2; margin:1.75rem 0 1.1rem; max-width:35rem; }
.ap-actions { display:flex; gap:.7rem; flex-wrap:wrap; margin:1.75rem 0 1.15rem; }
.ap-button { display:inline-flex; align-items:center; justify-content:center; background:var(--blue); color:white; min-height:3rem; padding:.6rem 1.05rem; font-size:.92rem; font-weight:700; border:1px solid transparent; border-radius:.2rem; }
.ap-button:hover { background:#1d4ed8; }
.ap-button.secondary { background:transparent; border-color:#6b7890; }
.ap-button.secondary:hover { background:#26344a; }
.ap-portrait { margin:0; position:relative; align-self:center; border:1px solid #526786; padding:clamp(.45rem,1.2vw,.85rem); background:#182a45; box-shadow:0 20px 50px #070e1c66; }
.ap-portrait img { width:100%; aspect-ratio:4/4.8; object-fit:cover; object-position:center 30%; }
.ap-portrait figcaption { display:flex; flex-wrap:wrap; gap:.45rem; padding:.8rem 0 0; }
.ap-portrait figcaption span { border:1px solid #576d8d; padding:.3rem .55rem; color:#eef3fc; background:#101828; font-size:.78rem; }
.ap-stats { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-block:1px solid var(--line); margin-top:clamp(2rem,6vw,4.5rem); }
.ap-stats div { padding:1.3rem .7rem 1.3rem 0; }
.ap-stats dt { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:clamp(1.3rem,3vw,2.3rem); color:var(--navy); }
.ap-stats dd { color:var(--muted); font-size:.9rem; }
.ap-surface { background:#eef2f8; border-block:1px solid var(--line); }
.ap-timeline { border-left:1px solid #a7b8d2; padding-left:1.4rem; }
.ap-timeline li { position:relative; padding:0 0 1.65rem; }
.ap-timeline li:last-child { padding-bottom:0; }
.ap-timeline li::before { content:''; position:absolute; left:-1.71rem; top:.45rem; width:.55rem; height:.55rem; border-radius:50%; background:var(--blue); }
.ap-timeline h3 { margin:.28rem 0; }
.ap-cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; margin-top:2rem; }
.ap-cards.two { grid-template-columns:repeat(2,minmax(0,1fr)); }
.ap-card { background:white; border:1px solid var(--line); padding:clamp(1.25rem,2.6vw,2rem); transition:border-color .18s; }
.ap-card:hover { border-color:#8aa4ce; }
.ap-card h3 { margin:.45rem 0 .65rem; }
.ap-dim { color:var(--muted); }
.ap-skill-list { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.9rem; }
.ap-skill-list li { border:1px solid var(--line); padding:.3rem .55rem; color:var(--muted); font-size:.875rem; }
.ap-reading { margin-top:2.25rem; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.25rem; }
.ap-story { display:flex; flex-direction:column; background:white; border:1px solid var(--line); }
.ap-story:first-child { grid-column:1/-1; display:grid; grid-template-columns:1.12fr 1fr; }
.ap-story img { width:100%; height:100%; min-height:14rem; aspect-ratio:16/9; object-fit:cover; }
.ap-story-copy { padding:clamp(1.25rem,3.2vw,3rem); align-self:center; }
.ap-story h3 { font-family:'Noto Serif Devanagari',Georgia,serif; font-size:clamp(1.25rem,2.5vw,2rem); line-height:1.55; letter-spacing:0; margin:.65rem 0; }
.ap-textlink { display:inline-flex; margin-top:1rem; color:#204db0; font-weight:700; text-decoration:underline; text-underline-offset:.25em; }
.ap-textlink:hover { color:var(--navy); }
.ap-editorial { border-left:2px solid var(--gold); padding-left:clamp(1rem,3vw,2rem); }
.ap-editorial cite { display:block; color:var(--gold); font-style:normal; margin-top:1.4rem; }
.ap-vision-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0 1.4rem; }
.ap-vision-list li { border-top:1px solid var(--line); padding:.9rem 0; }
.ap-contact-list { display:grid; gap:.5rem; margin-top:1.35rem; font-style:normal; overflow-wrap:anywhere; }
.ap-contact-list a:hover { text-decoration:underline; }
.ap-social { display:flex; gap:.65rem; margin-top:1.4rem; }
.ap-social a { display:grid; place-items:center; min-width:2.75rem; min-height:2.75rem; border:1px solid #69798e; }
.ap-social a:hover { color:var(--gold); border-color:var(--gold); }
.ap-form { padding:clamp(1.2rem,3vw,2rem); background:#182439; border:1px solid #42516a; display:grid; gap:.85rem; }
.ap-form label { display:grid; gap:.25rem; font-size:.9rem; font-weight:600; }
.ap-form input,.ap-form textarea { width:100%; color:var(--navy); background:var(--paper); border-radius:.15rem; padding:.65rem .75rem; font:inherit; }
.ap-form button { justify-self:start; }
.ap-footer { background:#0b111e; color:#dbe3f0; padding:2.7rem 0 1.35rem; }
.ap-footer small { display:block; border-top:1px solid #3c475a; padding-top:1.2rem; margin-top:1.8rem; }
.ap-footer nav { display:flex; flex-wrap:wrap; gap:.55rem 1.2rem; margin-bottom:.65rem; }
@media (max-width:767px) {
  .ap-wrap { width:calc(100% - 2rem); }
  .ap-grid,.ap-hero .ap-grid,.ap-cards,.ap-cards.two,.ap-reading,.ap-story:first-child { grid-template-columns:1fr; }
  .ap-stats { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .ap-portrait { width:min(100%,26rem); }
  .ap-menu { display:grid; place-items:center; }
  .ap-navlinks { display:none; position:absolute; top:100%; left:0; right:0; background:var(--navy); border-bottom:1px solid #526786; padding:.65rem 1rem; }
  .ap-navlinks[data-open=true] { display:grid; gap:0; }
  .ap-navlinks a { padding:.6rem 0; }
}

.ap-portfolio { --navy:#0b1426; --blue:#245de7; --paper:#f7f9fd; --ink:#182339; --gold:#a9c9ff; --line:#d8e1ee; }
.ap-nav { background:#0b1426; }
.ap-nav .ap-wrap { min-height:4.75rem; }
.ap-navlinks a:last-child { border:1px solid #6c8bc5; padding:.45rem .85rem; }
.ap-hero { position:relative; isolation:isolate; overflow:hidden; background:radial-gradient(ellipse at 83% 45%,#1a3a73 0%,#101f3a 30%,#0b1426 68%); }
.ap-hero::before { content:''; position:absolute; z-index:-1; inset:0; opacity:.24; background-image:linear-gradient(#abc5fb24 1px,transparent 1px),linear-gradient(90deg,#abc5fb24 1px,transparent 1px); background-size:3rem 3rem; mask-image:linear-gradient(90deg,transparent,#000); }
.ap-hero .ap-grid { grid-template-columns:minmax(0,1.23fr) minmax(0,.77fr); }
.ap-hero h1 { font-size:clamp(4rem,8.5vw,8rem); max-width:6ch; line-height:.85; margin:1rem 0 1.15rem; }
.ap-hero .ap-headline { font-size:clamp(1.85rem,3.45vw,3.4rem); color:#e2edff; }
.ap-hero .ap-lede { max-width:39rem; }
.ap-portrait { width:90%; justify-self:center; padding:0; border:0; background:transparent; box-shadow:none; }
.ap-portrait::before { content:''; position:absolute; inset:-1.1rem -1.4rem 2.8rem 1.1rem; border:1px solid #8cb4fa; border-radius:50% 50% 12% 12%; z-index:-1; transition:transform .35s ease; }
.ap-portrait:hover::before { transform:translate(.35rem,-.35rem); }
.ap-portrait img { border:1px solid #819bc4; border-radius:50% 50% 12% 12%; box-shadow:0 22px 55px #030b1a88; }
.ap-portrait figcaption { margin-top:.3rem; }
.ap-portrait figcaption span { background:#152b50; }
.ap-stats { gap:0; background:#fff; border:1px solid var(--line); }
.ap-stats div { padding:1.35rem clamp(.75rem,2.5vw,2rem); border-right:1px solid var(--line); }
.ap-stats div:last-child { border-right:none; }
.ap-experience { margin-top:2.2rem; border-top:1px solid #b1c3df; }
.ap-experience article { display:grid; grid-template-columns:3.6rem minmax(0,1fr) auto; column-gap:1.4rem; align-items:start; padding:1.55rem 0; border-bottom:1px solid #c9d5e6; }
.ap-experience h3 { margin:.05rem 0 .35rem; }
.ap-experience .ap-dim { margin-top:.4rem; max-width:51rem; }
.ap-org,.ap-skill-icon { color:#2456be; background:#dee9fd; }
.ap-org { width:3.6rem; height:3.6rem; display:grid; place-items:center; font-weight:700; border:1px solid #c2d4f4; }
.ap-reading { grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.15rem; }
.ap-story:first-child { grid-template-columns:1.12fr 1fr; border-color:#b6c9e8; }
.ap-story:not(:first-child) img { min-height:0; height:auto; }
.ap-story:not(:first-child) .ap-story-copy { padding:1.3rem; align-self:stretch; }
.ap-story:not(:first-child) h3 { font-size:clamp(1.13rem,2vw,1.4rem); }
.ap-story [lang=en] { font-family:'Playfair Display',Georgia,serif; }
.ap-story:hover { border-color:#7999cd; }
.ap-gallery { display:grid; grid-template-columns:1fr 1fr; gap:1.1rem; margin-top:2rem; }
.ap-gallery .ap-card { padding:0; overflow:hidden; }
.ap-gallery .ap-card:first-child { grid-column:1/-1; display:grid; grid-template-columns:1.15fr 1fr; }
.ap-project-copy { padding:clamp(1.15rem,3vw,2.4rem); }
.ap-project-art { display:grid; justify-items:start; align-content:end; gap:.65rem; padding:1.65rem; min-height:14rem; color:#eef5ff; background:radial-gradient(ellipse at 84% 6%,#2d5aab,#111f3a 73%); position:relative; isolation:isolate; }
.ap-project-art::before { content:''; position:absolute; inset:1rem; border:1px solid #83a5e177; z-index:-1; transition:transform .3s ease; }
.ap-gallery article:hover .ap-project-art::before { transform:scale(.97); }
.ap-project-art span { font-family:'Space Grotesk',sans-serif; font-size:clamp(1.25rem,3.1vw,2.6rem); font-weight:700; }
.ap-gallery article:nth-child(2) .ap-project-art { background:radial-gradient(ellipse at 84% 6%,#4570ac,#182843 73%); }
.ap-gallery article:nth-child(3) .ap-project-art { background:radial-gradient(ellipse at 84% 6%,#36519c,#181e37 73%); }
.ap-academic-note { color:#204db0; font-weight:650; margin-top:.25rem!important; }
.ap-skill-cards .ap-card { border-top:3px solid #3975f1; }
.ap-skill-icon { box-sizing:content-box; padding:.65rem; margin-bottom:.35rem; }
.ap-skill-cards ul { margin-top:1rem; }
.ap-skill-cards li,.ap-languages div { display:flex; align-items:center; justify-content:space-between; gap:.65rem; border-top:1px solid var(--line); padding:.6rem 0; }
.ap-skill-cards strong { color:#194cb3; background:#e8effd; padding:.14rem .4rem; font-size:.86rem; }
.ap-objective { background:#142442; }
.ap-objective blockquote { font-family:'Playfair Display',Georgia,serif; font-size:clamp(1.25rem,2.1vw,1.7rem); }
.ap-vision-list li { display:flex; gap:.7rem; align-items:center; }
.ap-vision-list svg { color:#2456be; flex-shrink:0; }
.ap-contact-list > * { overflow-wrap:anywhere; }
#contact .ap-contact-list > * { border:1px solid #465a7d; background:#15243e; padding:.65rem .85rem; }
.ap-footer small span { display:block; color:#bdcbe0; }
@media (max-width:767px) {
  .ap-navlinks a:last-child { border:0; padding:.6rem 0; }
  .ap-hero .ap-grid,.ap-gallery,.ap-gallery .ap-card:first-child,.ap-reading,.ap-story:first-child { grid-template-columns:1fr; }
  .ap-hero h1 { font-size:clamp(3.7rem,13vw,6rem); }
  .ap-portrait { width:min(87%,25rem); }
  .ap-stats div:nth-child(2) { border-right:0; }
  .ap-stats div:nth-child(-n+2) { border-bottom:1px solid var(--line); }
  .ap-experience article { grid-template-columns:2.7rem minmax(0,1fr); gap:.6rem .8rem; }
  .ap-experience article > .ap-kicker { grid-column:2; }
  .ap-org { width:2.7rem; height:2.7rem; font-size:.75rem; }
  .ap-vision-list { grid-template-columns:1fr; }
}
`;

function Heading({ label, title, detail }: { label: string; title: string; detail?: string }) {
  return <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
    <span className="ap-kicker">{label}</span><h2>{title}</h2>{detail && <p className="ap-lede">{detail}</p>}
  </motion.div>;
}
function SocialLinks() {
  return <div className="ap-social">{socialLinks.map(({ name, href, icon: Icon }) => (
    <a key={name} href={href} aria-label={name}><Icon size={18} aria-hidden="true" /></a>
  ))}</div>;
}
function openEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Portfolio inquiry from " + form.get("name"));
  const body = encodeURIComponent(String(form.get("message")) + "\n\nReply to: " + form.get("email"));
  window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + body;
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="ap-portfolio">
    <style>{styles}</style>
    <header className="ap-nav">
      <div className="ap-wrap">
        <a className="ap-brand" href="#hero" onClick={() => setMenuOpen(false)}>Aashish Pant</a>
        <button className="ap-menu" type="button" aria-expanded={menuOpen} aria-controls="portfolio-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        <nav id="portfolio-nav" aria-label="Primary" className="ap-navlinks" data-open={menuOpen}>{navigation.map(([label, id]) => <a key={id} href={"#" + id} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      </div>
    </header>

    <section id="hero" className="ap-hero ap-dark ap-band">
      <div className="ap-wrap ap-grid">
        <div>
          <span className="ap-kicker">Computer Engineering Student &amp; Legal Tech Fellow</span>
          <h1>AASHISH PANT</h1>
          <p className="ap-role">Social Writer · Technology &amp; Governance Enthusiast</p>
          <p className="ap-headline">Where Technology Meets Society.</p>
          <p className="ap-lede">I explore the intersection of technology, governance, and social change. Through engineering, legal technology, and writing, I aim to contribute to a more informed, innovative, and progressive Nepal.</p>
          <div className="ap-actions"><a className="ap-button" href="#projects">Explore My Work</a><a className="ap-button secondary" href="#contact">Let’s Connect</a></div>
          <p className="ap-dim">Kathmandu, Nepal · Open to Opportunities</p>
        </div>
        <figure className="ap-portrait">
          <img src={portraitUrl(portraitLarge.url)} srcSet={portraitUrl(portraitSmall.url) + " 320w, " + portraitUrl(portraitLarge.url) + " 600w"} sizes="(max-width: 767px) min(100vw, 416px), 40vw" alt="Portrait of Aashish Pant" width={600} height={800} fetchPriority="high" />
          <figcaption><span>Technology &amp; Innovation</span><span>Youth Perspectives</span><span>Society &amp; Governance</span></figcaption>
        </figure>
      </div>
    </section>

    <section id="about" className="ap-band"><div className="ap-wrap">
      <div className="ap-grid">
        <Heading label="About" title="Beyond Technology, Understanding Society." />
        <div className="ap-stack ap-lede">
          <p>Aashish Pant is a Computer Engineering student at Nepal College of Information Technology (NCIT), based in Kathmandu, Nepal. Alongside his academic journey, he is interested in technology, governance, politics, and social development.</p>
          <p>He is involved in legal technology and digital transformation initiatives through his work with the Secretariat of the Ministry of Law, Justice and Parliamentary Affairs. He also contributes to youth engagement, community initiatives, and social writing.</p>
          <p>As a social writer and political observer, he believes that young voices deserve a meaningful place in shaping Nepal's future. His interests lie in connecting technological innovation with public service, responsible governance, and positive social change.</p>
          <ul className="ap-skill-list">{["Technology", "Governance", "Legal Tech", "Youth Voices", "Social Impact"].map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </div>
      </div>
      <dl className="ap-stats">
        <div><dt>1st Year</dt><dd>Computer Engineering</dd></div><div><dt>3.86</dt><dd>GPA in +2 Science</dd></div><div><dt>5+</dt><dd>Published Articles</dd></div><div><dt>Kathmandu</dt><dd>Nepal</dd></div>
      </dl>
    </div></section>

    <section id="experience" className="ap-band ap-surface"><div className="ap-wrap">
      <Heading label="Experience" title="Experience & Leadership" />
      <div className="ap-experience">{experience.map(({ mark, role, organization, detail, date }) => (
        <article key={role}><span className="ap-org" aria-hidden="true">{mark}</span><div><h3>{role}</h3><p>{organization}</p>{detail && <p className="ap-dim">{detail}</p>}</div>{date && <span className="ap-kicker">{date}</span>}</article>
      ))}</div>
    </div></section>

    <section id="articles" className="ap-band"><div className="ap-wrap">
      <Heading label="Published writing" title="Thoughts, Perspectives & Published Work." detail="Writing about youth, society, politics, governance, and the future of Nepal." />
      <div className="ap-reading">{articles.map((article, index) => <article className="ap-story" key={article.title}>
        <img src={article.image.split(",").at(-1)?.trim().split(" ")[0]} srcSet={article.image} sizes={index === 0 ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} alt="" width={1024} height={576} loading="lazy" decoding="async" />
        <div className="ap-story-copy"><span className="ap-kicker">{index === 0 && "Featured · "}{article.category}{article.time && " · " + article.time}</span><h3 lang={article.href ? "ne" : "en"}>{article.title}</h3><p className="ap-dim">{article.description}</p>{article.href && <a className="ap-textlink" href={article.href} aria-label={"Read Article: " + article.title}>Read Article</a>}</div>
      </article>)}</div>
    </div></section>

    <section id="political-view" className="ap-band ap-dark"><div className="ap-wrap ap-grid">
      <Heading label="Personal perspective" title="A Perspective on Nepal’s Future." detail="Vision • Leadership • Innovation • Development" />
      <blockquote className="ap-editorial ap-stack ap-lede">
        <p>I believe politics should be a platform for development, innovation, and positive change rather than conflict and division. My political perspective focuses on empowering youth, improving education, promoting technology-driven governance, and creating opportunities within Nepal so talented young people do not feel forced to leave the country for success.</p>
        <p>I support transparent leadership, accountability, and policies that prioritize practical development, entrepreneurship, digital transformation, and sustainable growth. I believe Nepal needs modern thinking, skilled leadership, and active participation from educated youth to build a stronger and more self-reliant nation.</p>
        <p>My vision is for a progressive Nepal where technology, education, and unity become the foundation of national growth, helping create a future that is globally competitive while preserving our identity, culture, and values.</p>
        <cite>— Aashish Pant</cite>
      </blockquote>
    </div></section>

    <section id="projects" className="ap-band"><div className="ap-wrap">
      <Heading label="Selected work" title="Projects & Initiatives" />
      <div className="ap-gallery">{projects.map(({ name, status, description, tags, icon: Icon, href, label }) => (
        <article className="ap-card" key={name}><div className="ap-project-art" aria-hidden="true"><Icon size={50} strokeWidth={1.25} /><span>{name}</span></div><div className="ap-project-copy"><span className="ap-kicker">{status}</span><h3>{name}</h3><p className="ap-dim">{description}</p><ul className="ap-skill-list">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>{href && <a className="ap-textlink" href={href}>{label}</a>}</div></article>
      ))}</div>
    </div></section>

    <section id="education" className="ap-band ap-surface"><div className="ap-wrap ap-grid">
      <Heading label="Academic background" title="Education" />
      <ol className="ap-timeline">{education.map(({ date, title, school, note }) => <li key={title}><span className="ap-kicker">{date}</span><h3>{title}</h3><p className="ap-dim">{school}</p><p className="ap-academic-note">{note}</p></li>)}</ol>
    </div></section>

    <section id="skills" className="ap-band"><div className="ap-wrap">
      <Heading label="Capabilities" title="Skills & Expertise" />
      <div className="ap-cards ap-skill-cards">{skills.map(({ category, icon: Icon, items }) => <article className="ap-card" key={category}><Icon className="ap-skill-icon" size={25} aria-hidden="true" /><h3>{category}</h3><ul>{items.map(([item, rating]) => <li key={item}><span>{item}</span>{rating && <strong>{rating}%</strong>}</li>)}</ul></article>)}</div>
    </div></section>

    <section id="vision" className="ap-band ap-objective ap-dark"><div className="ap-wrap ap-grid">
      <Heading label="Vision" title="Career Objective" />
      <blockquote className="ap-editorial ap-lede">“To become an exemplary person who uses knowledge, technology, and creativity to make a positive impact in society. I aim to raise the voices of the voiceless through writing and digital platforms while growing into a skilled and responsible computer engineer. My goal is to combine technical expertise with social awareness to contribute meaningfully to both the digital world and the community.”</blockquote>
    </div></section>

    <section id="interests" className="ap-band ap-surface"><div className="ap-wrap ap-grid">
      <div><Heading label="Communication" title="Languages" /><dl className="ap-languages"><div><dt>English</dt><dd>Proficient</dd></div><div><dt>Nepali</dt><dd>Native</dd></div><div><dt>Hindi</dt><dd>Conversational</dd></div></dl></div>
      <div><Heading label="Beyond work" title="Interests" /><ul className="ap-vision-list">{interests.map(({ label, icon: Icon }) => <li key={label}><Icon size={20} aria-hidden="true" />{label}</li>)}</ul></div>
    </div></section>

    <section id="contact" className="ap-band ap-dark"><div className="ap-wrap ap-grid">
      <div><Heading label="Contact" title="Let’s Start a Conversation." detail="Have an idea, opportunity, or perspective to share? I’d be happy to connect." />
        <address className="ap-contact-list"><a href={"mailto:" + email}>{email}</a><a href="tel:+9779841699162">+977 9841699162</a><span>Balkumari, Kathmandu, Nepal</span></address><SocialLinks />
      </div>
      <form className="ap-form" onSubmit={openEmail}>
        <label>Name<input name="name" autoComplete="name" required maxLength={100} /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required maxLength={255} /></label>
        <label>Message<textarea name="message" rows={5} required maxLength={1000} /></label>
        <p className="ap-dim">Opens your email app with your message ready to send.</p><button className="ap-button" type="submit">Open email draft</button>
      </form>
    </div></section>

    <footer className="ap-footer"><div className="ap-wrap">
      <div className="ap-grid"><div className="ap-stack"><a className="ap-brand" href="#hero">Aashish Pant</a><p>{tagline}</p></div><div><nav aria-label="Footer">{footerNavigation.map(([label, id]) => <a key={id} href={"#" + id}>{label}</a>)}</nav><address className="ap-contact-list"><span>Kathmandu, Nepal</span><a href={"mailto:" + email}>{email}</a><a href="tel:+9779841699162">+977 9841699162</a></address><SocialLinks /></div></div>
      <small>© 2026 Aashish Pant. All rights reserved. <span>Crafted with passion and purpose.</span></small>
    </div></footer>
  </div>;
}
