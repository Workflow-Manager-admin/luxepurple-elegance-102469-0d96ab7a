import React from "react";

// PUBLIC_INTERFACE
export function ProductCategories() {
  /** LuxePurple Product Categories main section */
  return (
    <section id="collections" className="luxe-product-categories" style={{ margin: "55px 0" }}>
      <h2 className="luxe-section-title" style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 24,
        letterSpacing: ".03em"
      }}>
        Explore Our Categories
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "center",
        marginBottom: 18
      }}>
        <FaceCategoryCard />
        <EyesCategoryCard />
        <LipsCategoryCard />
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
export function FaceCategoryCard() {
  return (
    <div className="luxe-product-category-card" style={{
      flex: "1 1 240px",
      maxWidth: 330,
      background: "#fff",
      color: "#6C3483",
      border: "1.6px solid #c851a8",
      borderRadius: 14,
      padding: "23px 20px 18px 20px",
      minHeight: 210,
      marginBottom: 8
    }}>
      <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Face</h3>
      <ul style={{ paddingLeft: 18 }}>
        <li>
          <strong>Royal Foundation:</strong> Our signature liquid foundation provides medium to full coverage with a luminous finish. Infused with hyaluronic acid and vitamin E, it keeps skin hydrated for 24 hours while creating a flawless complexion.
        </li>
        <li style={{ marginTop: 6 }}>
          <strong>Amethyst Concealer:</strong> A lightweight, buildable concealer that brightens dark circles and covers imperfections without creasing. Available in 20 inclusive shades.
        </li>
      </ul>
    </div>
  );
}

// PUBLIC_INTERFACE
export function EyesCategoryCard() {
  return (
    <div className="luxe-product-category-card" style={{
      flex: "1 1 240px",
      maxWidth: 330,
      background: "#fff",
      color: "#6C3483",
      border: "1.6px solid #c851a8",
      borderRadius: 14,
      padding: "23px 20px 18px 20px",
      minHeight: 210,
      marginBottom: 8
    }}>
      <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Eyes</h3>
      <ul style={{ paddingLeft: 18 }}>
        <li>
          <strong>Purple Reign Eyeshadow Palette:</strong> 12 stunning shades from soft lavenders to deep plums, featuring both matte and shimmer finishes. Highly pigmented and blendable for versatile looks.
        </li>
        <li style={{ marginTop: 6 }}>
          <strong>Diamond Lash Mascara:</strong> Volumizing and lengthening mascara that creates dramatic lashes without flaking or smudging.
        </li>
      </ul>
    </div>
  );
}

// PUBLIC_INTERFACE
export function LipsCategoryCard() {
  return (
    <div className="luxe-product-category-card" style={{
      flex: "1 1 240px",
      maxWidth: 330,
      background: "#fff",
      color: "#6C3483",
      border: "1.6px solid #c851a8",
      borderRadius: 14,
      padding: "23px 20px 18px 20px",
      minHeight: 210,
      marginBottom: 8
    }}>
      <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Lips</h3>
      <ul style={{ paddingLeft: 18 }}>
        <li>
          <strong>Velvet Matte Lipstick:</strong> Our signature matte lipsticks are made with high-quality, pure ingredients enhanced with natural mineral oils. They add rich pigment while hydrating your lips, keeping them smooth and supple.
        </li>
        <li style={{ marginTop: 6 }}>
          <strong>Glossy Luxe Lip Gloss:</strong> Non-sticky formula that provides high-shine finish with long-lasting wear.
        </li>
      </ul>
    </div>
  );
}

export default ProductCategories;
