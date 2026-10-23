import { Link } from "react-router";
import type { GarmentId } from "~/lib/garments";

type LookbookLook = {
  garment: GarmentId;
  title: string;
  image: string;
  alt: string;
};

const LOOKBOOK: LookbookLook[] = [
  {
    garment: "tshirt",
    title: "Everyday tees",
    image: "/manus-storage/tee_8aec3006.jpg",
    alt: "Photorealistic style concept featuring an adult model in a Drip Off Gang T-shirt.",
  },
  {
    garment: "hoodie",
    title: "Heavyweight hoodies",
    image: "/manus-storage/hoodie_d85b7f07.jpg",
    alt: "Photorealistic style concept featuring an adult model wearing a Drip Off Gang hoodie.",
  },
  {
    garment: "sweatshirt",
    title: "Clean crewnecks",
    image: "/manus-storage/sweatshirt_800b1734.jpg",
    alt: "Photorealistic style concept featuring an adult model wearing a Drip Off Gang crew sweatshirt.",
  },
  {
    garment: "shorts",
    title: "Shorts in motion",
    image: "/manus-storage/shorts_c02c0378.jpg",
    alt: "Photorealistic style concept featuring an adult model wearing a Drip Off Gang T-shirt with plain shorts.",
  },
  {
    garment: "sweatpants",
    title: "Off-duty sweatpants",
    image: "/manus-storage/sweatpants_d3de5891.jpg",
    alt: "Photorealistic style concept featuring an adult model in a Drip Off Gang T-shirt and plain sweatpants.",
  },
  {
    garment: "jeans",
    title: "Street-ready denim",
    image: "/manus-storage/jeans_e7551ad9.jpg",
    alt: "Photorealistic style concept featuring an adult model in plain jeans and a Drip Off Gang T-shirt.",
  },
];

export function StyleLookbook() {
  return (
    <section className="dg-lookbook" aria-labelledby="dg-lookbook-title">
      <div className="dg-lookbook__inner">
        <header className="dg-lookbook__heading">
          <div>
            <p className="dg-kicker">STYLE INSPIRATION</p>
            <h2 id="dg-lookbook-title">See it on the street.</h2>
          </div>
          <p>Plain pieces. One bold mark. Make every fit your own.</p>
        </header>
        <p className="dg-lookbook__disclosure">
          AI-generated style concepts for inspiration—not photos of available stock or live products. Actual fabrics, prints and availability may differ.
        </p>
        <ul className="dg-lookbook__grid" role="list">
          {LOOKBOOK.map((look, index) => (
            <li key={look.garment}>
              <Link
                className="dg-lookbook-card"
                to={`/design?garment=${look.garment}`}
                prefetch="intent"
                aria-label={`Open the designer for ${look.title.toLowerCase()}`}
              >
                <span className="dg-lookbook-card__photo">
                  <img src={look.image} alt={look.alt} loading="lazy" decoding="async" />
                  <span className="dg-lookbook-card__index" aria-hidden="true">0{index + 1}</span>
                </span>
                <span className="dg-lookbook-card__foot">
                  <strong>{look.title}</strong>
                  <span>Design this <span aria-hidden="true">↗</span></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
