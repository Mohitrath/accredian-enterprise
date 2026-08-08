"use client";

import { useState } from "react";
import { FAQS } from "@/data/site";
import { Icon } from "./Icon";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faqs" className="section bg-white">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center"><span className="eyebrow">FAQs</span><h2 className="section-heading mt-4">Got Questions? We Have Answers.</h2><p className="section-sub mx-auto">Everything you need to know about partnering with Accredian Enterprise.</p></div>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
          {FAQS.map((faq, idx) => { const isOpen = openIndex === idx; return <div key={faq.question}><button type="button" onClick={() => setOpenIndex(isOpen ? null : idx)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"><span className="text-sm font-semibold text-ink-900 sm:text-base">{faq.question}</span><Icon name="chevronDown" className={`h-4 w-4 shrink-0 text-brand-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <div className="px-6 pb-5"><p className="text-sm leading-relaxed text-ink-600">{faq.answer}</p></div>}</div>; })}
        </div>
      </div>
    </section>
  );
}
