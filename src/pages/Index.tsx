import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react";
import { motion } from "@/components/adaptive-motion";
import portraitSmall from "@/assets/aashish-profile-320.webp.asset.json";
import portraitLarge from "@/assets/aashish-profile-600.webp.asset.json";
import youthCover from "@/assets/article-youth-future.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";
import politicsCover from "@/assets/article-genz-politics.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";
import societyCover from "@/assets/article-vote-rebellion.jpg?w=480;768;1024&format=webp&quality=85&as=srcset";

const email = "pantaashish2076@gmail.com";
const portraitUrl = (path: string) => new URL(path, "https://aashishpant.lovable.app").href;
const navigation = [
  ["About", "about"], ["Experience", "experience"], ["Writing", "articles"],
  ["Work", "projects"], ["Contact", "contact"],
];
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aashishpant" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/officialaashishpant" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/aashish.pant.02/" },
];
const education = [
  { date: "2082–Present", title: "Bachelor in Computer Engineering", school: "Nepal College of Information and Technology" },
  { date: "2079–2082", title: "+2 Science", school: "LRI School · NEB Board · GPA 3.86" },
  { date: "Completed 2079", title: "SEE", school: "Shree Mountain EMB School · NEB Board · GPA 3.70" },
];
const experience = [
  { role: "Legal Tech Fellow", organization: "Ministry of Law, Justice and Parliamentary Affairs, Nepal", detail: "Working with the ministry’s Secretariat and its legal and technology team, with an interest in digital transformation and technology-enabled public services." },
  { role: "Executive / PR Lead", organization: "NTK: Nepal Tek Community, NCIT" },
  { role: "Information Technology Consultant", organization: "Associates Welcome International Pvt. Ltd." },
  { role: "Secretary", organization: "Youth Red Cross Circle, LRI School" },
];
const skills = [
  { category: "Digital & Creative", items: ["Canva Design", "Social Media Advertising", "Image and Video Design", "AI Tools"] },
  { category: "Technology", items: ["Basic Programming", "Technology Research", "Digital Transformation"] },
  { category: "Professional", items: ["Communication", "Teamwork", "Leadership", "Time Management", "Critical Thinking", "Research and Analysis"] },
];
const articles = [
  { title: "प्रदर्शनबाट सत्तासम्म : जेन–जेड पुस्ताले नेपालको राजनीति कसरी पुनःपरिभाषित गर्‍यो?", category: "Politics", time: "8 min read", image: politicsCover, href: "https://nayasandesh.com/archives/77135", description: "How Nepal’s Gen Z moved from street protests to political power and reshaped the country’s political landscape." },
  { title: "१८ वर्षे आँखाबाट मेरो देश, मेरो भविष्य !", category: "Youth", time: "5 min read", image: youthCover, href: "https://nayasandesh.com/archives/70948", description: "An 18-year-old’s perspective on Nepal’s identity, future, and the hopes of a generation entering civic life." },
  { title: "भोटलाई विद्रोह बनाउने जेन्जी पुस्ता : फागुन निर्वाचन निर्णायक", category: "Society", time: "6 min read", image: societyCover, href: "https://simananews.com/archives/9174", description: "A look at Gen Z’s turn toward the ballot box and what the Falgun election could mean for Nepal." },
];
const projects = [
  { name: "Personal Portfolio", status: "Published website", description: "A home for my engineering work, published writing, and interests in technology and society.", href: "https://github.com/pantadsa/aashishpant", label: "View source" },
  { name: "Youth Voices Blog", status: "Writing initiative", description: "Long-form writing on Nepali politics, technology, and social change from a youth perspective.", href: "#articles", label: "Explore published writing" },
  { name: "Engineering Notes", status: "Ongoing coursework", description: "Notes, mini-projects, and experiments from my computer engineering studies, including C, Python, and hardware." },
];
const interests = ["Technology and innovation", "Society and governance", "Youth participation", "Public speaking", "Research and writing", "Digital transformation"];

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
          <span className="ap-kicker">Hello, I’m</span>
          <h1>Aashish Pant</h1>
          <p className="ap-role">Computer Engineering Student · Legal Tech Enthusiast · Social Writer</p>
          <p className="ap-headline">Exploring the intersection of Technology, Society &amp; Governance.</p>
          <p className="ap-lede">I am a Computer Engineering student interested in technology, public policy, governance, and the ideas shaping Nepal’s future. Through writing, research, and digital initiatives, I aim to contribute to meaningful social change.</p>
          <div className="ap-actions"><a className="ap-button" href="#projects">Explore My Work</a><a className="ap-button secondary" href="#contact">Get in Touch</a></div>
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
        <Heading label="About" title="Beyond Technology" />
        <div className="ap-stack ap-lede"><p>I study Computer Engineering at the Nepal College of Information and Technology. I’m interested in how legal technology and digital transformation can improve public services and help institutions respond to the people they serve.</p><p>My published writing and youth leadership work give me ways to explore the same questions outside the classroom, from participation in public life to governance and national development.</p></div>
      </div>
      <dl className="ap-stats">
        <div><dt>1st Year</dt><dd>Computer Engineering</dd></div><div><dt>3.86</dt><dd>+2 GPA</dd></div><div><dt>5+</dt><dd>Published Articles</dd></div><div><dt>Kathmandu</dt><dd>Nepal</dd></div>
      </dl>
    </div></section>

    <section id="experience" className="ap-band ap-surface"><div className="ap-wrap">
      <Heading label="Experience" title="Experience & Leadership" />
      <div className="ap-cards two">{experience.map(({ role, organization, detail }) => <article className="ap-card" key={role}><h3>{role}</h3><p>{organization}</p>{detail && <p className="ap-dim" style={{ marginTop: ".65rem" }}>{detail}</p>}</article>)}</div>
    </div></section>

    <section id="articles" className="ap-band"><div className="ap-wrap">
      <Heading label="Published writing" title="Ideas, Perspectives & Public Discourse." detail="Writing about youth, society, politics, governance, and the future of Nepal." />
      <div className="ap-reading">{articles.map((article, index) => <article className="ap-story" key={article.href}>
        <img src={article.image.split(",").at(-1)?.trim().split(" ")[0]} srcSet={article.image} sizes={index === 0 ? "(min-width: 768px) 55vw, 100vw" : "(min-width: 768px) 50vw, 100vw"} alt="" width={1024} height={576} loading="lazy" decoding="async" />
        <div className="ap-story-copy"><span className="ap-kicker">{index === 0 && "Featured · "}{article.category} · {article.time}</span><h3 lang="ne">{article.title}</h3><p className="ap-dim">{article.description}</p><a className="ap-textlink" href={article.href} aria-label={"Read Article: " + article.title}>Read Article</a></div>
      </article>)}</div>
    </div></section>

    <section id="political-view" className="ap-band ap-dark"><div className="ap-wrap ap-grid">
      <Heading label="Personal perspective" title="How I See the Future of Nepal" />
      <blockquote className="ap-editorial ap-stack ap-lede">
        <p>I want young people in Nepal to have more opportunities to shape public life and build a future at home. Better education, entrepreneurial opportunities, and accountable leadership can help make that possible.</p>
        <p>Technology can make governance more accessible when it is paired with transparency and practical public services. I see digital transformation as one part of sustainable development that respects Nepal’s culture and creates room for the next generation to lead.</p>
        <cite>— Aashish Pant</cite>
      </blockquote>
    </div></section>

    <section id="projects" className="ap-band"><div className="ap-wrap">
      <Heading label="Selected work" title="Projects & Initiatives" />
      <div className="ap-cards">{projects.map(({ name, status, description, href, label }) => <article className="ap-card" key={name}><span className="ap-kicker">{status}</span><h3>{name}</h3><p className="ap-dim">{description}</p>{href && <a className="ap-textlink" href={href}>{label}</a>}</article>)}</div>
    </div></section>

    <section id="education" className="ap-band ap-surface"><div className="ap-wrap ap-grid">
      <Heading label="Academic background" title="Education" />
      <ol className="ap-timeline">{education.map(({ date, title, school }) => <li key={title}><span className="ap-kicker">{date}</span><h3>{title}</h3><p className="ap-dim">{school}</p></li>)}</ol>
    </div></section>

    <section id="skills" className="ap-band"><div className="ap-wrap">
      <Heading label="Capabilities" title="Skills" />
      <div className="ap-cards">{skills.map(({ category, items }) => <article className="ap-card" key={category}><h3>{category}</h3><ul className="ap-skill-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </div></section>

    <section id="vision" className="ap-band ap-surface"><div className="ap-wrap ap-grid">
      <Heading label="Vision & interests" title="Technology is a Tool. Impact is the Purpose." />
      <div className="ap-stack"><ul className="ap-vision-list">{interests.map((item) => <li key={item}>{item}</li>)}</ul><p className="ap-dim">Languages: Nepali (native), English (proficient), Hindi (conversational).</p></div>
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
      <div className="ap-grid"><div className="ap-stack"><a className="ap-brand" href="#hero">Aashish Pant</a><p>Building bridges between technology and society. Amplifying youth voices through ideas and action.</p></div><div><nav aria-label="Footer">{navigation.map(([label, id]) => <a key={id} href={"#" + id}>{label}</a>)}</nav><a href={"mailto:" + email}>{email}</a><SocialLinks /></div></div>
      <small>© 2026 Aashish Pant</small>
    </div></footer>
  </div>;
}
