import React from "react";

// PUBLIC_INTERFACE
function Sustainability() {
  /** Sustainability Commitment Section */
  return (
    <section id="sustainability" className="luxe-sustainability" style={{
      margin: "60px 0 26px 0",
      background: "#f6effa",
      borderRadius: 15,
      padding: "32px 27px"
    }}>
      <h2 style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 10
      }}>Our Sustainability Commitment</h2>
      <div style={{
        fontSize: 17,
        color: "#3f2050",
        fontWeight: 500
      }}>
        We're committed to sustainable beauty practices with recyclable packaging, responsibly sourced ingredients, and carbon-neutral shipping options.
      </div>
    </section>
  );
}

export default Sustainability;
