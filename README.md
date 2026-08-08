# Accredian Enterprise — Partial Clone

A responsive student implementation of the Accredian Enterprise landing page, built as part of a Full Stack Developer Intern assignment.

## 🔗 Submission Links

- **Live Vercel Demo:** Add the deployed Vercel URL here after deployment.
- **GitHub Repository:** https://github.com/Mohitrath/accredian-enterprise

## 🛠️ Tech Stack

- Next.js 14 — App Router
- TypeScript
- React
- Tailwind CSS
- Next.js Route Handler for the lead form

## ✨ Features

- Responsive enterprise landing page
- Navigation bar and footer
- Hero section
- Programs section
- Trusted-by / company section
- Features section
- How It Works section
- Testimonials
- FAQ section
- Lead/contact form with a Next.js API route
- Mobile-friendly layout

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Mohitrath/accredian-enterprise.git
cd accredian-enterprise
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 🧩 Approach Taken

The page was implemented as a component-based Next.js application. The interface was divided into reusable sections such as the Navbar, Hero, Programs, Features, How It Works, Testimonials, FAQ, Lead Form, and Footer.

Tailwind CSS was used for responsive styling and layout. Static page content was organized in `src/data/site.ts` to keep the UI components maintainable. The lead form uses a Next.js Route Handler under `src/app/api/lead/route.ts`.

The implementation focused on reproducing the overall structure, visual hierarchy, responsive behavior, navigation, forms, and interactive sections of the reference enterprise page while keeping the code organized and easy to extend.

## 🤖 AI Usage Explanation

AI tools were used as a development assistant during the project. They helped with tasks such as:

- Generating and refining component structure
- Suggesting responsive Tailwind CSS patterns
- Debugging and improving TypeScript/Next.js code
- Reviewing implementation details and identifying possible issues
- Assisting with documentation and README preparation

The final project structure, integration, testing, and implementation decisions were reviewed and adapted for the assignment requirements.

## 🔮 Improvements With More Time

With additional development time, I would:

1. Improve pixel-level visual matching against the reference website.
2. Add more polished animations and micro-interactions.
3. Improve accessibility, including keyboard navigation and ARIA attributes.
4. Add stronger form validation and connect the lead form to a persistent backend/database or email service.
5. Add automated tests for important components and form/API behavior.
6. Optimize images and other assets further for performance and Core Web Vitals.
7. Add analytics and error monitoring for the deployed application.
8. Test the page across a wider range of browsers, screen sizes, and mobile devices.

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/lead/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Faq.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Icon.tsx
│   ├── LeadForm.tsx
│   ├── Navbar.tsx
│   ├── Programs.tsx
│   ├── Testimonials.tsx
│   └── TrustedBy.tsx
└── data/
    └── site.ts
```

## 📄 Disclaimer

This is an educational/student project created for an internship assignment. It is not affiliated with or endorsed by Accredian.
