# Faizan Tanwar — Portfolio

Interactive terminal-themed portfolio built with React + Vite + Tailwind CSS v4 + Framer Motion.

## Setup
```bash
npm install
npm run dev       # local dev server
npm run build     # production build
```

## Structure
- `src/data/content.js` — all your copy: projects, skills, profile. Edit here first.
- `src/components/TerminalHero.jsx` — animated terminal boot-up hero
- `src/components/SessionLog.jsx` — the left-rail scroll tracker (signature element)
- `src/components/About.jsx` — bio + flippable SIH badge
- `src/components/Projects.jsx` — expandable case-study cards
- `src/components/Skills.jsx` — grouped tech stack
- `src/components/Contact.jsx` — CTA + links
- `src/components/EasterEgg.jsx` — type "sudo hire faizan" anywhere on the page

## Deploy
Push to GitHub, then import the repo on vercel.com (auto-detects Vite). Free, ~2 min.

## To customize
1. Edit `src/data/content.js` with your real project links/details
2. Replace GitHub/LinkedIn URLs in the same file
3. Colors/fonts are CSS variables in `src/index.css` under `:root`
