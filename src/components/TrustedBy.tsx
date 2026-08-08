import { PARTNER_LOGOS } from "@/data/site";

export default function TrustedBy() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="border-y border-ink-100 bg-ink-50 py-8">
      <div className="container-xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-400">
          Trusted by learning &amp; development teams at
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-50 to-transparent" />
          <div className="flex w-max animate-marquee gap-12">
            {logos.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-xl font-bold tracking-tight text-ink-400/70"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
