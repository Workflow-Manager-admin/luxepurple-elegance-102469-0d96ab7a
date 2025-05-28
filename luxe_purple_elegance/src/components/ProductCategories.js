import React from "react";

/** 
 * PUBLIC_INTERFACE
 */
export function ProductCategories() {
  // LuxePurple Product Categories main section, now enhanced
  return (
    <section
      id="collections"
      className="luxe-product-categories"
      style={{
        margin: "72px 0 50px 0",
        padding: "34px 2vw 38px 2vw",
        background: "linear-gradient(110deg, #432160 0%, #6C3483 70%, #c851a8 130%)",
        borderRadius: 21,
        boxShadow: "0px 14px 48px 6px #3e205512, 0 2px 12px #c851a833",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <h2
        className="luxe-section-title"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 30,
          marginBottom: 28,
          letterSpacing: ".04em",
          textShadow: "0 3px 19px #6c348380, 0 2px 9px #fff8",
          zIndex: 2,
        }}
      >
        Explore Our Categories
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 38,
          justifyContent: "center",
          marginBottom: 18,
          zIndex: 3,
          position: "relative",
        }}
      >
        <FaceCategoryCard />
        <EyesCategoryCard />
        <LipsCategoryCard />
      </div>
      {/* Decorative, soft edge background images filling side margins */}
      <div
        style={{
          position: "absolute",
          left: "-3vw",
          top: "26%",
          width: "170px",
          height: "170px",
          background:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=350&q=80') center/cover no-repeat",
          opacity: 0.13,
          borderRadius: "50%",
          filter: "blur(1px)"
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          right: "-3.2vw",
          bottom: "19%",
          width: "150px",
          height: "170px",
          background:
            "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=350&q=80') center/cover no-repeat",
          opacity: 0.12,
          borderRadius: "45%",
          filter: "blur(2px)"
        }}
        aria-hidden="true"
      />
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
