# Afterimage Sound

Portfolio site for Devan's composition, piano, and music production work.

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

The site is built with React, TypeScript, and Vite. The configured base path is `/afterimage-sound/` for GitHub Pages.

## Content

- The hero image is `public/assets/images/piano-editorial.jpg`.
- The audio player currently uses browser-generated sound sketches from `src/utils/audioSynthesizer.ts`. Track names and durations are in `src/data/tracks.ts`. These are labeled as sketches on the site and are not presented as Devan's finished recordings.
- The contact form opens a prefilled email draft addressed to `dmhwizardcrazy101@gmail.com`. It does not send a message from the site.

Deployment is configured in `.github/workflows/deploy.yml` for pushes to `main`.
