# شذايا (Shadaya) — Luxury Arabic Perfume E-commerce

## Project Overview
A complete, ultra-premium Arabic luxury perfume brand e-commerce store built with React 19 + Vite. Full RTL (right-to-left) Arabic interface, gold/black/white design palette, Swiper sliders, and Framer Motion animations.

## Brand Identity
- **Type**: Egyptian luxury perfume brand (مصري - not Saudi)
- **Currency**: Egyptian Pound (ج.م)
- **Contact**: info@shadaya.eg / +20 10 0000 0000 / القاهرة، مصر
- **WhatsApp**: +201000000000

## Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Custom CSS design system (no Tailwind)
- **Fonts**: PingARLT (local, all 9 weights in /public/fonts/)
- **Sliders**: Swiper.js with Navigation, Pagination, Autoplay, EffectFade
- **Routing**: react-router-dom (BrowserRouter + Routes)
- **Icons**: lucide-react
- **Language**: Arabic (RTL)
- **Port**: 5000

## Pages
- `/` — HomePage (hero slider, features, collections, offers, new arrivals, brand story, newsletter)
- `/shop` — ShopPage (all products with category filter, price range, sort)
- `/product/:id` — ProductPage (gallery, details, tabs, reviews, related products)
- `/about` — AboutPage (brand story, values, team, CTA)
- `/contact` — ContactPage (contact form, info, WhatsApp link)
- `/account` — AccountPage (login / register toggle)

## Key Design Notes
- Navbar: transparent with white text at top, white background + dark text on scroll
- Hero slider overlaps with transparent navbar (margin-top: -header-h) for cinematic effect
- All fonts served locally from /public/fonts/ — no Google Fonts dependency

## Architecture
```
src/
├── main.jsx                 # Entry point
├── App.jsx                  # Root - assembles all components
├── index.css                # Complete design system (CSS variables, all component styles)
└── components/
    ├── AnnouncementBar.jsx  # Scrolling marquee announcement bar
    ├── TopBar.jsx           # Top contact bar (email, phone, language)
    ├── Navbar.jsx           # Sticky nav with mega-menu, mobile hamburger, cart badge
    ├── HeroSlider.jsx       # Full-width hero image slider with fade effect
    ├── FeaturesBar.jsx      # 4-column features strip (shipping, quality, support, returns)
    ├── Collections.jsx      # 6-column collections grid with hover animations
    ├── WideBanner.jsx       # Wide promotional banner image
    ├── BestOffersSlider.jsx # Product card slider for discounted offers
    ├── CategorySlider.jsx   # Horizontal category carousel
    ├── NewArrivals.jsx      # New products slider
    ├── ProductCard.jsx      # Reusable product card (hover image swap, add-to-cart, wishlist)
    ├── BrandStory.jsx       # Brand about section with dark background + gold accents
    ├── Newsletter.jsx       # Email signup with gold gradient background
    ├── Footer.jsx           # 4-column footer with social, links, contact, payment icons
    ├── CartDrawer.jsx       # Slide-in cart panel from left
    ├── SearchModal.jsx      # Fullscreen search overlay
    ├── WhatsApp.jsx         # Fixed WhatsApp floating button with ping animation
    └── Toast.jsx            # Add-to-cart notification toast
```

## Color Palette
- `--gold: #ad8538` / `--gold-dark: #875f12` / `--gold-light: #d3ab5e`
- `--dark: #111111` / `--dark-2: #1a1a1a`
- `--white: #ffffff` / `--off-white: #fafaf8`

## Assets Location
All images: `/public/assets/`
- Hero: `hero-1.webp`, `hero-2.webp` (+ mobile variants)
- Collections: `col-1.webp` to `col-6.webp`
- Categories: `cat-men.webp`, `cat-women.webp`, `cat-unisex.webp`, `cat-oud.webp`
- Products: `prod-1.jpg` to `prod-8.jpg`, `prod-new-1.png` to `prod-new-8.png`
- Brand: `brand-story.webp`, `brand-story-2.webp`
- Logo: `logo.png`
- Payment icons: `pay-visa.png`, `pay-mada.png`, `pay-apple.png`, `pay-stc.png`, `pay-tamara.png`, `pay-bank.png`

## Features
- Full RTL Arabic UI
- Sticky scrolling navbar with shadow effect on scroll
- Mobile-responsive hamburger menu with slide-out drawer
- Product cards with hover image swap, wishlist + quick-view buttons
- Cart drawer with add/remove items and total
- Search fullscreen modal
- WhatsApp floating button with CSS ping animation
- Toast notifications on add-to-cart
- Intersection Observer for scroll-triggered fade animations
- Swiper sliders: hero (fade + autoplay), products, categories
- Newsletter form with success state

## Running
```bash
npm run dev
```
Server runs on port 5000.
