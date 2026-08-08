import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise (Clone) | AI & Tech Workforce Upskilling",
  description: "A partial student clone of Accredian Enterprise — AI, Data Science, and Executive Leadership programs co-crafted with top IITs, IIMs, and industry experts. Built with Next.js & Tailwind CSS as a Full Stack Developer Intern assignment.",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><rect width=%2224%22 height=%2224%22 rx=%226%22 fill=%22%232a56f5%22/><text x=%2212%22 y=%2217%22 font-size=%2214%22 font-family=%22system-ui%22 font-weight=%22800%22 fill=%22white%22 text-anchor=%22middle%22>A</text></svg>" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
