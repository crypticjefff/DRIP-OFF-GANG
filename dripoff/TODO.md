# Drip Off Gang delivery status

## Brand showcase and navigation
- [x] Create a clothing website for Drip Off Gang, owned by Talique Mussa, using the supplied logo and a matching slate, rust, cream and black palette.
- [x] Keep the site focused on brand identity, outfit inspiration and custom visual previews rather than online sales.
- [x] Make the site responsive, interactive and faster to navigate, with clear routes to the home page, lookbook, garment designer and About/contact page.
- [x] Use the supplied campaign photo as a softly blurred site-wide backdrop and show it clearly in the homepage hero.
- [x] Use information from the public Canva profile to identify Talique Mussa as a Brand and Communications Consultant; label Blantyre, Zomba, Lilongwe, Mzuzu and Mangochi as consulting locations, not clothing-delivery areas.

## Garment previews and lookbook
- [x] Feature T-shirts, hoodies, sweatshirts, shorts, sweatpants and jeans in the visual garment designer and lookbook.
- [x] Let visitors choose garment and fabric colours, try original/rust/slate/red/sand logo inks, and adjust front/back logo placement and size; preserve shareable preview settings in the URL.
- [x] Let visitors contact Talique about a visual concept through a contextual WhatsApp inquiry; the preview must not represent an order, confirmed price or available inventory.
- [x] Show photo-led, photorealistic lookbook concepts as styling inspiration, not confirmed product photography or live inventory.
- [ ] Replace or supplement the AI-generated styling concepts with authentic photos of people wearing the actual Drip Off Gang garments when the owner supplies suitable apparel photography; the Canva profile provided no clothing-model photos.

## Contact and commerce boundary
- [x] Provide direct WhatsApp contact using Talique’s number +265 996 244 966, plus the verified phone and email contact options.
- [x] Remove Shopify Storefront application code and all transactional features, including cart, checkout, product-purchase forms, customer accounts, predictive search and product loaders. Remove the unused Hydrogen, Shopify CLI, GraphQL and session packages; retain only the Oxygen/MiniOxygen tooling required to build and host the React Router Worker site.
- [ ] Disconnect the platform-managed Shopify project integration. It remains enabled in project configuration and requires its managed secret declarations; the supported config interface rejected attempts to withdraw those declarations while the integration is enabled. Finish this through the project’s Integrations settings if full platform-level disconnection is required.
- [x] State clearly that the designer is a visual mockup and direct inquiry tool, not a purchasing flow.

## Project validation and publishing
- [x] Update project instructions and documentation for the showcase, remove unneeded commerce packages and Shopify-specific types, and retain the React Router/Oxygen runtime.
- [x] Pass `pnpm typecheck` and `pnpm build`; confirm the running site serves the JSON page-route manifest, and verify the production MiniOxygen preview serves all public pages.
- [x] Preserve the Oxygen/React Router SSR runtime in a root Dockerfile that installs with pinned pnpm, builds the Worker and listens on `PORT` (default `3000`); provide the unauthenticated `/_app/health` response and configure the deploy contract to use that Dockerfile and health path.
- [x] Save the validated deployment-ready revision to the canonical `main` branch as a Manus checkpoint.
- [ ] Publish the new deployment-ready revision after the owner approves its exact SHA.
