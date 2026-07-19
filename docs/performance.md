# Performance

Target: **PageSpeed Insights 100** on mobile for the home page.

## Practices used here

- Self-hosted fonts (`fonts/*.woff2`) loaded after LCP via `fonts.css`
- Three-phase loading: eager → lazy → delayed (`scripts/scripts.js`)
- Optimized pictures via `createOptimizedPicture` in blocks
- No heavy frameworks; vanilla JS/CSS only
- Scoped block CSS; avoid huge global rules

## Checklist

1. Hero image (if any) is reasonably sized
2. No render-blocking third-party scripts
3. LCP element loads in the first section
4. Test: https://pagespeed.web.dev/ with your preview URL

## Official guide

https://www.aem.live/developer/keeping-it-100
