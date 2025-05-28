import React from "react";

// PUBLIC_INTERFACE
function ProductFeatures() {
  /** LuxePurple Product Feature pills display */
  const features = [
    "Cruelty-free and vegan formulations",
    "Dermatologically tested",
    "Long-wearing formulas",
    "Inclusive shade range (40+ foundation shades)",
    "Sustainable packaging",
    "Professional-grade quality"
  ];
  return (
    <div className="luxe-features" style={{ textAlign: "center", marginTop: 36 }}>
      <div style={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 24,
        background: "#edb6e3",
        color: "#6C3483",
        fontWeight: 500,
        fontSize: 15,
        borderRadius: 18,
        padding: "18px 28px"
      }}>
        {features.map((feat) => (
          <span className="luxe-feature-pill" key={feat} style={{
            margin: "4px 10px",
            padding: "8px 12px",
            borderRadius: 8,
            background: "#fff",
            color: "#6C3483",
            boxShadow: "0 1px 5px rgba(200,81,168,0.12)",
          }}>
            {feat}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProductFeatures;
