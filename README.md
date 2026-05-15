<p align="center">
  <img src="public/assets/Abel_Biju_George.jpg" width="140" style="border-radius: 50%;" alt="Abel Biju George" />
</p>

<h1 align="center">Abel Biju George — Portfolio</h1>

<p align="center">
  <em>A cinematic, editorial-style portfolio built with Next.js, Framer Motion, and Three.js.</em>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js 16" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12-ff69b4?logo=framer" alt="Framer Motion" /></a>
  <a href="https://threejs.org"><img src="https://img.shields.io/badge/Three.js-r184-orange?logo=three.js" alt="Three.js" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" /></a>
</p>

---

## ✨ Overview

A high-end, immersive personal portfolio that tells a professional story through cinematic design, layered environmental depth, and intentional motion. Built as a single-page experience with editorial restraint — every animation and transition serves the narrative.

### Design Philosophy

- **Dual-Dark Atmosphere** — Cool Cinematic (indigo/purple) ↔ Warm Editorial (amber/gold) theme toggle
- **Environmental Depth** — Multi-layer gradient mesh orbs, canvas micro-particles, grain textures, and edge vignettes
- **Editorial Restraint** — Low-speed, weighted motion with ultra-subtle parallax (2–5% speed variance)
- **Kinetic Typography** — Letter-by-letter stagger reveals on the hero heading
- **Glassmorphic Transitions** — Frosted-glass section dividers with gradient fade

---

## 🖥️ Sections

| Section | Description |
|---------|-------------|
| **Loading** | 3D identity cube (Three.js) with morphing transition to profile circle |
| **Hero** | Split-layout with profile, kinetic name reveal, magnetic cursor, and parallax atmosphere |
| **Journey** | Cinematic timeline with expandable milestone cards, bento gallery modals, and location previews |
| **Projects** | Auto-scrolling horizontal showcase with floating detail windows and dynamic image galleries |
| **How I Work** | Editorial grid — capabilities, tech ecosystem, highlights, languages, and philosophy |
| **Closing** | Philosophical statement with ambient particle canvas and contact links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI Library | [React 19](https://react.dev) |
| Animation | [Framer Motion 12](https://www.framer.com/motion/) |
| 3D | [Three.js](https://threejs.org) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| Styling | Vanilla CSS with CSS custom properties (design token system) |
| Icons | [Lucide React](https://lucide.dev) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design token system (cool/warm themes)
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page (section composition)
│   └── api/
│       ├── journey/[id]/    # Dynamic journey gallery API
│       └── projects/[id]/   # Dynamic project gallery API
├── components/
│   ├── AmbientBackground/   # Multi-layer atmospheric background
│   ├── ClosingSection/      # Final section with particle canvas
│   ├── Cursor/              # Custom magnetic cursor
│   ├── HeroSection/         # Hero with profile, kinetic text, parallax
│   ├── HowIWorkSection/     # Capabilities, tech stack, philosophy
│   ├── ImageLightbox/       # Full-screen image viewer
│   ├── JourneySection/      # Timeline, milestone cards, detail modals
│   ├── LoadingPage/         # 3D cube loading animation
│   ├── Navbar/              # Auto-hiding floating navbar
│   ├── ProjectsSection/     # Horizontal scroll, detail windows
│   ├── ResumeViewer/        # PDF resume modal
│   ├── ScrollNavigator/     # Floating section dot navigator
│   └── UI/                  # Reusable utilities
│       ├── ThemeToggle.tsx   # Cool ↔ Warm theme switch
│       ├── ScrollReveal.tsx  # IntersectionObserver scroll animations
│       ├── ParallaxLayer.tsx # Framer Motion parallax wrapper
│       └── SectionDivider.tsx # Glassmorphic section transitions
public/
└── assets/
    ├── journey/             # Milestone gallery images (19 folders)
    ├── projects/            # Project gallery images (7 folders)
    ├── Abel_Biju_George.jpg # Profile photo
    └── Abel Biju George.pdf # Resume PDF
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/abel-721-bela/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Theme System

The portfolio uses a **dual-dark mode** design token system defined in `globals.css`:

| Mode | Aesthetic | Colors |
|------|-----------|--------|
| **Cool** (default) | Cinematic, crisp | Indigo/purple ambient, pure white text |
| **Warm** | Editorial, candlelit | Amber/gold ambient, warm ivory text |

Toggle between modes using the ❄️/🔥 switch in the navbar.

---

## 📸 Image Galleries

Gallery images are served dynamically via API routes:

- Place images in `public/assets/journey/<folder-name>/` for journey milestones
- Place images in `public/assets/projects/<folder-name>/` for project galleries
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

The API automatically discovers and serves all images from the corresponding directories.

---

## 📄 License

This project is for personal portfolio use. Feel free to use the architecture and patterns as inspiration for your own work.

---

<p align="center">
  <strong>Designed & built by Abel Biju George</strong><br />
  <a href="mailto:abelbijugeorge@gmail.com">Email</a> · 
  <a href="https://www.linkedin.com/in/abelbijugeorge">LinkedIn</a> · 
  <a href="https://www.instagram.com/abel_george.o7/">Instagram</a>
</p>
