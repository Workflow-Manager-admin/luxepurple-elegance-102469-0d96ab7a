import React from "react";

// PUBLIC_INTERFACE
function FeaturedCollections() {
  /** LuxePurple Featured Collections */
  const collections = [
    {
      name: "Royal Purple Collection",
      img:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80", // Glistening purple-themed portrait
    },
    {
      name: "Shimmer & Glow Series",
      img:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", // Shimmer makeup
    },
    {
      name: "Everyday Elegance Line",
      img:
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=500&q=80", // Elegant daily look
    },
    {
      name: "Limited Edition Amethyst Range",
      img:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80", // Limited edition style
    },
  ];
  return (
    <section
      id="featured-collections"
      className="luxe-featured-collections"
      style={{
        margin: "64px 0 48px 0",
        padding: "36px 2vw 40px 2vw",
        background: "linear-gradient(110deg, #49216b 0%, #6C3483 70%, #c851a8 120%)",
        borderRadius: "22px",
        boxShadow: "0px 14px 48px 6px #3e20550c, 0 2px 12px #6c348330",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <h2
        className="luxe-section-title"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 32,
          marginBottom: 26,
          letterSpacing: ".05em",
          textShadow: "0 3px 27px #6c348390, 0 1.5px 8px #fff7",
          zIndex: 2,
        }}
      >
        Featured Collections
      </h2>
      <div
        className="luxe-collections-grid"
        style={{
          display: "flex",
          gap: 36,
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {collections.map((col) => (
          <div
            key={col.name}
            className="luxe-collection-card"
            style={{
              flex: "1 1 245px",
              minWidth: 240,
              maxWidth: 300,
              background: "rgba(255,255,255,0.93)",
              color: "#6C3483",
              padding: "0 0 19px 0",
              marginBottom: 16,
              borderRadius: 20,
              border: "1.7px solid #edb6e3",
              boxShadow: "0 3px 12px #c851a825, 0 2px 11px #edb6e345",
              fontWeight: 600,
              textAlign: "center",
              fontSize: 20,
              overflow: "hidden",
              position: "relative",
              transition: "box-shadow 0.23s, transform 0.23s",
            }}
          >
            <img
              src={col.img}
              alt={col.name}
              style={{
                width: "100%",
                height: "170px",
                objectFit: "cover",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottom: "1px solid #edb6e3",
                marginBottom: 9
              }}
            />
            <div style={{ padding: "0 13px", minHeight: 40 }}>{col.name}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: "-4vw",
          top: "40%",
          width: "210px",
          height: "230px",
          background:
            "url('https://images.unsplash.com/photo-1516707891285-85c4dbe77649?auto=format&fit=crop&w=400&q=80') center/cover no-repeat",
          opacity: 0.20,
          borderRadius: "60%",
          filter: "blur(2px)"
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          right: "-5vw",
          top: "23%",
          width: "210px",
          height: "230px",
          background:
            "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80') center/cover no-repeat",
          opacity: 0.16,
          borderRadius: "50%",
          filter: "blur(4px)"
        }}
        aria-hidden="true"
      />
    </section>
  );
}

export default FeaturedCollections;
