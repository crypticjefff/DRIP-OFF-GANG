import {
  GARMENTS,
  GARMENT_COLOURS,
  GARMENT_SIZES,
  LOGO_COLOURS,
  type GarmentId,
  type LogoColourId,
  type LogoPlacement,
} from "./garments";

export type GarmentDesign = {
  garment: GarmentId;
  fabricColour: string;
  logoColour: LogoColourId;
  placement: LogoPlacement;
  size: string;
};

export const DEFAULT_DESIGN: GarmentDesign = {
  garment: "hoodie",
  fabricColour: GARMENT_COLOURS[0].label,
  logoColour: "original",
  placement: "front",
  size: "M",
};

function cleanValue(value: string | null, fallback: string, maxLength = 48) {
  if (!value) return fallback;
  const cleaned = value.trim().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, maxLength);
  return cleaned || fallback;
}

function normalizeDesign(params: URLSearchParams, prefix: string, fallback: GarmentDesign) {
  const garmentValue = params.get(`${prefix}garment`);
  const garment = GARMENTS.find((entry) => entry.id === garmentValue)?.id ?? fallback.garment;
  const logoValue = params.get(`${prefix}logo`);
  const logoColour = LOGO_COLOURS.find((entry) => entry.id === logoValue)?.id ?? fallback.logoColour;
  const placementValue = params.get(`${prefix}placement`);
  const placement: LogoPlacement = placementValue === "back" ? "back" : fallback.placement;
  const sizeValue = cleanValue(params.get(`${prefix}size`), fallback.size, 32);
  const size = /^[\p{L}\p{N}][\p{L}\p{N} ._/-]{0,31}$/u.test(sizeValue) ? sizeValue : fallback.size;

  return {
    garment,
    fabricColour: cleanValue(
      params.get(`${prefix}fabric`),
      fallback.fabricColour,
      48,
    ),
    logoColour,
    placement,
    size,
  } satisfies GarmentDesign;
}

export function parseDesignerParams(params: URLSearchParams): GarmentDesign {
  return normalizeDesign(params, "", DEFAULT_DESIGN);
}

export function parseProductDesign(params: URLSearchParams): GarmentDesign | null {
  const garment = params.get("do_garment");
  if (!GARMENTS.some((entry) => entry.id === garment)) return null;
  return normalizeDesign(params, "do_", DEFAULT_DESIGN);
}

export function garmentColourHex(label: string): string {
  const exact = GARMENT_COLOURS.find((colour) => colour.label.toLowerCase() === label.toLowerCase());
  if (exact) return exact.value;

  const normalized = label.toLowerCase().trim();
  const known: Record<string, string> = {
    beige: "#d9c8b8",
    blue: "#607b91",
    brown: "#8a5b3e",
    charcoal: "#41474c",
    cream: "#eee5d9",
    denim: "#607b91",
    green: "#65755c",
    grey: "#8b8985",
    gray: "#8b8985",
    ivory: "#eee5d9",
    khaki: "#85856b",
    navy: "#30465b",
    olive: "#78805a",
    orange: "#c87545",
    pink: "#d49aa0",
    purple: "#7b658b",
    red: "#df2938",
    rust: "#b76e43",
    slate: "#30465b",
    stone: "#a7a49c",
    white: "#f4eee5",
  };
  return known[normalized] ?? "#74808a";
}

export function logoColourLabel(id: LogoColourId): string {
  return LOGO_COLOURS.find((entry) => entry.id === id)?.label ?? "Original";
}

export function isGarmentSize(value: string): boolean {
  return GARMENT_SIZES.some((size) => size === value);
}
