# Golden Dragon — Mobile-First Responsive Polish

## Goal

Make the Golden Dragon single-page site feel premium and intentional on mobile (375px–768px) while preserving the existing desktop experience. Every section should feel designed for its viewport, not just "stacked and shrunk."

## Design Direction

**Premium + cinematic moments, not at the cost of usability.** The mobile experience should feel like a luxury restaurant app — spacious, polished, every element earns its space — with cinematic GSAP moments that shine on small screens.

---

## Component-by-Component Plan

### 1. Navbar
**Current**: Hamburger with slide-out menu, focus trap, Escape key
**Mobile changes**:
- Hamburger icon → clean X animation on open
- Menu items get larger touch targets (48px min height)
- Add subtle backdrop blur enhancement
- Smooth height transition for menu open/close
- Logo slightly smaller on mobile (not stacked, stays horizontal)

### 2. Hero
**Current**: text-5xl (3rem), full-screen, canvas particles at density 40
**Mobile changes**:
- Scale headline down: text-3xl on mobile → text-5xl on lg
- Reduce particle count to 15-20 on mobile (check `window.innerWidth` in AmbientParticles.tsx)
- Keep full-screen height but reduce padding
- Subheadline scales: text-sm mobile → text-lg desktop
- CTA button: full-width on mobile, fixed to bottom of hero on mobile for thumb reach
- GSAP word reveal still works — just faster on mobile (shorter duration)

### 3. About
**Current**: Two-column with floating stat card
**Mobile changes**:
- Single column, image above text
- Floating stat card: absolute positioning → inline stat row below the story
- Image gets rounded corners and subtle shadow
- Text: text-base, generous line-height (1.7)
- Section padding: px-5 py-16 mobile

### 4. Menu
**Current**: 6 cards in grid (2 featured, 4 regular)
**Mobile changes**:
- **Option**: Horizontal scroll carousel with snap points (scroll-snap-type: x mandatory)
- Featured dishes: full-width cards with larger image
- Regular dishes: 2-column grid OR horizontal scroll
- Add dish price prominently (large, gold color)
- Touch-friendly: card min-height 200px, image takes 60% of card
- Quick-add indicator (visual hover state → tap state)

### 5. Gallery
**Current**: Asymmetric bento grid (5 images)
**Mobile changes**:
- Single column stack with full-width images
- OR horizontal scroll with snap points and peek preview
- Images: aspect-ratio maintained, rounded-lg
- Tap to expand (lightbox or full-screen overlay)
- Reduce number of images shown initially (load 3, lazy load rest)

### 6. ChefSpotlight
**Current**: Two-column with chef image and philosophy pillars
**Mobile changes**:
- Stack: image on top, bio below
- Philosophy pillars: horizontal scroll cards (3 cards, peek from edges)
- Chef image: circular or rounded, centered
- Text alignment: center on mobile, left on desktop

### 7. AwardsStrip
**Current**: Animated counters + press logo strip
**Mobile changes**:
- Counters stack vertically (2x2 grid on mobile)
- Press logos: horizontal scroll with fade edges
- Numbers: text-2xl on mobile (from text-4xl)
- Add subtle separator between counter items

### 8. Testimonials
**Current**: Blockquote + 2 secondary cards
**Mobile changes**:
- Single column, testimonial cards stack
- Blockquote: larger text, centered
- Quote marks: decorative, semi-transparent
- Card padding: p-5 mobile

### 9. Reservations
**Current**: Contact info + reservation form
**Mobile changes**:
- Form fields stack vertically (already do, verify)
- Input fields: full-width, min-height 48px
- Date/time picker: native HTML5 inputs (mobile-friendly)
- Submit button: full-width, prominent
- Contact info: icon + text inline, not stacked

### 10. Newsletter
**Current**: Email subscribe input
**Mobile changes**:
- Full-width input + button
- Button: full-width below input on mobile
- Clear placeholder text

### 11. Footer
**Current**: Minimal with gold tagline
**Mobile changes**:
- Stack all columns
- Reduce padding
- Social icons: larger touch targets

---

## Typography Scale (Mobile)

| Element | Mobile (default) | Tablet (sm/md) | Desktop (lg+) |
|---------|------------------|----------------|---------------|
| Hero h1 | text-3xl (1.875rem) | text-4xl | text-5xl |
| Section h2 | text-2xl (1.5rem) | text-3xl | text-4xl |
| Body | text-base (1rem) | text-base | text-lg |
| Caption | text-sm (0.875rem) | text-sm | text-base |
| CTA button | text-base, py-3 px-6 | text-base | text-lg, py-4 px-8 |

## Spacing Scale (Mobile)

| Context | Mobile | Desktop |
|---------|--------|---------|
| Section vertical padding | py-16 (64px) | py-24 (96px) |
| Section horizontal padding | px-5 (20px) | px-8 (32px) |
| Card internal padding | p-5 (20px) | p-6 (24px) |
| Gap between cards | gap-4 (16px) | gap-6 (24px) |

## Touch Targets

- Minimum 44x44px for all interactive elements
- CTA buttons: min-height 48px
- Nav items: min-height 48px
- Gallery thumbnails: min-height 44px

## Animation Adjustments (Mobile)

- GSAP text reveal: duration 0.6s mobile → 0.8s desktop
- Scroll reveals: faster on mobile (feels snappier)
- Particles: density 15-20 on mobile (performance + visual noise reduction)
- Reduce parallax intensity on mobile (subtle, not jarring)
- Keep `prefers-reduced-motion` fully respected

## Performance Considerations

- Lazy load gallery images below the fold
- Reduce particle count on mobile
- Consider `will-change: transform` on animated elements
- Use `loading="lazy"` on non-hero images
- Hero image: smaller srcset on mobile

## Files to Modify

1. `app/globals.css` — Add mobile-specific utility classes, spacing tokens
2. `components/Hero.tsx` — Typography scaling, particle reduction, CTA positioning
3. `components/About.tsx` — Stack layout, stat card inline
4. `components/Menu.tsx` — Carousel or grid adaptation, touch targets
5. `components/Gallery.tsx` — Single column or horizontal scroll, lightbox
6. `components/ChefSpotlight.tsx` — Stack layout, pillar scroll
7. `components/AwardsStrip.tsx` — Counter grid, logo scroll
8. `components/Testimonials.tsx` — Single column stack
9. `components/Reservations.tsx` — Form full-width, native inputs
10. `components/Newsletter.tsx` — Full-width responsive
11. `components/Footer.tsx` — Stack columns
12. `components/Navbar.tsx` — Enhanced hamburger animation
13. `components/AmbientParticles.tsx` — Mobile particle reduction
14. `components/GsapProvider.tsx` — Mobile-tuned animation durations

## Testing

- Test on real devices: iPhone SE (375px), iPhone 14 (390px), iPad (768px)
- Verify touch interactions work (carousel swipe, gallery tap)
- Check performance on mobile (no jank, smooth 60fps)
- Verify `prefers-reduced-motion` still works
- Check accessibility: focus states, screen reader, keyboard nav
