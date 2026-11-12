# mezbaur.vercel.app

Source for my portfolio site, live at [mezbaur.vercel.app](https://mezbaur.vercel.app).

A Next.js (App Router) site whose pages are prerendered as static HTML at build time. All
content (profile, experience, projects and skills) lives in JSON files under `src/lib/`, so
updating the site means editing data, not components. The contact form sends mail through
EmailJS; there is no backend.

## Stack

Next.js 16 · React 19 · plain CSS (light and dark themes) · EmailJS · Vercel

## Editing content

| File | Content |
|---|---|
| `src/lib/profile.json` | name, role, photo, CV link, summary, social links |
| `src/lib/experience.json` | work history |
| `src/lib/projects.json` | projects; the first four appear on the home page |
| `src/lib/skills.json` | skills by group |

## Running locally

```bash
npm install
npm run dev      # development server on http://localhost:3000
npm run build    # production build in .next/
npm start        # serve the production build
```

Routes live in `src/app/` (`/`, `/all-projects`, `/contact`) and render the page components
in `src/views/`. Stylesheets are imported once, in order, by `src/app/layout.jsx`.
