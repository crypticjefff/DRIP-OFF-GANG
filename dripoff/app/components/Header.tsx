import { useState } from "react";
import { Link, NavLink } from "react-router";

import { BRAND_LOGO_URL } from "~/components/GarmentArt";
import { OWNER_PHONE_DISPLAY, OWNER_WHATSAPP_URL } from "~/lib/contact";

import { MobileNav, MobileNavTrigger } from "./MobileNav";

export function Header() {
  const [failedLogo, setFailedLogo] = useState(false);

  return (
    <header className="border-border bg-surface sticky top-0 z-40 border-b">
      <div
        className="max-w-page px-margin mx-auto flex h-16 w-full items-center justify-between gap-2"
        data-header-nav-group
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 pe-2 md:max-w-48 md:flex-none md:pe-0">
          <div className="-ms-2 shrink-0 md:hidden" data-hamburger-wrapper>
            <MobileNavTrigger />
          </div>
          <Link
            to="/"
            aria-label="Drip Off Gang home"
            title="Drip Off Gang"
            className="dg-header__brand text-on-surface focus-visible:outline-accent inline-flex max-w-56 min-w-0 items-center gap-2 rounded-sm text-lg font-medium no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {!failedLogo ? (
              <img
                src={BRAND_LOGO_URL}
                alt=""
                width={72}
                height={51}
                className="dg-header__logo"
                onError={() => setFailedLogo(true)}
              />
            ) : (
              <span className="line-clamp-2 leading-tight wrap-anywhere">Drip Off Gang</span>
            )}
            <span className="dg-header__wordmark">DRIP OFF<br />GANG</span>
          </Link>
        </div>

        <nav
          aria-label="Main navigation"
          className="dg-main-nav mx-auto hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex"
          data-desktop-nav
        >
          <NavLink prefetch="intent" to="/lookbook" className={({ isActive }) => `dg-nav-link${isActive ? " is-active" : ""}`}>
            Lookbook
          </NavLink>
          <NavLink prefetch="intent" to="/about" className={({ isActive }) => `dg-nav-link${isActive ? " is-active" : ""}`}>
            The brand
          </NavLink>
          <NavLink prefetch="intent" to="/design" className={({ isActive }) => `dg-nav-cta${isActive ? " is-active" : ""}`}>
            Design yours <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center">
          <a
            href={OWNER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="dg-header__whatsapp"
            aria-label={`Message Talique on WhatsApp at ${OWNER_PHONE_DISPLAY}`}
          >
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}
