import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-ink-50">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">Success Stories</span><h2 className="section-heading mt-4">What Enterprise Leaders Say About Accredian</h2><p className="section-sub mx-auto">Real outcomes from L&amp;D leaders, CTOs, and HR directors who transformed their workforces with us.</p></div>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => <figure key={t.name} className="card flex flex-col justify-between"><blockquote className="text-sm leading-relaxed text-ink-700">&ldquo;{t.quote}&rdquo;</blockquote><figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-4"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{t.name.split(" ").map(n=>n[0]).join("")}</span><div><p className="text-sm font-bold text-ink-900">{t.name}</p><p className="text-xs text-ink-500">{t.role}</p></div></figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
