# Drip Off Gang brand showcase

A server-rendered React Router site for the Drip Off Gang clothing brand, owned by Talique Mussa. The website presents the brand, an outfit lookbook, a shareable visual garment designer and direct owner contact.

This is a **brand showcase**, not an online store: it has no product checkout, shopping cart, account sign-in or confirmed inventory. The designer is a visual mockup only. Visitors can contact Talique about a look by WhatsApp, phone or email.

## Pages

- `/` — logo-led brand introduction, the supplied campaign photo and six garment-preview starting points.
- `/lookbook` — photo-style outfit concepts across T-shirts, hoodies, sweatshirts, shorts, sweatpants and jeans. Generated concepts are labelled as inspiration rather than product photography.
- `/design` — interactive garment mockup with fabric colour, logo ink, placement and size-reference controls. Selections are saved in the URL and can be discussed with Talique through a prefilled WhatsApp message.
- `/about` — the brand owner’s profile and verified contact details, including WhatsApp.

## Run locally

Requires Node.js 22.12+ or Node.js 24 and pnpm 11.25.0.

```bash
pnpm install
pnpm dev
```

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start the React Router development server on port 3000. |
| `pnpm typecheck` | Generate route types and run TypeScript checks. |
| `pnpm build` | Build the production site for the existing Worker runtime. |
| `pnpm preview` | Build and preview locally. |

## Published runtime

The root `Dockerfile` builds the React Router Worker and runs it through MiniOxygen’s production preview runtime. The container listens on `PORT` (default `3000`) and exposes `/_app/health` as an unauthenticated health check.

## Project structure

- `app/routes/` contains the home, lookbook, visual designer, About and fallback routes.
- `app/components/` contains shared brand navigation, footer, garment mockups and lookbook cards.
- `app/lib/` contains garment/design choices and owner contact links.
- `app/app.css` contains the brand palette, responsive layouts and the site-wide photo treatment.
- `public/manus-routes.json` declares the public pages for the hosting platform.

The provided contact details and consulting locations are from Talique Mussa’s public profile. Those locations are not stated as clothing-delivery areas. Message Talique to discuss clothing, sizing, availability or a custom concept; the site does not confirm an order.
