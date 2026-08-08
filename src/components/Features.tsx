import { FEATURES } from "@/data/site";
import { Icon, type IconName } from "./Icon";

export default function Features() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Accredian Enterprise</span>
          <h2 className="section-heading mt-4">What Sets Us Apart from the Rest</h2>
          <p className="section-sub mx-auto">Our commitment to excellence — from curriculum design to real-time outcome tracking.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card group transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={feature.icon as IconName} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
