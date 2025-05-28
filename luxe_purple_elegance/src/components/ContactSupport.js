import React from "react";

// PUBLIC_INTERFACE
function ContactSupport() {
  /** LuxePurple Contact & Support Section */
  return (
    <section id="contact" className="luxe-contact" style={{
      background: "#f6effa",
      borderRadius: 15,
      padding: "36px 25px 24px 25px",
      margin: "44px 0 34px 0"
    }}>
      <h2 style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 12
      }}>Contact & Support</h2>
      <div className="luxe-contact-info" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 36
      }}>
        <div style={{ minWidth: 200, flex: 1 }}>
          <h4 style={{
            color: "#c851a8",
            marginBottom: 7,
            fontWeight: 600
          }}>Customer Service</h4>
          <div style={{ fontSize: 15, color: "#6C3483" }}>
            <div><b>Email:</b> hello@luxepurple.com</div>
            <div><b>Phone:</b> 1-800-LUXE-PURPLE</div>
            <div><b>Live Chat:</b> Available 9 AM - 7 PM EST</div>
            <div><b>Social:</b> @LuxePurpleCosmetics</div>
          </div>
        </div>
        <div style={{ minWidth: 220, flex: 2 }}>
          <h4 style={{
            color: "#c851a8",
            marginBottom: 7,
            fontWeight: 600
          }}>Service Hours</h4>
          <div style={{ fontSize: 15, color: "#6C3483" }}>
            <div><b>Monday-Friday:</b> 9 AM - 7 PM EST</div>
            <div><b>Saturday:</b> 10 AM - 6 PM EST</div>
            <div><b>Sunday:</b> 12 PM - 5 PM EST</div>
            <div style={{ marginTop: 14, fontWeight: 500 }}>
              <span style={{ color: "#6C3483" }}>Support For:</span>
              <ul style={{
                margin: "4px 0 0 14px",
                color: "#3f2050"
              }}>
                <li>Order Status & Tracking</li>
                <li>Returns & Exchanges</li>
                <li>Product Information</li>
                <li>Shade Matching Consultation</li>
                <li>Bulk Orders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSupport;
