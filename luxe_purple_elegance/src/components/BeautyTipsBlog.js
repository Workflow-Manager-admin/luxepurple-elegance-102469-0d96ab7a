import React from "react";

// PUBLIC_INTERFACE
function BeautyTipsBlog() {
  /** LuxePurple Beauty Tips & Blog Section */
  const blogTips = [
    {
      tip: "How to Create the Perfect Purple Smoky Eye",
      img:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      tip: "Foundation Matching Guide for Your Skin Tone",
      img:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80",
    },
    {
      tip: "5 Ways to Incorporate Purple into Your Daily Look",
      img:
        "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    },
    {
      tip: "Skincare Prep for Long-Lasting Makeup",
      img:
        "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section
      id="beauty-tips"
      className="luxe-beauty-tips"
      style={{
        margin: "64px 0 42px 0",
        padding: "36px 2vw 48px 2vw",
        background: "linear-gradient(104deg, #6C3483 60%, #edb6e3 130%)",
        borderRadius: "22px",
        boxShadow: "0px 12px 44px 2px #edb6e310",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <h2
        className="luxe-section-title"
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 27,
          marginBottom: 18,
          textShadow: "0 3px 19px #6c348388, 0 1.5px 8px #fff8"
        }}
      >
        Luxe Beauty Tips & Blog
      </h2>
      <div
        className="luxe-blog-list"
        style={{
          display: "flex",
          gap: 30,
          flexWrap: "wrap",
          justifyContent: "center",
          zIndex: 2,
          position: "relative"
        }}
      >
        {blogTips.map((post) => (
          <div
            key={post.tip}
            className="luxe-blog-card"
            style={{
              flex: "1 1 235px",
              minWidth: 225,
              maxWidth: 310,
              background: "#fff",
              color: "#6C3483",
              padding: 0,
              marginBottom: 14,
              borderRadius: 14,
              border: "1.6px solid #edb6e3",
              fontWeight: 500,
              textAlign: "center",
              fontSize: 17,
              boxShadow: "0 2.5px 14px #c851a82e",
              overflow: "hidden",
            }}
          >
            <img
              src={post.img}
              alt={post.tip}
              style={{
                width: "100%",
                height: "133px",
                objectFit: "cover",
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                borderBottom: "1px solid #edb6e3",
              }}
            />
            <div style={{ padding: "17px 11px 17px 11px", minHeight: 48 }}>
              {post.tip}
            </div>
          </div>
        ))}
      </div>
      {/* Visually rich lateral background images */}
      <div
        style={{
          position: "absolute",
          left: "-4vw",
          bottom: "8%",
          width: "175px",
          height: "170px",
          background:
            "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=350&q=80') center/cover no-repeat",
          opacity: 0.12,
          borderRadius: "45%",
          filter: "blur(3.5px)"
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          right: "-3vw",
          top: "0",
          width: "136px",
          height: "158px",
          background:
            "url('https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=350&q=80') center/cover no-repeat",
          opacity: 0.14,
          borderRadius: "50%",
          filter: "blur(1.8px)"
        }}
        aria-hidden="true"
      />
    </section>
  );
}

export default BeautyTipsBlog;
