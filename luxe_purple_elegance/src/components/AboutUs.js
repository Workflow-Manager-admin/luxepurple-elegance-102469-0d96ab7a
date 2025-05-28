import React from "react";

// PUBLIC_INTERFACE
function AboutUs() {
  /** LuxePurple About Us / Mission */
  return (
    <section id="about-us" className="luxe-about" style={{
      margin: "56px 0 42px 0",
      padding: "28px 24px",
      background: "#faf6fd",
      borderRadius: 18,
      boxShadow: "0 2px 12px rgba(108,52,131,0.05)"
    }}>
      <h2 style={{
        color: "#c851a8",
        fontWeight: 600,
        fontSize: 28,
        marginBottom: 8
      }}>About LuxePurple</h2>
      <div className="luxe-about-story" style={{
        fontSize: 18,
        color: "#3f2050",
        marginBottom: 14
      }}>
        Founded in 2020, LuxePurple Cosmetics was born from a passion to create luxurious beauty products that celebrate every woman's unique radiance. We believe beauty is a form of self-expression that should be accessible, inclusive, and empowering. Our signature purple-infused packaging reflects our commitment to royalty, creativity, and sophistication that every woman deserves. Our products combine cutting-edge formulations with premium ingredients sourced globally, ensuring each product delivers exceptional results while being kind to your skin. We celebrate diversity in our color palettes, with each shade carefully curated for various skin tones that complement and highlight your unique features.
      </div>
      <div className="luxe-about-mission" style={{
        fontWeight: 500,
        color: "#6C3483",
        fontStyle: "italic",
        fontSize: 16
      }}>
        <b>Our Mission:</b> To inspire confidence and celebrate individuality through innovative, high-quality cosmetics that make every woman feel like royalty.
      </div>
    </section>
  );
}

export default AboutUs;
