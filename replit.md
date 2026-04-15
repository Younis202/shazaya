# شذايا (Shadaya) — Luxury Arabic Perfume E-commerce

## Project Overview
A complete, ultra-premium Arabic luxury perfume e-commerce store built with React 19 + Vite. Full RTL (right-to-left) Arabic interface, gold/black/white design palette, Swiper sliders, and Framer Motion animations.

## Brand Identity
- **Brand**: شذايا (Shadaya) — luxury perfume brand
- **Currency**: Saudi Riyal (ر.س)
- **Payment Methods**: MADA, Visa, Apple Pay, STC Pay, Tamara, Bank Transfer
- **WhatsApp**: +201000000000 (update with real number)

## Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Custom CSS design system in `src/index.css` (no Tailwind, no external CSS)
- **Fonts**: PingARLT (local, all 9 weights in `/public/fonts/`)
- **Sliders**: Swiper.js with Navigation, Pagination, Autoplay, EffectFade modules
- **Routing**: react-router-dom v7 (BrowserRouter + Routes)
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Language**: Arabic (RTL)
- **Port**: 5000

## Pages
- `/` — HomePage (hero slider, features bar, collections, wide banner, best offers slider, category slider, new arrivals, brand story, **testimonials**, newsletter)
- `/shop` — ShopPage (all products with category filter, price range slider, sort dropdown)
- `/product/:id` — ProductPage (image gallery with thumbs, details, qty selector, tabs: desc/ingredients/reviews, related products)
- `/about` — AboutPage (brand story, values grid, team, CTA)
- `/contact` — ContactPage (contact form with success state, contact info cards, WhatsApp link)
- `/account` — AccountPage (login / register toggle form)

## Architecture
```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root — layout, global state (cart, search, quick-view, toast)
├── index.css                # Complete design system (CSS variables + all component styles)
├── data/
│   └── products.js          # ALL_PRODUCTS array + CATEGORIES list
├── pages/
│   ├── HomePage.jsx
│   ├── ShopPage.jsx
│   ├── ProductPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── AccountPage.jsx
└── components/
    ├── AnnouncementBar.jsx  # Scrolling marquee top bar
    ├── TopBar.jsx           # Contact/info bar (email, phone, language)
    ├── Navbar.jsx           # Sticky nav with dropdown menus, mobile hamburger, cart badge
    ├── HeroSlider.jsx       # Full-width hero slider with Framer Motion text overlay, CTAs, stats bar
    ├── FeaturesBar.jsx      # 4-column features strip (shipping, quality, support, returns)
    ├── Collections.jsx      # 6-column collections grid with hover animations
    ├── WideBanner.jsx       # Wide promotional banner image link
    ├── BestOffersSlider.jsx # Swiper product slider for discounted items
    ├── CategorySlider.jsx   # Horizontal category image carousel
    ├── NewArrivals.jsx      # New products Swiper slider
    ├── ProductCard.jsx      # Reusable card (hover image swap, quick-view, add-to-cart)
    ├── BrandStory.jsx       # Brand about section (dark bg + gold accents)
    ├── Testimonials.jsx     # Customer reviews Swiper carousel (dark bg, glassmorphism cards)
    ├── Newsletter.jsx       # Email signup with success state
    ├── Footer.jsx           # 4-col footer: brand, links, info, contact + payment icons
    ├── CartDrawer.jsx       # Slide-in cart panel with items, remove, total
    ├── SearchModal.jsx      # Fullscreen search overlay
    ├── QuickView.jsx        # Modal quick-view for product details + add-to-cart
    ├── WhatsApp.jsx         # Fixed floating WhatsApp button with ping animation
    └── Toast.jsx            # Add-to-cart notification toast
```

## Key Design Notes
- Navbar is transparent with white text at hero top → becomes white bg + dark text on scroll
- Hero slider uses negative margin-top to overlap navbar for cinematic full-bleed effect
- Hero has Framer Motion animated text overlay (AnimatePresence per slide), gold gradient CTAs, and a stats bar at the bottom
- Testimonials section uses dark bg + glassmorphism cards with SVG star ratings
- Category cards and Collection cards have hover overlay effects
- ProductCard uses SVG Star icons (lucide-react) instead of text characters
- All CSS is in one file (`src/index.css`) — no separate component CSS files
- All fonts served locally from `/public/fonts/` — zero external font dependency

## Color Palette
- `--gold: #ad8538` / `--gold-dark: #875f12` / `--gold-light: #d3ab5e`
- `--dark: #111111` / `--dark-2: #1a1a1a`
- `--white: #ffffff` / `--off-white: #fafaf8`

## Assets
All images in `/public/assets/`:
- Hero: `hero-1.webp`, `hero-2.webp` (+ mobile: `hero-1-mobile.webp`, `hero-2-mobile.webp`)
- Collections: `col-1.webp` → `col-6.webp`
- Categories: `cat-men.webp`, `cat-women.webp`, `cat-unisex.webp`, `cat-oud.webp`
- Products: `prod-1.jpg` → `prod-8.jpg`, `prod-new-1.png` → `prod-new-8.png`, `p1.png` → `p4.png`
- Brand story: `brand-story.webp`, `brand-story-2.webp`, `brand-story-3.webp`
- Wide banner: `banner-wide.webp`
- Logo: `logo.png`
- Payment icons: `pay-visa.png`, `pay-mada.png`, `pay-apple.png`, `pay-stc.png`, `pay-tamara.png`, `pay-bank.png`, `pay-sbc.png`

## Running
```bash
npm run dev
```
Server runs on port 5000.
