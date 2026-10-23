import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Form, Link, useSearchParams } from "react-router";

import { GarmentArt } from "~/components/GarmentArt";
import { OWNER_PHONE_DISPLAY, OWNER_WHATSAPP_URL } from "~/lib/contact";
import {
  DEFAULT_DESIGN,
  garmentColourHex,
  logoColourLabel,
  parseDesignerParams,
  type GarmentDesign,
} from "~/lib/design-config";
import {
  GARMENTS,
  GARMENT_COLOURS,
  GARMENT_SIZES,
  LOGO_COLOURS,
  type GarmentId,
  type LogoColourId,
  type LogoPlacement,
} from "~/lib/garments";
import { BRAND_SOCIAL_IMAGE_URL } from "~/lib/garments";

const LOGO_SWATCHES: Record<LogoColourId, string> = {
  original: "linear-gradient(135deg, #344a61 0 34%, #b76e43 34% 67%, #df2938 67%)",
  rust: "#b76e43",
  slate: "#30465b",
  red: "#df2938",
  sand: "#eee5d9",
};

function choiceId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function meta() {
  const title = "Design Preview | Drip Off Gang";
  const description =
    "Create a shareable visual preview of a Drip Off Gang T-shirt, hoodie, sweatshirt, shorts, sweatpants or jeans. No checkout or cart.";
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Drip Off Gang, streetwear, clothing design preview, logo customizer" },
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

export default function DesignRoute() {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.toString();
  const [draft, setDraft] = useState<GarmentDesign>(() => parseDesignerParams(searchParams));

  useEffect(() => {
    setDraft(parseDesignerParams(new URLSearchParams(searchKey)));
  }, [searchKey]);

  const availableFabrics = GARMENT_COLOURS;
  const availableSizes = GARMENT_SIZES;
  const fabricColour = availableFabrics.some((choice) => choice.label === draft.fabricColour)
    ? draft.fabricColour
    : DEFAULT_DESIGN.fabricColour;
  const size = availableSizes.some((choice) => choice === draft.size)
    ? draft.size
    : DEFAULT_DESIGN.size;
  const design = useMemo(() => ({ ...draft, fabricColour, size }), [draft, fabricColour, size]);
  const garmentName = GARMENTS.find((garment) => garment.id === design.garment)?.name ?? "Garment";
  const whatsappMessage = `Hi Talique, I would like to ask about this Drip Off Gang look: ${garmentName}, ${design.fabricColour} fabric, ${logoColourLabel(design.logoColour)} logo, ${design.placement} placement, size ${design.size}.`;
  const whatsappDesignUrl = `${OWNER_WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;

  function updateGarment(garment: GarmentId) {
    setDraft((current) => ({
      ...current,
      garment,
      fabricColour: DEFAULT_DESIGN.fabricColour,
      size: DEFAULT_DESIGN.size,
    }));
  }

  return (
    <main className="dg-page dg-designer" id="main-content" tabIndex={-1}>
      <section className="dg-page-hero">
        <p className="dg-kicker">DRIP OFF GANG · VISUAL DESIGNER</p>
        <h1>Build your own <em>drip.</em></h1>
        <p>Try a garment, fabric shade and logo placement. Save or share the preview link, or ask Talique about your idea on WhatsApp.</p>
      </section>

      <section className="dg-designer__workspace" aria-label="Clothing design preview">
        <div className="dg-designer__controls">
          <div className="dg-designer__step"><span>01</span><div><strong>Choose your canvas</strong><small>Change the piece and watch the mockup update.</small></div></div>
          <Form method="get" action="/design" className="dg-designer__form">
            <label className="dg-field-label" htmlFor="design-garment">Garment</label>
            <select
              id="design-garment"
              name="garment"
              value={design.garment}
              onChange={(event) => updateGarment(event.currentTarget.value as GarmentId)}
            >
              {GARMENTS.map((garment) => <option key={garment.id} value={garment.id}>{garment.name}</option>)}
            </select>

            <fieldset className="dg-control-group">
              <legend className="dg-field-label">Fabric colour</legend>
              <div className="dg-swatch-list">
                {availableFabrics.map((choice) => {
                  const id = `fabric-${choiceId(choice.label)}`;
                  return (
                    <label key={choice.label} className="dg-swatch-choice">
                      <input
                        className="dg-swatch-choice__input"
                        id={id}
                        type="radio"
                        name="fabric"
                        value={choice.label}
                        checked={design.fabricColour === choice.label}
                        onChange={() => setDraft((current) => ({ ...current, fabricColour: choice.label }))}
                      />
                      <span className="dg-swatch-choice__chip" style={{ "--swatch": choice.value } as CSSProperties} aria-hidden="true" />
                      <span className="dg-swatch-choice__name">{choice.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="dg-control-group">
              <legend className="dg-field-label">Logo ink</legend>
              <div className="dg-logo-list">
                {LOGO_COLOURS.map((colour) => {
                  const id = `logo-${colour.id}`;
                  return (
                    <label key={colour.id} className="dg-logo-choice">
                      <input
                        className="dg-swatch-choice__input"
                        id={id}
                        type="radio"
                        name="logo"
                        value={colour.id}
                        checked={design.logoColour === colour.id}
                        onChange={() => setDraft((current) => ({ ...current, logoColour: colour.id as LogoColourId }))}
                      />
                      <span className="dg-logo-choice__swatch" style={{ "--swatch": LOGO_SWATCHES[colour.id] } as CSSProperties} aria-hidden="true" />
                      <span>{colour.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="dg-control-group">
              <legend className="dg-field-label">Logo placement</legend>
              <div className="dg-choice-row">
                {([
                  ["front", "Front"],
                  ["back", "Back"],
                ] as const satisfies readonly [LogoPlacement, string][]).map(([value, label]) => (
                  <label key={value} className="dg-radio-pill">
                    <input
                      type="radio"
                      name="placement"
                      value={value}
                      checked={design.placement === value}
                      onChange={() => setDraft((current) => ({ ...current, placement: value }))}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="dg-field-label" htmlFor="design-size">Size reference</label>
            <select
              id="design-size"
              name="size"
              value={size}
              onChange={(event) => setDraft((current) => ({ ...current, size: event.currentTarget.value }))}
            >
              {availableSizes.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
            <p className="dg-field-note">Size is part of the preview link only; it does not check stock or place an order.</p>

            <button type="submit" className="dg-button dg-button--dark dg-designer__save">
              Save preview link <span aria-hidden="true">↗</span>
            </button>
          </Form>
        </div>

        <div className="dg-designer__preview-column">
          <div className="dg-designer__preview-heading"><span>LIVE VISUAL PREVIEW</span><span>DRIP OFF GANG</span></div>
          <div className="dg-designer__preview-stage">
            <GarmentArt
              garment={design.garment}
              garmentColour={garmentColourHex(design.fabricColour)}
              logoColour={design.logoColour}
              placement={design.placement}
              className="dg-designer__art"
            />
            <div className="dg-designer__preview-caption">
              <strong>{garmentName}</strong>
              <span>{design.fabricColour} · {design.size} · {design.placement}</span>
            </div>
          </div>
          <p className="dg-designer__disclaimer">Concept mockup for inspiration only. It does not represent confirmed stock, final materials, print specifications or an order.</p>

          <div className="dg-designer__contact-card" aria-labelledby="designer-contact-title">
            <span className="dg-kicker">MADE A LOOK YOU LIKE?</span>
            <h2 id="designer-contact-title">Ask Talique about it.</h2>
            <p>Send this visual preview to the owner and ask about the garment directly. No cart or checkout is attached to this preview.</p>
            <a className="dg-button dg-button--whatsapp" href={whatsappDesignUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp · {OWNER_PHONE_DISPLAY} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="dg-designer__footer-note">
        <span className="dg-designer__note-mark" aria-hidden="true">DG</span>
        <div><strong>A preview to share—not a checkout.</strong><p>Your garment, fabric, logo ink, placement and size are stored in the page URL so you can revisit or share the visual.</p></div>
        <Link to="/lookbook" className="dg-link-arrow">Browse the lookbook <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
