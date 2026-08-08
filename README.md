# Accredian Enterprise — AI & Tech Upskilling Platform

<div align="center">

### Enterprise-grade AI, Data Science & Leadership Upskilling

A modern, responsive **Next.js** implementation of an Accredian Enterprise-style landing page, developed as part of a **Full Stack Developer Intern assignment**.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

**[Live Demo](#-live-demo) · [Features](#-features) · [Getting Started](#-getting-started) · [Project Structure](#-project-structure)**

</div>

---

## 📌 About the Project

This project recreates a polished enterprise upskilling landing page focused on **AI, technology, data science, and leadership programs**.

The design follows a clean enterprise visual language with:

- A professional navigation bar
- Dark blue hero section
- Highlighted AI & Technology messaging
- Enterprise statistics
- Program and feature sections
- Success stories and testimonials
- FAQ section
- Lead capture / contact form
- Responsive layouts for desktop and mobile

The implementation is intentionally component-driven so individual sections can be updated without affecting the rest of the page.

> **Note:** This is a student/educational implementation created for an internship assignment and is not affiliated with or endorsed by Accredian.

---

## 🚀 Live Demo

**Vercel:** https://accredian-enterprise-delta-orcin.vercel.app/

**GitHub:**
https://github.com/Mohitrath/accredian-enterprise

---

## ✨ Features

### 🎨 User Interface

- Responsive enterprise landing page
- Modern dark-blue hero design
- Enterprise-focused typography and visual hierarchy
- Responsive navigation
- Clear call-to-action buttons
- Mobile-friendly layout

### 📚 Landing Page Sections

- **Navbar** — navigation and contact CTA
- **Hero** — primary enterprise upskilling message and statistics
- **Programs** — available learning programs
- **Trusted By** — enterprise credibility section
- **Features** — key platform/program benefits
- **How It Works** — step-by-step process
- **Testimonials** — learner/customer success stories
- **FAQ** — frequently asked questions
- **Lead Form** — contact/lead capture
- **Footer** — navigation and supporting information

### ⚙️ Functionality

- Component-based React architecture
- Next.js App Router
- Lead capture form
- Next.js API Route Handler
- Responsive Tailwind CSS styling
- Reusable data-driven content

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework and application routing |
| **React** | UI component development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Responsive styling and UI design |
| **Next.js Route Handler** | Lead form API endpoint |
| **ESLint** | Code quality and linting |

---

## 📂 Project Structure

```text
accredian-enterprise/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Faq.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Icon.tsx
│   │   ├── LeadForm.tsx
│   │   ├── Navbar.tsx
│   │   ├── Programs.tsx
│   │   ├── Testimonials.tsx
│   │   └── TrustedBy.tsx
│   │
│   └── data/
│       └── site.ts
│
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js 18+**
- **npm**
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Mohitrath/accredian-enterprise.git
```

### 2. Open the project

```bash
cd accredian-enterprise
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser at:

```text
http://localhost:3000
```

### 5. Create a production build

```bash
npm run build
```

### 6. Start the production server

```bash
npm run start
```

---

## 🧩 Implementation Approach

The application was designed using a **component-first architecture**.

Instead of putting the complete landing page into one large component, the interface was divided into independent sections. This makes the application easier to understand, maintain, test, and extend.

### Component Architecture

```text
page.tsx
   │
   ├── Navbar
   ├── Hero
   ├── TrustedBy
   ├── Programs
   ├── Features
   ├── HowItWorks
   ├── Testimonials
   ├── Faq
   ├── LeadForm
   └── Footer
```

Reusable content is maintained separately in:

```text
src/data/site.ts
```

The lead form is connected to:

```text
src/app/api/lead/route.ts
```

Tailwind CSS is used to handle responsive spacing, typography, grids, buttons, cards, and layouts.

---

## 🤖 AI Usage

AI was used as a **development assistant**, not as a replacement for reviewing and understanding the implementation.

AI assistance was mainly used for:

- Planning the component structure
- Generating initial React/TypeScript component code
- Suggesting Tailwind CSS layouts and responsive patterns
- Debugging TypeScript and Next.js issues
- Improving component organization
- Reviewing implementation details
- Preparing project documentation

The generated code was **reviewed, modified, integrated, and tested manually** to fit the project requirements and existing application structure.

### Manual Work Beyond AI Output

The implementation was manually refined for:

- Layout and spacing
- Typography hierarchy
- Responsive behavior
- Navigation structure
- Hero section presentation
- CTA buttons
- Form integration
- Component integration
- Content organization
- Project-specific styling and adjustments

Incorrect or incompatible AI-generated suggestions were tested against the application and corrected rather than being used blindly.

---

## 🧪 Testing & Validation

Before submission, the application was checked for:

- Successful development-server startup
- Successful production build
- Component integration
- Responsive layout behavior
- Navigation and CTA interactions
- Lead form behavior
- API route integration
- GitHub repository structure

---

## 🔮 Future Improvements

If more development time were available, I would focus on:

1. **Pixel-perfect refinement** — further tune spacing, typography, sizing, and visual details against the reference.
2. **Animations** — add subtle entrance animations, hover states, and smoother section transitions.
3. **Accessibility** — improve keyboard navigation, focus states, semantic HTML, and ARIA support.
4. **Form backend** — connect the lead form to a production database, CRM, or email service.
5. **Validation** — add stronger client-side and server-side form validation.
6. **Testing** — add unit, integration, and end-to-end tests.
7. **Performance** — optimize images, assets, loading behavior, and Core Web Vitals.
8. **SEO** — add richer metadata, structured data, sitemap, robots configuration, and social sharing metadata.
9. **Cross-browser testing** — validate the UI across Chrome, Firefox, Safari, Edge, and different mobile devices.
10. **Deployment monitoring** — add analytics, logging, and error monitoring after deployment.

---

## 📋 Assignment Submission

| Requirement | Status |
|---|---|
| Live Vercel deployment | ✅ https://accredian-enterprise-delta-orcin.vercel.app/ |
| GitHub repository | ✅ Available |
| Setup instructions | ✅ Included |
| Approach explanation | ✅ Included |
| AI usage explanation | ✅ Included |
| Improvements | ✅ Included |
| Lead capture form | ✅ Implemented |
| API integration | ✅ Implemented |
| Responsive UI | ✅ Implemented |

---

## 📄 License / Disclaimer

This project was created for educational and internship-assignment purposes. It is a partial implementation inspired by the provided reference design and is not affiliated with, sponsored by, or endorsed by Accredian.

---

<div align="center">

### Built with Next.js, TypeScript & Tailwind CSS

</div>
