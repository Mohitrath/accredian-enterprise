import { PROCESS_STEPS } from "@/data/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-heading mt-4">
            From Discovery to Measurable Outcomes
          </h2>
          <p className="section-sub mx-auto">
            A structured, four-step partnership designed to keep your team
            accountable to real business impact.
          </p>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink-100 lg:block"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((item) => (
            <li key={item.step} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-soft">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
