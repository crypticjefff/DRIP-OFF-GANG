import { Link, NavLink } from "react-router";

import { closeMobileNavDrawer, MOBILE_NAV_DRAWER_ID, openDialogFallback } from "~/lib/dialog";
import { OWNER_PHONE_DISPLAY, OWNER_WHATSAPP_URL } from "~/lib/contact";
import { GARMENTS } from "~/lib/garments";

export function MobileNav() {
  return (
    <dialog
      id={MOBILE_NAV_DRAWER_ID}
      className="drawer-left bg-surface text-on-surface"
      aria-labelledby="mobile-nav-title"
      data-testid="mobile-nav"
      closedby="any"
    >
      <div className="flex h-full flex-col">
        <div className="min-h-touch-target relative flex shrink-0 items-center px-4 py-1">
          <span
            className="text-on-surface pointer-events-none absolute left-1/2 -translate-x-1/2 text-sm font-medium"
            id="mobile-nav-title"
            aria-live="polite"
          >
            Explore Drip Off Gang
          </span>
          <button
            type="button"
            commandfor={MOBILE_NAV_DRAWER_ID}
            command="close"
            className="button-icon focus-visible:outline-accent ms-auto inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:transition-[color,background-color,border-color,transform] motion-safe:active:scale-[0.97]"
            aria-label="Close"
            onClick={() => closeMobileNavDrawer()}
          >
            <img src="/icons/icon-x.svg" alt="" className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="dg-mobile-nav__content flex-1 overflow-y-auto p-4">
          <nav aria-label="Mobile navigation">
            <NavLink
              to="/design"
              prefetch="intent"
              className="dg-mobile-nav__start"
              onClick={() => closeMobileNavDrawer()}
            >
              <span><small>START HERE</small><strong>Design a preview</strong></span>
              <span aria-hidden="true">↗</span>
            </NavLink>

            <p className="dg-mobile-nav__label">PICK A PIECE</p>
            <ul role="list" className="dg-mobile-nav__picks">
              {GARMENTS.map((garment, index) => (
                <li key={garment.id}>
                  <Link
                    to={`/design?garment=${garment.id}`}
                    prefetch="intent"
                    className="dg-mobile-nav__pick"
                    onClick={() => closeMobileNavDrawer()}
                  >
                    <span><small>0{index + 1}</small>{garment.name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="dg-mobile-nav__secondary">
              <Link to="/lookbook" prefetch="intent" onClick={() => closeMobileNavDrawer()}>
                Browse the lookbook <span aria-hidden="true">→</span>
              </Link>
              <Link to="/about" prefetch="intent" onClick={() => closeMobileNavDrawer()}>
                Meet the brand <span aria-hidden="true">→</span>
              </Link>
            </div>
            <a
              className="dg-mobile-nav__contact"
              href={OWNER_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message Talique on WhatsApp at ${OWNER_PHONE_DISPLAY}`}
            >
              <span><small>CONTACT TALIQUE</small><strong>Chat on WhatsApp</strong></span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </div>
    </dialog>
  );
}

export function MobileNavTrigger() {
  return (
    <button
      type="button"
      commandfor={MOBILE_NAV_DRAWER_ID}
      command="show-modal"
      className="dg-mobile-nav__trigger button-icon focus-visible:outline-accent inline-flex h-11 cursor-pointer items-center justify-center gap-1.5 rounded px-2 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:transition-[color,background-color,border-color,transform] motion-safe:active:scale-[0.97]"
      aria-label="Menu"
      aria-controls={MOBILE_NAV_DRAWER_ID}
      aria-haspopup="dialog"
      data-testid="nav-trigger"
      onClick={() => openDialogFallback(MOBILE_NAV_DRAWER_ID)}
    >
      <img src="/icons/icon-menu.svg" alt="" className="size-5" aria-hidden="true" />
      <span>Menu</span>
    </button>
  );
}
