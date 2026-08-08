"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/site";
import { Icon } from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-xl flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-sm font-extrabold text-white">
            A
          </span>
          <span className="text-lg font-extrabold tracking-tight text-ink-900">
            Accredian <span className="text-brand-600">Enterprise</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919818329799"
            className="text-sm font-semibold text-ink-700 hover:text-brand-700"
          >
            +91 98183 29799
          </a>
          <a href="#lead-form" className="btn-outline">
            Talk to an Expert
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-100 text-ink-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-5 pb-6 pt-2 shadow-card lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#lead-form"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Talk to an Expert
          </a>
        </div>
      )}
    </header>
  );
}
