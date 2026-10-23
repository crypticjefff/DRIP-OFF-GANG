import { Link } from "react-router";

import { StyleLookbook } from "~/components/StyleLookbook";
import { BRAND_SOCIAL_IMAGE_URL } from "~/lib/garments";

export function meta() {
  const title = "Brand Lookbook | Drip Off Gang";
  const description =
    "Explore Drip Off Gang style concepts across T-shirts, hoodies, sweatshirts, shorts, sweatpants and jeans.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Drip Off Gang" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: BRAND_SOCIAL_IMAGE_URL },
    { property: "og:image:alt", content: "Drip Off Gang logo with bulldog mascot" },
  ];
}

export default function LookbookRoute() {
  return (
    <main className="dg-page dg-lookbook-page" id="main-content" tabIndex={-1}>
      <section className="dg-page-hero">
        <p className="dg-kicker">THE DRIP OFF GANG LOOKBOOK</p>
        <h1>See the mark.<br /><em>On the crew.</em></h1>
        <p>Explore photo-style outfit concepts across the clothing line-up. Choose a look to open its visual designer preview, then contact Talique directly if you want to discuss it.</p>
        <div className="dg-hero__actions">
          <Link to="/design" prefetch="intent" className="dg-button dg-button--dark">Build a preview <span aria-hidden="true">↗</span></Link>
          <Link to="/about#contact" className="dg-link-arrow">Talk to Talique <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <StyleLookbook />
    </main>
  );
}
