import { STATS } from "@/data/site";
import { Icon } from "./Icon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-size:22px_22px] bg-hero-grid" aria-hidden="true" />
      <div className="container-xl relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow bg-white/10 text-white"><Icon name="badge" className="h-3.5 w-3.5" />Trusted by 500+ Enterprises</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Transform Your Workforce with <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">AI &amp; Tech</span> Upskilling
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            Enterprise-grade AI, Data Science, and Executive Leadership programs co-crafted with top IITs, IIMs, and industry experts — tailored to your team&apos;s stack and business goals.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#lead-form" className="btn-primary">Book a Skill Assessment<Icon name="arrowRight" className="h-4 w-4" /></a>
            <a href="#programs" className="btn-secondary">Explore Programs</a>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => <div key={stat.label} className="text-center"><p className="text-2xl font-extrabold sm:text-3xl">{stat.value}</p><p className="mt-1 text-xs font-medium text-brand-200 sm:text-sm">{stat.label}</p></div>)}
        </div>
      </div>
    </section>
  );
}
