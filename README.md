# Faizan Tanwar — Portfolio

A React (Vite) portfolio. Fully static — no database, no backend, no API keys.
Just install and run.

## Structure

```
client/
├── public/
│   └── Faizan_Tanwar_Resume.pdf   ← your resume, served at /Faizan_Tanwar_Resume.pdf
├── src/
│   ├── data.js              ← Projects & Skills content — edit this to update either section
│   ├── iconMap.js           ← Tech-stack icons (add an import here if you add a new skill icon)
│   ├── components/          ← One file per section (Hero, Skills, ProjectsTimeline, etc.)
│   └── Home.jsx             ← Assembles all sections in order
```

## Run locally

```bash
cd client
npm install
npm run dev
```
Then open the URL it prints (usually `http://localhost:5173`).

## Editing content

- **Projects & Skills**: edit `client/src/data.js` — plain JavaScript arrays, no restart needed
  (Vite hot-reloads on save).
- **Hero text, About, Education, the quote, Achievements, GitHub username**: edit the
  matching component file directly in `client/src/components/`.
- **Résumé**: replace `client/public/Faizan_Tanwar_Resume.pdf` with a new PDF (keep the same
  filename, or update the `href` in `ResumeClockCard.jsx` if you rename it).

## Deploy to Vercel

1. Push the `client` folder to a GitHub repo (or the whole project — Vercel just needs
   to know `client` is the root).
2. Import the repo at https://vercel.com/new.
3. When it asks for the **Root Directory**, set it to `client`.
4. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`
   (Vercel usually auto-detects both).
5. Deploy — no environment variables needed.

## Notes

- The GitHub activity section pulls live public stats (github-readme-stats,
  github-readme-streak-stats, ghchart.rshah.org) for `faizantanwar16` — no setup required.
- Everything is client-side only; there's nothing to seed, connect, or configure.
