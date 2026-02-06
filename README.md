# 🎵 Anastasiia Ramona - Music Site

<div align="center">

**A beautiful, modern music website showcasing indie dream pop and synth pop**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6-0081CB?style=flat-square&logo=mui)](https://mui.com/)

</div>

---

## ✨ Features

### 🎧 **Audio Player**
- **Full-featured audio player** with play/pause, shuffle, and track navigation
- **Progress bar** with seek functionality
- **Volume control** with mute/unmute options
- **Keyboard shortcuts** (Spacebar, Arrow keys, Escape)
- **Auto-play** support for seamless listening
- **Mobile-optimized** player with expandable controls

### 📱 **Responsive Design**
- **Mobile-first** approach with adaptive layouts
- **Tablet and desktop** optimizations
- **Touch-friendly** controls for mobile devices
- **Smooth animations** powered by Framer Motion

### 🎨 **Visual Experience**
- **Parallax effects** and layered backgrounds
- **Animated text** components
- **Album covers** gallery with hover effects
- **Custom fonts** and modern UI design
- **Smooth transitions** throughout the site

### 📝 **Lyrics Display**
- **Integrated lyrics viewer** for tracks
- **Toggle lyrics** on/off during playback
- **Support for instrumental** and cover tracks

### 🔗 **Social Integration**
- **Streaming platform links** (Spotify, Apple Music, YouTube, Amazon Music)
- **Social media** integration (Instagram, Telegram, SoundCloud, etc.)
- **Email contact** functionality

### 🎯 **Pages & Navigation**
- **Home** - Hero section with latest releases
- **Music** - Complete discography with albums and tracks
- **Covers** - Collection of cover songs
- **About** - Artist biography and information
- **Contact** - Get in touch form

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm (or yarn/pnpm)
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Music-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

### Core
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library

### UI & Styling
- **[Material-UI (MUI)](https://mui.com/)** - Component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **CSS Modules** - Component-scoped styles
- **[Normalize.css](https://necolas.github.io/normalize.css/)** - CSS reset

### Audio & Media
- **HTML5 Audio API** - Audio playback
- **WebP/Opus** - Optimized media formats

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image optimization

---

## 📁 Project Structure

```
Music-site/
├── public/
│   ├── assets/          # Images, icons, album covers
│   ├── audios/          # Audio files (.opus format)
│   ├── lyrics/          # Lyrics text files
│   ├── videos/          # Video assets
│   └── fonts/           # Custom fonts
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── home/        # Home page
│   │   ├── (player)/    # Music and covers pages
│   │   ├── about/       # About page
│   │   └── layout.tsx   # Root layout
│   ├── components/      # React components
│   │   ├── AudioPlayer/ # Audio player component
│   │   ├── NavigationSection/
│   │   ├── SocialLinks/
│   │   └── ...
│   ├── contexts/        # React contexts
│   │   ├── AudioPlayerContext.tsx
│   │   └── LyricsContext.tsx
│   ├── data/            # Data files
│   │   ├── albums.ts    # Album and track data
│   │   ├── aboutData.ts # About page content
│   │   └── socialLinks.ts
│   └── globals.css      # Global styles
├── package.json
├── tsconfig.json
├── next.config.mjs
└── README.md
```

---

## 🎮 Usage

### Audio Player Controls

- **Spacebar** - Play/Pause
- **← Left Arrow** - Seek backward 10 seconds
- **→ Right Arrow** - Seek forward 10 seconds
- **Escape** - Close player

### Adding New Music

1. Add audio files to `public/audios/` (preferably in `.opus` format)
2. Add album cover images to `public/assets/covers/`
3. Update `src/data/albums.ts` with new album/track information
4. Optionally add lyrics to `public/lyrics/`

### Customization

- **Colors & Themes**: Modify `src/app/globals.css` and component CSS modules
- **Content**: Update data files in `src/data/`
- **Layout**: Edit page components in `src/app/`
- **Components**: Customize React components in `src/components/`

---

## 🌐 Deployment

The site is configured for deployment on **Netlify** (see `netlify.toml`).

### Deploy to Netlify

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Netlify will automatically detect Next.js 16 and build the site

### Other Platforms

The site can also be deployed to:
- **Vercel** (recommended for Next.js 16)
- **AWS Amplify**
- **Cloudflare Pages**
- Any platform supporting Node.js

---

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

---

## 🎨 Design Features

- **Parallax scrolling** effects
- **Layered backgrounds** with depth
- **Smooth animations** and transitions
- **Modern typography** with custom fonts
- **Responsive grid** layouts
- **Interactive hover** states
- **Loading states** and spinners

---

## 🔧 Configuration

### Environment Variables

No environment variables are currently required, but you can add them for:
- Analytics tracking
- API keys for external services
- Feature flags

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is private and proprietary.

---

## 👤 Artist

**Anastasiia Ramona**

> *"Indie Dream Crafter"*

An indie rock, dream pop, and synth pop project exploring themes of self-discovery, overwork, burnout, and sudden sparks of inspiration.

---

## 🎨 About This Project

This is a **fully independent and self-created project**. Everything you see and hear has been personally crafted:

- 🎵 **All music** - Composed, performed, recorded, and produced independently
- 🎨 **Website design** - Original design concept, UI/UX, and visual elements created from scratch
- 💻 **Website development** - Built and coded entirely from the ground up
- 🖼️ **Album covers & artwork** - Original visual designs and artwork
- ✍️ **Lyrics** - All lyrics written independently

This project represents a complete creative vision brought to life through music, design, and code.

---

## 🙏 Acknowledgments

- Built with ❤️ using Next.js 16 and React
- Audio format optimization for web performance
- Modern web standards and best practices

**Note:** This entire project — from the music to the design to the code — is a personal, independent creation. Every aspect has been developed, designed, and implemented individually.

---

<div align="center">

**Made with music and code** 🎵✨

</div>
