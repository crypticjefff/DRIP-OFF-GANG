import type { CSSProperties } from "react";

import { type GarmentId, type LogoColourId, type LogoPlacement } from "~/lib/garments";

export const BRAND_LOGO_URL = "/drip-off-gang-logo-transparent.png";

const BRAND_LOGO_VARIANTS: Record<LogoColourId, string> = {
  original: BRAND_LOGO_URL,
  rust: "/drip-off-gang-logo-rust.png",
  slate: "/drip-off-gang-logo-slate.png",
  red: "/drip-off-gang-logo-red.png",
  sand: "/drip-off-gang-logo-sand.png",
};

type GarmentArtProps = {
  garment: GarmentId;
  garmentColour?: string;
  logoColour?: LogoColourId;
  placement?: LogoPlacement;
  showLogo?: boolean;
  className?: string;
};

function GarmentShape({ garment }: { garment: GarmentId }) {
  if (garment === "hoodie") {
    return (
      <>
        <path d="M119 72 81 88 43 167l38 18 23-46-5 157h122l-5-157 23 46 38-18-38-79-38-16-18 21-19 8-19-8z" />
        <path d="M122 72q4-44 38-48 34 4 38 48l-18 23q-20 12-40 0z" />
        <path d="M124 215q36 19 72 0l-5 38q-31 17-62 0z" />
        <path d="M145 80v38m30-38v38" fill="none" stroke="#233444" strokeWidth="3" />
        <path d="M102 140l-4 43m120-43 4 43M100 281v15m120-15v15" fill="none" stroke="#f5eee5" strokeOpacity=".78" strokeWidth="3" />
      </>
    );
  }

  if (garment === "tshirt") {
    return (
      <>
        <path d="M119 67 84 82 47 128l37 22 23-27-4 158h114l-4-158 23 27 37-22-37-46-35-15-17 18q-28 17-56 0z" />
        <path d="M131 68q29 23 58 0" fill="none" stroke="#233444" strokeWidth="5" />
        <path d="M104 142l-4 42m120-42 4 42M103 281h114" fill="none" stroke="#f5eee5" strokeOpacity=".8" strokeWidth="3" />
        <path d="M55 124l28 17m182-17-28 17" fill="none" stroke="#233444" strokeWidth="3" />
      </>
    );
  }

  if (garment === "sweatshirt") {
    return (
      <>
        <path d="M122 66 83 83 45 161l38 19 23-46-5 162h118l-5-162 23 46 38-19-38-78-39-17-17 17q-20 8-42 0z" />
        <path d="M133 66q27 20 54 0" fill="none" stroke="#233444" strokeWidth="5" />
        <path d="M98 281h124v17H98zM48 157l36 17-8 16-37-18m215-15-36 17 8 16 37-18" />
        <path d="M105 141l-4 42m118-42 4 42" fill="none" stroke="#f5eee5" strokeOpacity=".78" strokeWidth="3" />
      </>
    );
  }

  if (garment === "shorts") {
    return (
      <>
        <path d="M91 70h138l11 172q-39 15-79 1-40 14-79-1z" />
        <path d="M91 70h138v29H91zM161 99v144" fill="none" stroke="#233444" strokeWidth="5" />
        <path d="M104 132v81m114-81v81M91 228q38 15 70 0 34 15 79 0" fill="none" stroke="#f5eee5" strokeOpacity=".82" strokeWidth="3" />
        <path d="M143 70v20m34-20v20" fill="none" stroke="#233444" strokeWidth="3" />
      </>
    );
  }

  const isJogger = garment === "sweatpants";
  return (
    <>
      <path d={isJogger ? "M99 61h122l-5 79-13 142q-21 9-43 0l-1-137-2 137q-22 9-43 0l-13-142z" : "M96 61h128l-7 79-8 157h-48l-1-142-2 142h-48l-8-157z"} />
      <path d="M96 61h128v27H96zM160 88v51" fill="none" stroke="#233444" strokeWidth="5" />
      {isJogger ? (
        <path d="M117 264h43v21q-21 10-43 0zm44 0h43v21q-22 10-43 0z" />
      ) : (
        <path d="M112 263h49v27h-49zm49 0h49v27h-49z" />
      )}
      <path d="M105 141l5 103m107-103-5 103" fill="none" stroke="#f5eee5" strokeOpacity=".78" strokeWidth="3" />
      {garment === "jeans" ? (
        <>
          <path d="M160 89v49m-12-33h24M111 204h15v9h-15m68-9h15v9h-15" fill="none" stroke="#233444" strokeWidth="3" />
          <circle cx="160" cy="101" r="3.5" fill="#d5b277" />
        </>
      ) : (
        <path d="M120 72v12m80-12v12" fill="none" stroke="#233444" strokeWidth="3" />
      )}
    </>
  );
}

export function GarmentArt({
  garment,
  garmentColour,
  logoColour = "original",
  placement = "front",
  showLogo = true,
  className = "",
}: GarmentArtProps) {
  const colour = garmentColour ?? "#c4b4a3";
  const style = { "--garment-colour": colour } as CSSProperties;

  return (
    <div
      className={`garment-art garment-art--${garment} ${className}`.trim()}
      style={style}
      data-garment={garment}
      data-placement={placement}
    >
      <svg viewBox="0 0 320 340" role="img" aria-label={`${garment} mockup in selected colour`}>
        <defs>
          <filter id={`shadow-${garment}`} x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#1a2730" floodOpacity=".17" />
          </filter>
        </defs>
        <ellipse cx="160" cy="310" rx="96" ry="13" fill="#1a2730" opacity=".08" />
        <g
          filter={`url(#shadow-${garment})`}
          fill="var(--garment-colour)"
          stroke="#243749"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <GarmentShape garment={garment} />
        </g>
      </svg>
      {showLogo ? (
        <img
          className={`garment-art__logo garment-art__logo--${placement}`}
          src={BRAND_LOGO_VARIANTS[logoColour]}
          alt="Drip Off Gang logo preview"
          loading="lazy"
        />
      ) : null}
      <span className="garment-art__label">{placement === "front" ? "FRONT VIEW" : "BACK VIEW"}</span>
    </div>
  );
}
