import profileMobile from "@/assets/aashish-profile-320.webp.asset.json";
import profileDesktop from "@/assets/aashish-profile-600.webp.asset.json";

const profileMobileUrl = new URL(profileMobile.url, "https://aashishpant.lovable.app").href;
const profileDesktopUrl = new URL(profileDesktop.url, "https://aashishpant.lovable.app").href;

const HeroSection = () => (
  <section id="hero" className="border-b border-border bg-secondary/60">
    <div className="section-container grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] md:gap-16">
      <div>
        <p className="eyebrow text-accent">Computer engineering student</p>
        <h1 className="mt-4 text-5xl leading-none sm:text-6xl lg:text-7xl">Aashish Pant</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I build engineering projects and write about technology, politics, and youth voices in Nepal.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-md border border-border bg-card px-5 py-2 text-sm font-semibold text-card-foreground transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Contact me
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Kathmandu, Nepal · Open to opportunities</p>
      </div>

      <figure className="w-full max-w-[20rem] md:justify-self-end">
        <img
          src={profileDesktopUrl}
          srcSet={`${profileMobileUrl} 320w, ${profileDesktopUrl} 600w`}
          sizes="(min-width: 640px) 320px, calc(100vw - 40px)"
          alt="Portrait of Aashish Pant"
          width={600}
          height={800}
          decoding="async"
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-lg border border-border bg-card object-cover shadow-sm"
        />
      </figure>
    </div>
  </section>
);

export default HeroSection;
