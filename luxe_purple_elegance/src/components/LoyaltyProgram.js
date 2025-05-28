import React from "react";

// PUBLIC_INTERFACE
function LoyaltyProgram() {
  /** Royal Rewards Loyalty Program Section */
  return (
    <section id="loyalty" className="luxe-loyalty" style={{
      margin: "46px 0 16px 0",
      background: "#fff",
      border: "2px dashed #c851a8",
      padding: "32px 27px",
      borderRadius: 13,
      textAlign: "center"
    }}>
      <h2 style={{
        color: "#c851a8",
        fontWeight: 700,
        fontSize: 22,
        marginBottom: 8
      }}>Royal Rewards</h2>
      <div style={{
        fontFamily: "Barlow, Arial, sans-serif",
        fontWeight: 500,
        color: "#6C3483",
        fontSize: 17
      }}>
        Join our Royal Rewards program and earn points with every purchase. Enjoy exclusive previews, birthday gifts, and special member pricing.
      </div>
    </section>
  );
}

export default LoyaltyProgram;
