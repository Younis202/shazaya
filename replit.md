# Project Overview

This is a static Arabic storefront snapshot for Rasasi Perfumes imported from GitHub. The site is served from static HTML and asset files in the project root.

## Project Structure

- `index.html` - Main entry point for Replit preview and static hosting
- `مرحبا بكم في متجر الرصاصي للعطور الرسمي.html` - Original imported HTML snapshot
- `مرحبا بكم في متجر الرصاصي للعطور الرسمي_files/` - Imported CSS, JavaScript, images, fonts, and other static assets

## Runtime

- Development server: Python static file server
- Preview port: 5000
- Host binding: `0.0.0.0`

## Deployment

Configured as a static site. The deployment build copies `index.html`, the original HTML snapshot, and the imported assets directory into `dist/`, then publishes `dist/`.

## Import Fixes

- Added `index.html` as the default preview entry point.
- Removed or stubbed broken tracking/analytics scripts from the imported snapshot.
- Rewrote local JavaScript asset references from `.js.download` to `.js` and copied matching files so module scripts are served with the correct JavaScript MIME type.
