import React from "react";

// PUBLIC_INTERFACE
function BeautyTipsBlog() {
  /** LuxePurple Beauty Tips & Blog Section */
  const tips = [
    "How to Create the Perfect Purple Smoky Eye",
    "Foundation Matching Guide for Your Skin Tone",
    "5 Ways to Incorporate Purple into Your Daily Look",
    "Skincare Prep for Long-Lasting Makeup"
  ];

  return (
    <section id="beauty-tips" className="luxe-beauty-tips" style={{
      margin: "50px 0"
    }}>
      <h2 className="luxe-section-title" style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 26,
        marginBottom: 15
      }}>
        Luxe Beauty Tips & Blog
      </h2>
      <div className="luxe-blog-list" style={{
        display: "flex",
        gap: 24,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {tips.map((tip) => (
          <div
            key={tip}
            className="luxe-blog-card"
            style={{
              flex: "1 1 220px",
              minWidth: 220,
              maxWidth: 300,
              background: "#fff",
              color: "#6C3483",
              padding: "20px 18px",
              marginBottom: 12,
              borderRadius: 12,
              border: "1.5px solid #edb6e3",
              fontWeight: 500,
              textAlign: "center",
              fontSize: 17,
              boxShadow: "0 2px 10px rgba(200,81,168,.03)"
            }}
          >
            {tip}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BeautyTipsBlog;
