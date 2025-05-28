import React from "react";

// PUBLIC_INTERFACE
function Testimonials() {
  /** LuxePurple Testimonials Section */
  const testimonials = [
    {
      review: "LuxePurple's foundation has transformed my daily routine. The coverage is flawless and it lasts all day without feeling heavy on my skin.",
      author: "Sarah M., Verified Buyer"
    },
    {
      review: "I've been searching for the perfect purple eyeshadow palette, and this exceeded all expectations. The colors are so pigmented and blend beautifully.",
      author: "Maya K., Beauty Enthusiast"
    }
  ];

  return (
    <section id="testimonials" className="luxe-testimonials" style={{
      margin: "68px 0 30px 0",
      textAlign: "center"
    }}>
      <h2 className="luxe-section-title" style={{
        color: "#6C3483",
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 26
      }}>
        What Our Customers Say
      </h2>
      <div className="luxe-testimonial-list" style={{
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "center",
        gap: 34,
        marginTop: 8
      }}>
        {testimonials.map((t, i) => (
          <blockquote className="luxe-testimonial-card" key={i} style={{
            background: "#fff",
            borderRadius: 16,
            border: "2px solid #edb6e3",
            padding: "26px 30px",
            maxWidth: 370,
            minWidth: 220,
            fontStyle: "italic",
            color: "#6C3483",
            boxShadow: "0 2px 10px rgba(108,52,131,0.05)",
          }}>
            <span style={{ fontSize: 17, fontWeight: 500 }}>"{t.review}"</span>
            <footer style={{
              marginTop: 14,
              color: "#c851a8",
              fontWeight: 600
            }}>
              {t.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
