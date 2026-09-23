# Afterimage Sound

> **Bespoke Film & Game Scoring • Classical Piano Instruction • Music Technology Mentorship**
> 
> *Official portfolio & studio website for Devan.*

Live Website: **[https://jakehair.github.io/afterimage-sound/](https://jakehair.github.io/afterimage-sound/)**

---

## ✨ Features

- **Dual-Focus Platform**:
  - **Film, Video & Game Scoring**: Showcasing bespoke composition services, collaborative spotting pipeline, and quote commission requests.
  - **Classical Piano & Music Tech Education**: Highlighting classical repertoire instruction alongside modern DAW tutoring (Logic Pro, Ableton Live, sound design, commercial mixing).
- **Interactive Audio Showreel**:
  - In-browser synthesized audio engine using the **Web Audio API** (providing instant auditory previews across orchestral, piano, game, and electronic motifs) with animated real-time visualizer bars.
  - Ready for real MP3/WAV file streaming when Devan provides them.
- **Twin Portrait Integration**:
  - Custom photo slots for:
    - **Devan at the Piano** (Classical technique & acoustic artistry)
    - **Devan at the Studio Desk** (Film scoring & music technology)
  - Features dynamic fallbacks to custom vector illustrations if photos are not yet uploaded.
- **Tailored Inquiry Forms**:
  - Direct scoring commission request form with project scope, timeline, and budget selector.
  - Private lesson booking form with skill level, subject focus (Piano, Tech, or Both), and format preference (Online / In-Studio).
- **Modern Responsive Architecture**:
  - Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.
  - Automated continuous deployment via **GitHub Actions** to GitHub Pages.

---

## 📸 Adding Devan's Photos

To swap out the placeholder illustrations with Devan's real photos:

1. Place his piano photo at:
   ```
   public/assets/images/devan-piano.jpg
   ```
2. Place his studio desk photo at:
   ```
   public/assets/images/devan-studio.jpg
   ```
3. Commit and push to `main` — GitHub Actions will automatically rebuild and update the live site!

---

## 🎵 Adding Custom Audio Tracks

Audio tracks are defined in `src/data/tracks.ts`. You can drop `.mp3` or `.wav` files into `public/assets/audio/` and link them in `SHOWREEL_TRACKS`:

```ts
{
  id: 'film-echoes',
  title: 'My Custom Score',
  audioUrl: `${import.meta.env.BASE_URL}assets/audio/my-custom-score.mp3`,
  ...
}
```

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment

The site is configured with two deployment options:

1. **Automated (Recommended)**: Any commit pushed to the `main` branch automatically triggers `.github/workflows/deploy.yml` which builds and deploys directly to GitHub Pages.
2. **Manual CLI**:
   ```bash
   npm run deploy
   ```
