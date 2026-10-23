import { Link } from "react-router";

import { BRAND_LOGO_URL } from "~/components/GarmentArt";
import { OWNER_EMAIL, OWNER_PHONE_DISPLAY, OWNER_PHONE_E164, OWNER_WHATSAPP_URL } from "~/lib/contact";
import { BRAND_SOCIAL_IMAGE_URL } from "~/lib/garments";

export function meta() {
  const title = "About Drip Off Gang | Talique Mussa";
  const description =
    "Meet Drip Off Gang, the logo-led streetwear label owned by Talique Mussa. Explore the brand and contact the owner directly on WhatsApp.";
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Drip Off Gang, Talique Mussa, streetwear brand, clothing showcase" },
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

export default function AboutRoute() {
  return (
    <main className="dg-page dg-about" id="main-content" tabIndex={-1}>
      <section className="dg-about__hero">
        <div>
          <p className="dg-kicker">THE BRAND BEHIND THE MARK</p>
          <h1>Drip Off Gang.<br /><em>Make it yours.</em></h1>
          <p className="dg-about__intro">
            Drip Off Gang is a logo-led streetwear label built around its original illustrated mark
            and bulldog mascot. It is owned by Talique Mussa, a Brand and Communications Consultant.
          </p>
          <div className="dg-hero__actions">
            <Link to="/design" className="dg-button dg-button--dark">Preview your piece <span aria-hidden="true">↗</span></Link>
            <Link to="/lookbook" className="dg-link-arrow">Explore the lookbook <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="dg-about__logo-panel">
          <img src={BRAND_LOGO_URL} alt="The original Drip Off Gang logo and bulldog mascot" loading="lazy" />
          <span>THE ORIGINAL MARK</span>
        </div>
      </section>

      <section className="dg-about__owner" aria-labelledby="owner-heading">
        <div className="dg-about__owner-mark" aria-hidden="true">DG<span>01</span></div>
        <div>
          <p className="dg-kicker">INDEPENDENT STREETWEAR</p>
          <h2 id="owner-heading">Owned by Talique Mussa.</h2>
          <p>
            The label starts with one recognisable mark and leaves room for every wearer to put
            their own spin on it. Preview a T-shirt, hoodie, sweatshirt, shorts, sweatpants or jeans,
            then play with the fabric colour, logo colour and placement.
          </p>
          <Link to="/design" className="dg-link-arrow">Open the visual designer <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="dg-about__contact" id="contact" aria-labelledby="contact-heading">
        <div>
          <p className="dg-kicker">CONNECT WITH THE OWNER</p>
          <h2 id="contact-heading">Talk to Talique.</h2>
          <p>Contact details and locations below are taken from Talique’s public profile. The listed locations describe his consulting work, not confirmed clothing delivery areas.</p>
          <p className="dg-about__contact-areas"><strong>Consulting locations</strong><br />Blantyre, Zomba, Lilongwe, Mzuzu and Mangochi</p>
        </div>
        <div className="dg-about__contact-actions">
          <a className="dg-button dg-button--whatsapp" href={OWNER_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label={`Message Talique on WhatsApp at ${OWNER_PHONE_DISPLAY}`}>
            WhatsApp · {OWNER_PHONE_DISPLAY} <span aria-hidden="true">↗</span>
          </a>
          <a className="dg-link-arrow" href={`mailto:${OWNER_EMAIL}`}>Email Talique <span aria-hidden="true">↗</span></a>
          <a className="dg-link-arrow" href={`tel:${OWNER_PHONE_E164}`}>Call {OWNER_PHONE_DISPLAY} <span aria-hidden="true">→</span></a>
          <a className="dg-link-arrow" href="https://dripoffgang.my.canva.site/" target="_blank" rel="noopener noreferrer">View Talique’s public profile <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
