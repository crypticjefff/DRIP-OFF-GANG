# Drip Off Gang brand-showcase guidance

This project is a public clothing-brand showcase for Drip Off Gang, owned by Talique Mussa. Its pages are the home page, lookbook, visual designer and About/contact page.

## Product behavior

- Keep this site informational and visual: do not reintroduce Shopify Storefront queries, product purchase forms, carts, checkout, customer accounts, predictive search or payment UI unless the owner explicitly asks for an online store.
- The designer only renders a visual mockup and a shareable preview URL. It does not check inventory, confirm price or place orders.
- The designer’s WhatsApp link may carry its selected garment, fabric colour, logo ink, placement and size as an inquiry message. Do not imply that a WhatsApp message is a confirmed order.
- Use the verified owner contact constants in `app/lib/contact.ts`. The listed consulting locations must not be described as shipping or clothing-delivery coverage.
- Keep generated outfit imagery identified as styling inspiration, not actual product photography or confirmed inventory.

## Brand and implementation

- Use the supplied Drip Off Gang logo and campaign photo, with the slate, rust, cream and red brand palette already defined in `app/app.css`.
- Keep navigation and contact actions visible and keyboard-accessible at desktop and mobile sizes. Respect `prefers-reduced-motion`.
- When routes change, synchronize `public/manus-routes.json` with the source route set.
- Use `pnpm dev`, `pnpm typecheck` and `pnpm build` for routine development checks. The project uses React Router and the existing Oxygen-compatible runtime.
