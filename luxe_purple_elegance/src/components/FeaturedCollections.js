import React from "react";

// PUBLIC_INTERFACE
function FeaturedCollections() {
  /** LuxePurple Featured Collections */
  const collections = [
    "Royal Purple Collection",
    "Shimmer & Glow Series",
    "Everyday Elegance Line",
    "Limited Edition Amethyst Range",
  ];
  return (
    <section id="featured-collections" className="luxe-featured-collections" style={{ margin: "52px 0 38px 0" }}>
      <h2 className="luxe-section-title" style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 30,
        marginBottom: 22,
        letterSpacing: ".03em"
      }}>
        Featured Collections
      </h2>
      <div className="luxe-collections-grid" style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center" }}>
        {collections.map((col) => (
          <div key={col} className="luxe-collection-card" style={{
            flex: "1 1 220px",
            minWidth: 220,
            maxWidth: 290,
            background: "#fff",
            color: "#6C3483",
            padding: 22,
            marginBottom: 16,
            borderRadius: 14,
            border: "1.5px solid #edb6e3",
            boxShadow: "0 2px 8px rgba(200,81,168,.03)",
            fontWeight: 600,
            textAlign: 'center',
            fontSize: 19
          }}>{col}</div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;
