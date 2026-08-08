import { PROGRAMS } from "@/data/site";
import { Icon } from "./Icon";

export default function Programs() {
  return (
    <section id="programs" className="section bg-ink-50">
      <div className="container-xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Programs</span>
            <h2 className="section-heading mt-4">Tailored Learning Tracks for Every Team</h2>
            <p className="section-sub">Choose from co-certified executive tracks or fully custom curricula built around your organization&apos;s roadmap.</p>
          </div>
          <a href="#lead-form" className="btn-outline hidden shrink-0 sm:inline-flex">Request Full Catalog<Icon name="arrowRight" className="h-4 w-4" /></a>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROGRAMS.map((program) => <div key={program.title} className="card flex flex-col justify-between transition-shadow duration-300 hover:shadow-soft"><div><span className="text-xs font-bold uppercase tracking-wider text-brand-600">{program.category}</span><h3 className="mt-3 text-xl font-bold text-ink-900">{program.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-600">{program.description}</p></div><div className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-4 text-xs font-semibold text-ink-500"><span>{program.duration}</span><span className="h-1 w-1 rounded-full bg-ink-300" /><span>{program.format}</span></div></div>)}
        </div>
        <a href="#lead-form" className="btn-outline mt-8 flex w-full items-center justify-center sm:hidden">Request Full Catalog<Icon name="arrowRight" className="h-4 w-4" /></a>
      </div>
    </section>
  );
}
