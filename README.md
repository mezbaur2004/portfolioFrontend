# mezbaur.vercel.app

Source for my portfolio site, live at [mezbaur.vercel.app](https://mezbaur.vercel.app).

A single-page React app built with Vite. All content (profile, experience, projects and
skills) lives in JSON files under `src/lib/`, so updating the site means editing data, not
components. The contact form sends mail through EmailJS; there is no backend.

## Stack

React 18 · React Router · Vite · plain CSS (light and dark themes) · EmailJS · Vercel

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
npm run dev      # development server
npm run build    # production build in dist/
```

`vercel.json` rewrites every path to `index.html` so client-side routes work on refresh.
