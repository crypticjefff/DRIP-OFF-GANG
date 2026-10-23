export const BRAND_SOCIAL_IMAGE_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664018215272/irUcJpLDcbCqyncX.png";

export const GARMENTS = [
  {
    id: "tshirt",
    name: "T-shirt",
    plural: "T-shirts",
    description: "A clean cotton tee with the gang mark your way.",
    color: "#eee5d9",
  },
  {
    id: "hoodie",
    name: "Hoodie",
    plural: "Hoodies",
    description: "Heavyweight energy. Your logo, your placement.",
    color: "#d9c8b8",
  },
  {
    id: "sweatshirt",
    name: "Sweatshirt",
    plural: "Sweatshirts",
    description: "A clean crewneck with room for your mark.",
    color: "#667b8d",
  },
  {
    id: "shorts",
    name: "Shorts",
    plural: "Shorts",
    description: "Make the mark move with you.",
    color: "#b76e43",
  },
  {
    id: "sweatpants",
    name: "Sweatpants",
    plural: "Sweatpants",
    description: "Comfort-first. Gang-marked.",
    color: "#283a4c",
  },
  {
    id: "jeans",
    name: "Jeans",
    plural: "Jeans",
    description: "Street-ready denim with a Drip Off twist.",
    color: "#607b91",
  },
] as const;

export type GarmentId = (typeof GARMENTS)[number]["id"];

export const GARMENT_COLOURS = [
  { id: "slate", label: "Slate", value: "#30465b" },
  { id: "rust", label: "Rust", value: "#b76e43" },
  { id: "cream", label: "Cream", value: "#eee5d9" },
  { id: "red", label: "Red", value: "#df2938" },
  { id: "black", label: "Black", value: "#1d2023" },
  { id: "stone", label: "Stone", value: "#a7a49c" },
] as const;

export const LOGO_COLOURS = [
  { id: "original", label: "Original", filter: "none" },
  { id: "rust", label: "Rust", filter: "sepia(.85) saturate(2.2) hue-rotate(-12deg)" },
  { id: "slate", label: "Slate", filter: "grayscale(.42) sepia(.32) saturate(1.7) hue-rotate(162deg)" },
  { id: "red", label: "Red", filter: "sepia(.35) saturate(4) hue-rotate(320deg)" },
  { id: "sand", label: "Sand", filter: "grayscale(1) brightness(1.28) contrast(.82)" },
] as const;

export type LogoColourId = (typeof LOGO_COLOURS)[number]["id"];
export type LogoPlacement = "front" | "back";
export const GARMENT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export function getGarment(id: string | null | undefined) {
  return GARMENTS.find((garment) => garment.id === id) ?? GARMENTS[0];
}
