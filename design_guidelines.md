# Luxury Influencer Portfolio Design Guidelines

## Brand Positioning

**Tone:** Confident, Elegant, Controlled, Modern, Premium

**Avoid:** Influencer clichés, loud UI, over-sexualization, corporate SaaS design, editorial/magazine layouts

**Feel:** A private luxury brand homepage — not a social profile

## Design System

**Background:** Soft off-white, ivory, or warm light neutral

**Typography:**
- Primary: Elegant modern serif or high-end grotesk
- Secondary: Clean minimalist sans-serif

**Accents:** Muted nude, soft gold, graphite, or restrained neon

**Spacing:** Generous white space throughout

**Imagery:** Large, intentional, never crowded. Maintain original aspect ratios.

**Prohibited:** No gradients, no gimmicks, no "creator marketplace" visuals

## Site Architecture & Components

### 1. Entry Modal (First Visit)
Minimal luxury modal with two options:
- "Public Portfolio"
- "Exclusive 18+ Access"

**Requirements:**
- Neutral language
- Age confirmation checkbox for 18+
- localStorage persistence
- No explicit previews

### 2. Hero Section
- Full-width hero image (use provided portfolio images, tastefully cropped)
- Creator name in elegant typography
- Short luxury tagline (1 line, restrained)
- Dual CTAs: "View Portfolio" and "Exclusive Access (18+)"

### 3. About Section

**Exact Copy to Use:**

"About Her

She is a visual creator defined by confidence, control, and modern elegance. Her work explores presence, form, and self-expression through a refined aesthetic that balances strength with restraint.

Each project is approached with intention — emphasizing quality, composition, and a clear visual identity rather than excess. Her portfolio reflects a curated evolution of style, built for audiences who value bold visuals delivered with sophistication.

This platform serves as a central space for her public work, creative direction, and exclusive offerings."

**Tone Rules:** No emojis, no hype language, no unverifiable claims, no explicit references

### 4. Portfolio Gallery (SFW)
- Grid or masonry layout
- Large imagery showcasing all 10 provided portfolio images
- Minimal hover interaction (scale or soft elevation)
- Click to view in modal/lightbox
- No image filters
- Images must feel curated, not dumped

### 5. Social Presence Section
Links with minimal icons:
- Instagram
- Twitter/X
- Email/Contact
- "Exclusive Access" CTA

Consistent spacing, restrained design.

### 6. Exclusive/Subscription Page (18+ Funnel)

**Elements:**
- Headline: "Exclusive Access"
- Short explanation of premium content
- Tasteful teaser imagery (cropped/abstract)
- CTA buttons: "Subscribe on OnlyFans", "Premium Membership", "Support My Work"
- Clean disclaimer: "This section is intended for adults 18+ only."

**Constraint:** No embedded adult media

### 7. Footer
- Name
- Copyright
- Social icons
- Privacy & Age Disclaimer

## Responsive Behavior
- Mobile-first approach
- Touch-friendly interactions
- Smooth scrolling
- Instagram bio-link optimized
- Sticky header optional (minimal)

## Image Handling
- Use all 10 attached portfolio images
- Lazy loading
- Responsive sizing
- High-quality rendering
- No distortion or aggressive cropping

## Images
**Hero:** Large full-width hero image from portfolio collection, tastefully cropped to showcase elegance
**Portfolio Gallery:** All 10 provided images in masonry/grid layout
**Exclusive Page:** Tasteful teaser imagery (abstract/cropped from collection)

## Hard Constraints
- No explicit content on public pages
- No adult UI language
- No aggressive popups
- No placeholder filler text
- Clean, minimal execution

## Priority
Luxury visuals → clarity → monetization funnel. Do not dilute with unnecessary features.