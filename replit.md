# Project Overview

This project is being converted from a static Rasasi storefront snapshot into a modern React + Vite single-page brand experience for شذايا (Shadaya), a new perfume brand.

## Current Direction

- Brand: شذايا (Shadaya)
- Type: premium Arabic perfume brand landing/storefront experience
- Goal: clean, animation-rich, luxury presentation that uses the imported Rasasi snapshot only as UX inspiration
- Backend: none currently; pure frontend React app

## Project Structure

- `index.html` - Vite HTML entry point
- `src/main.jsx` - React entry point
- `src/App.jsx` - Main Shadaya app surface
- `src/index.css` - Global styling and design system
- `public/assets/` - Served brand logo assets copied from `attached_assets/`
- `مرحبا بكم في متجر الرصاصي للعطور الرسمي.html` - Original reference snapshot retained for study
- `مرحبا بكم في متجر الرصاصي للعطور الرسمي_files/` - Original reference assets retained for study

## Runtime

- Framework: React + Vite
- Development command: `npm run dev -- --host 0.0.0.0`
- Preview port: 5000

## Notes

- Tracking and analytics from the imported snapshot are not part of the new app.
- Logos are served from `/assets/لوجو_فاضي_1_1776217284462.png` and `/assets/Untitled-11_1776217284464.png`.
