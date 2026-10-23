import { Link } from "react-router";

import { OWNER_EMAIL, OWNER_PHONE_DISPLAY, OWNER_PHONE_E164, OWNER_WHATSAPP_URL } from "~/lib/contact";

const linkClass =
  "min-h-touch-target text-on-surface-secondary hover:text-on-surface focus-visible:outline-accent inline-flex items-center font-normal no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:transition-colors";

export function Footer() {
  return (
    <footer className="dg-site-footer max-w-page px-margin mx-auto w-full">
      <div className="dg-site-footer__inner">
        <div className="min-w-0 wrap-anywhere">
          <h2 className="type-body-sm text-on-surface mb-2 font-medium">Drip Off Gang</h2>
          <p className="mb-1 text-sm font-semibold">Owned by Talique Mussa</p>
          <p className="mb-4 max-w-xs text-sm text-on-surface-secondary">
            A brand showcase for the mark, the fits and the people who wear them.
          </p>
          <Link to="/design" className={linkClass}>Explore the visual designer</Link>
        </div>

        <nav aria-labelledby="footer-explore-heading">
          <h2 className="type-body-sm text-on-surface mb-4 font-medium" id="footer-explore-heading">
            Explore
          </h2>
          <ul role="list" className="flex flex-col gap-2">
            <li><Link to="/lookbook" className={linkClass}>Brand lookbook</Link></li>
            <li><Link to="/design" className={linkClass}>Design preview</Link></li>
            <li><Link to="/about" className={linkClass}>About the brand</Link></li>
            <li><Link to="/about#contact" className={linkClass}>Contact Talique</Link></li>
          </ul>
        </nav>

        <div className="dg-site-footer__contact">
          <h2 className="type-body-sm text-on-surface mb-4 font-medium">Talk to Talique</h2>
          <a className="dg-button dg-button--whatsapp" href={OWNER_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp · {OWNER_PHONE_DISPLAY} <span aria-hidden="true">↗</span>
          </a>
          <a className={linkClass} href={`mailto:${OWNER_EMAIL}`}>Email Talique</a>
          <a className={linkClass} href={`tel:${OWNER_PHONE_E164}`}>Call {OWNER_PHONE_DISPLAY}</a>
        </div>
      </div>
      <p className="dg-site-footer__note">Lookbook imagery and garment previews are for inspiration; contact Talique to discuss a real piece.</p>
    </footer>
  );
}
