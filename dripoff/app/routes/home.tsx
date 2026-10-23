import { Link } from "react-router";

import { GarmentArt } from "~/components/GarmentArt";
import { StyleLookbook } from "~/components/StyleLookbook";
import { BRAND_SOCIAL_IMAGE_URL, GARMENTS } from "~/lib/garments";

import type { Route } from "./+types/home";

const BRAND_CAMPAIGN_PHOTO_URL = "/manus-storage/Screenshot_21-10-2026_211215_dripoffgang.my.canva.site_804d97ae.jpeg";

export function meta(_args: Route.MetaArgs) {
  const title = "Drip Off Gang — Brand, Looks & Visual Designer";
  const description =
    "Explore Drip Off Gang streetwear by Talique Mussa. Browse the lookbook, preview a custom design and contact the owner directly.";
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Drip Off Gang, streetwear, brand lookbook, clothing design preview" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Drip Off Gang" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: BRAND_SOCIAL_IMAGE_URL },
    { property: "og:image:alt", content: "Drip Off Gang logo with bulldog mascot" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: BRAND_SOCIAL_IMAGE_URL },
  ];
}

function BrandTicker() {
  return (
    <div className="dg-ticker" aria-label="Drip Off Gang — made to wear, made yours">
      <span>DRIP OFF GANG</span><i aria-hidden="true">✳</i><span>OWN THE FIT</span>
      <i aria-hidden="true">✳</i><span>MAKE YOUR MARK</span><i aria-hidden="true">✳</i>
      <span>DRIP OFF GANG</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="dg-home" id="main-content" tabIndex={-1}>
      <section className="dg-hero" aria-labelledby="hero-title">
        <div className="dg-hero__copy">
          <p className="dg-kicker"><span className="dg-dot" /> INDEPENDENT STREETWEAR · OWNED BY TALIQUE MUSSA</p>
          <h1 id="hero-title">Wear the mark.<br /><em>Make it yours.</em></h1>
          <p className="dg-hero__intro">
            Meet Drip Off Gang through the mark, the fits and the people who wear them. Explore the
            lookbook or build a visual preview in your own colours.
          </p>
          <div className="dg-hero__actions">
            <Link to="/design" prefetch="intent" className="dg-button dg-button--dark">Build a preview <span aria-hidden="true">↗</span></Link>
            <Link to="/lookbook" prefetch="intent" className="dg-link-arrow">See the lookbook <span aria-hidden="true">→</span></Link>
          </div>
          <div className="dg-hero__byline"><span>OWNED BY</span><strong>Talique Mussa</strong></div>
        </div>
        <div className="dg-hero__visual">
          <div className="dg-hero__stamp">DG<br /><small>ORIGINAL<br />MARK</small></div>
          <img className="dg-hero__photo" src={BRAND_CAMPAIGN_PHOTO_URL} alt="Two people wearing Drip Off Gang graphic T-shirts inside a sneaker shop" fetchPriority="high" />
          <div className="dg-hero__visual-caption"><span>DRIP OFF GANG · ON THE CREW</span><span>REAL PEOPLE · REAL FITS</span></div>
        </div>
      </section>

      <BrandTicker />

      <section className="dg-section dg-categories" aria-labelledby="garments-heading">
        <div className="dg-section-heading">
          <div><p className="dg-kicker">THE STARTING LINE-UP</p><h2 id="garments-heading">Pick your base.</h2></div>
          <p>Six ways to wear it. Every one starts with your choice.</p>
        </div>
        <ul className="dg-garment-grid" role="list">
          {GARMENTS.map((garment, index) => (
            <li key={garment.id}>
              <Link className="dg-garment-card" to={`/design?garment=${garment.id}`} prefetch="intent">
                <span className="dg-garment-card__number">0{index + 1}</span>
                <GarmentArt garment={garment.id} garmentColour={garment.color} className="dg-garment-card__art" />
                <span className="dg-garment-card__foot"><strong>{garment.plural}</strong><span aria-hidden="true">↗</span></span>
                <span className="dg-garment-card__hint">PREVIEW THIS PIECE</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <StyleLookbook />

      <section className="dg-story-strip">
        <div className="dg-story-strip__mark" aria-hidden="true">DG<span>01</span></div>
        <p>One logo. Six canvases. <strong>No two fits need to look alike.</strong></p>
        <Link to="/about#contact" className="dg-link-arrow">Talk to Talique <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
