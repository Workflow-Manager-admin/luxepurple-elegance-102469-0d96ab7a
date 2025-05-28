import React from "react";

// PUBLIC_INTERFACE
function HeroSection() {
  /** LuxePurple Hero/Banner Section */
  return (
    <section className="hero luxe-hero" id="hero" style={{
      background: "linear-gradient(90deg, #6C3483 0%, #edb6e3 100%)",
      color: "#fff",
      borderRadius: 24,
      padding: "56px 32px 48px 32px",
      margin: "32px 0",
      textAlign: "center",
      boxShadow: "0 10px 32px rgba(108,52,131,0.07)"
    }}>
      <div className="luxe-tagline" style={{
        fontWeight: 600,
        fontSize: 18,
        color: "#edb6e3",
        marginBottom: 10,
        fontFamily: "Barlow, Arial, sans-serif",
        letterSpacing: "0.08em"
      }}>
        Unleash Your Royal Beauty
      </div>
      <h1 className="luxe-hero-title" style={{
        fontFamily: "Georgia, serif",
        fontSize: 40,
        fontWeight: 700,
        margin: "12px 0"
      }}>
        Transform Your Beauty Ritual with Royal Elegance
      </h1>
      <div className="luxe-hero-subheading" style={{
        color: "#faf0fa",
        fontSize: 19,
        marginBottom: 30,
        fontWeight: 400,
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        Premium cosmetics infused with luxury ingredients for the modern woman who demands excellence
      </div>
      <div style={{
        display: "flex",
        gap: 20,
        justifyContent: "center",
        margin: "32px 0 0 0"
      }}>
        <a
          href="#featured-collections"
          className="btn btn-large luxe-cta"
          style={{
            background: "#6C3483",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            letterSpacing: ".05em",
            boxShadow: "0 2px 10px rgba(108,52,131,0.08)"
          }}
        >Shop Royal Collection</a>
        <a
          href="#collections"
          className="btn btn-large luxe-cta-alt"
          style={{
            background: "#edb6e3",
            color: "#6C3483",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            letterSpacing: ".05em"
          }}
        >Discover Your Shade</a>
      </div>
    </section>
  );
}

export default HeroSection;
