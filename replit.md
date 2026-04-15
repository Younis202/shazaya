# شذايا (Shadaya) — Luxury Arabic Perfume E-commerce

## Project Overview
Ultra-premium Arabic luxury perfume e-commerce store built with React 19 + Vite. Full RTL Arabic interface with MAISON editorial design system — Preloader curtain, custom cursor, film grain, parallax hero, marquee, AnimatePresence cart drawer, mega menu, scroll-driven sections. Gold/dark palette, Amiri + IBM Plex Sans Arabic fonts.

## Brand Identity
- **Brand**: شذايا (Shadaya) — luxury Arabic perfume
- **Currency**: Saudi Riyal (ر.س)
- **WhatsApp**: +201000000000

## Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind v4 via `@tailwindcss/vite` + `@theme {}` tokens + inline styles for dynamic states
- **Fonts**: Amiri (display/headings) + IBM Plex Sans Arabic (body) via Google Fonts
- **Routing**: react-router-dom v7
- **Animations**: Framer Motion (AnimatePresence, useScroll, useTransform, useInView)
- **Icons**: lucide-react
- **Language**: Arabic (RTL, dir="rtl")
- **Port**: 5000

## Design System (MAISON)
- **Background**: `hsl(36 18% 5%)` — near-black warm dark
- **Gold accent**: `hsl(38 58% 52%)`
- **Foreground**: `hsl(36 20% 90%)`
- **Card**: `hsl(36 14% 8%)`
- **Border**: `hsl(36 10% 16%)`
- **Muted**: `hsl(36 10% 50%)`
- **Display font**: Amiri (serif, weights 400/700 + italic)
- **Body font**: IBM Plex Sans Arabic (sans, weights 100–700)
- **Easing luxury**: `[0.16, 1, 0.3, 1]` — all scroll/reveal animations
- **Easing reveal**: `[0.77, 0, 0.175, 1]` — clipPath/curtain reveals
- **Border-radius**: 0 (sharp corners throughout)
- **Custom cursor**: `cursor: none` on body/buttons (mobile excluded)

## Architecture
```
src/
├── main.jsx
├── App.jsx                  # Preloader gate → CustomCursor + FilmGrain global → AppInner with AnimatePresence routes
├── index.css                # Tailwind v4 @theme tokens + .luxury-divider, .btn-primary, .btn-ghost, .nav-link
├── data/
│   └── products.js          # ALL_PRODUCTS + CATEGORIES
├── pages/
│   ├── HomePage.jsx         # All homepage sections assembled
│   ├── ShopPage.jsx         # Filter sidebar + category pills + animated grid
│   ├── ProductPage.jsx      # Gallery, tabs (desc/ingr/reviews), related
│   ├── AboutPage.jsx        # Timeline milestones + values (sub-components for hooks)
│   ├── ContactPage.jsx      # Split layout + FAQ accordion
│   └── AccountPage.jsx      # Split-screen login/register
└── components/
    ├── Preloader.jsx         # Counting curtain reveal (0→100)
    ├── CustomCursor.jsx      # Magnetic custom cursor (desktop only)
    ├── FilmGrain.jsx         # SVG noise overlay
    ├── AnnouncementBar.jsx   # Dual marquee gold bar
    ├── Navbar.jsx            # Mega menu + clipPath mobile drawer + transparent→solid on scroll
    ├── HeroSlider.jsx        # Parallax hero with SplitText word animations
    ├── FeaturesBar.jsx       # 4-col luxury features strip
    ├── Collections.jsx       # 6-col collections with clipPath hover
    ├── WideBanner.jsx        # Parallax wide banner
    ├── BestOffersSlider.jsx  # Offers product grid (filtered by discount)
    ├── CategorySlider.jsx    # 4-col category cards with parallax image
    ├── NewArrivals.jsx       # New products grid (filtered by isNew)
    ├── ProductCard.jsx       # Card with slide-up hover actions
    ├── BrandStory.jsx        # Sticky parallax image + numbered steps
    ├── Testimonials.jsx      # Statement word-by-word + review cards
    ├── Newsletter.jsx        # Email subscribe with watermark
    ├── Footer.jsx            # Giant watermark + links
    ├── CartDrawer.jsx        # AnimatePresence slide-in drawer
    ├── SearchModal.jsx       # Fullscreen search overlay
    ├── QuickView.jsx         # Product quick-view modal
    ├── WhatsApp.jsx          # Floating WhatsApp button
    └── Toast.jsx             # Add-to-cart notification
```

## Pages
- `/` — Hero → Features → Collections → Banner → Offers → Categories → New Arrivals → Brand Story → Testimonials → Newsletter
- `/shop` — Dark hero + category pills + filter sidebar + animated product grid
- `/product/:id` — Gallery + size/qty selectors + tabs + related products
- `/about` — Cinematic hero + story + milestone timeline + values grid + CTA
- `/contact` — Split layout + contact info + form + FAQ accordion
- `/account` — Split-screen brand panel + login/register form

## Assets (in `/public/assets/`)
- Hero: `hero-1.webp`, `hero-2.webp`
- Collections: `col-1.webp` → `col-6.webp`
- Categories: `cat-men.webp`, `cat-women.webp`, `cat-unisex.webp`, `cat-oud.webp`
- Products: `prod-1.jpg` → `prod-8.jpg`, `prod-new-1.png` → `prod-new-8.png`, `p1.png` → `p4.png`
- Brand story: `brand-story.webp`
- Wide banner: `banner-wide.webp`
- Logo: `logo.png`

## Running
```bash
npm run dev
```
Server runs on port 5000.
