import React from 'react';
import './App.css';

/*
  LuxePurple Elegance Main Container
  All sections use clear classNames and structure for ease of future styling/componentization. 
  Color palette (for reference in future CSS):
    --primary: #6C3483
    --secondary: #c851a8
    --accent: #edb6e3
*/

function App() {
  return (
    <div className="app luxe-purple-elegance-app" style={{ minHeight: "100vh", background: "#f8f5fa" }}>
      {/* Navigation Bar */}
      <nav
        className="navbar luxe-navbar"
        style={{
          backgroundColor: "#6C3483",
          borderBottom: "2px solid #c851a8"
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Branding */}
          <div className="logo" style={{ color: "#fff", fontFamily: "Georgia, serif" }}>
            <span className="logo-symbol" style={{ color: "#edb6e3", fontWeight: 700, fontSize: 32, marginRight: 8 }}>♛</span>
            LuxePurple <span style={{ color: "#c851a8", fontWeight: 400, fontSize: 22 }}>Cosmetics</span>
          </div>
          {/* Navigation Menu */}
          <ul className="main-nav luxe-nav-menu" style={{ listStyle: "none", display: 'flex', gap: 30, margin: 0, padding: 0 }}>
            {[
              "Shop All", "New Arrivals", "Face", "Eyes", "Lips", "Brushes & Tools",
              "Gift Sets", "About Us", "Beauty Tips", "Contact"
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/ /g, '-').toLowerCase()}`}
                  className="luxe-nav-link"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: item === "Shop All" ? 700 : 400,
                    fontSize: 16,
                    letterSpacing: "0.02em"
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="luxe-main-content" style={{ marginTop: 96, paddingBottom: 36 }}>
        <div className="container">
          {/* HERO / Banner */}
          <section className="hero luxe-hero" style={{
            background: "linear-gradient(90deg, #6C3483 0%, #edb6e3 100%)",
            color: "#fff",
            borderRadius: 24,
            padding: "56px 32px 48px 32px",
            margin: "32px 0",
            textAlign: "center",
            boxShadow: "0 10px 32px rgba(108,52,131,.07)"
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
            <div style={{ display: "flex", gap: 20, justifyContent: "center", margin: "32px 0 0 0" }}>
              <a href="#featured-collections" className="btn btn-large luxe-cta" style={{
                background: "#6C3483",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                letterSpacing: ".05em",
                boxShadow: "0 2px 10px rgba(108,52,131,0.08)"
              }}>Shop Royal Collection</a>
              <a href="#collections" className="btn btn-large luxe-cta-alt" style={{
                background: "#edb6e3",
                color: "#6C3483",
                border: "none",
                borderRadius: 6,
                fontWeight: 600,
                letterSpacing: ".05em"
              }}>Discover Your Shade</a>
            </div>
          </section>

          {/* FEATURED COLLECTIONS */}
          <section id="featured-collections" className="luxe-featured-collections" style={{ margin: "52px 0 38px 0" }}>
            <h2 className="luxe-section-title" style={{ color: "#6C3483", fontWeight: 700, fontSize: 30, marginBottom: 22, letterSpacing: '.03em' }}>
              Featured Collections
            </h2>
            <div className="luxe-collections-grid" style={{
              display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center"
            }}>
              {[
                'Royal Purple Collection',
                'Shimmer & Glow Series',
                'Everyday Elegance Line',
                'Limited Edition Amethyst Range'
              ].map((col) => (
                <div key={col} className="luxe-collection-card" style={{
                  flex: "1 1 220px",
                  minWidth: 220,
                  maxWidth: 290,
                  background: "#fff",
                  color: "#6C3483",
                  padding: 22,
                  marginBottom: 16,
                  borderRadius: 14,
                  border: "1.5px solid #edb6e3",
                  boxShadow: "0 2px 8px rgba(200,81,168,.03)",
                  fontWeight: 600,
                  textAlign: 'center',
                  fontSize: 19
                }}>{col}</div>
              ))}
            </div>
          </section>

          {/* ABOUT US / MISSION */}
          <section id="about-us" className="luxe-about" style={{
            margin: "56px 0 42px 0", padding: "28px 24px", background: "#faf6fd",
            borderRadius: 18,
            boxShadow: "0 2px 12px rgba(108,52,131,0.05)"
          }}>
            <h2 style={{ color: "#c851a8", fontWeight: 600, fontSize: 28, marginBottom: 8 }}>
              About LuxePurple
            </h2>
            <div className="luxe-about-story" style={{ fontSize: 18, color: "#3f2050", marginBottom: 14 }}>
              Founded in 2020, LuxePurple Cosmetics was born from a passion to create luxurious beauty products that celebrate every woman's unique radiance. We believe beauty is a form of self-expression that should be accessible, inclusive, and empowering. Our signature purple-infused packaging reflects our commitment to royalty, creativity, and sophistication that every woman deserves. Our products combine cutting-edge formulations with premium ingredients sourced globally, ensuring each product delivers exceptional results while being kind to your skin. We celebrate diversity in our color palettes, with each shade carefully curated for various skin tones that complement and highlight your unique features.
            </div>
            <div className="luxe-about-mission" style={{ fontWeight: 500, color: "#6C3483", fontStyle: "italic", fontSize: 16 }}>
              <b>Our Mission:</b> To inspire confidence and celebrate individuality through innovative, high-quality cosmetics that make every woman feel like royalty.
            </div>
          </section>

          {/* PRODUCT CATEGORIES AND FEATURE HIGHLIGHTS */}
          <section id="collections" className="luxe-product-categories" style={{ margin: "55px 0" }}>
            <h2 className="luxe-section-title" style={{ color: "#6C3483", fontWeight: 700, fontSize: 28, marginBottom: 24, letterSpacing: ".03em" }}>
              Explore Our Categories
            </h2>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center",
              marginBottom: 18
            }}>
              {/* Face */}
              <div className="luxe-product-category-card" style={{
                flex: "1 1 240px",
                maxWidth: 330,
                background: "#fff",
                color: "#6C3483",
                border: "1.6px solid #c851a8",
                borderRadius: 14,
                padding: "23px 20px 18px 20px",
                minHeight: 210,
                marginBottom: 8
              }}>
                <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Face</h3>
                <ul style={{ paddingLeft: 18 }}>
                  <li>
                    <strong>Royal Foundation:</strong> Our signature liquid foundation provides medium to full coverage with a luminous finish. Infused with hyaluronic acid and vitamin E, it keeps skin hydrated for 24 hours while creating a flawless complexion.
                  </li>
                  <li style={{ marginTop: 6 }}>
                    <strong>Amethyst Concealer:</strong> A lightweight, buildable concealer that brightens dark circles and covers imperfections without creasing. Available in 20 inclusive shades.
                  </li>
                </ul>
              </div>
              {/* Eyes */}
              <div className="luxe-product-category-card" style={{
                flex: "1 1 240px",
                maxWidth: 330,
                background: "#fff",
                color: "#6C3483",
                border: "1.6px solid #c851a8",
                borderRadius: 14,
                padding: "23px 20px 18px 20px",
                minHeight: 210,
                marginBottom: 8
              }}>
                <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Eyes</h3>
                <ul style={{ paddingLeft: 18 }}>
                  <li>
                    <strong>Purple Reign Eyeshadow Palette:</strong> 12 stunning shades from soft lavenders to deep plums, featuring both matte and shimmer finishes. Highly pigmented and blendable for versatile looks.
                  </li>
                  <li style={{ marginTop: 6 }}>
                    <strong>Diamond Lash Mascara:</strong> Volumizing and lengthening mascara that creates dramatic lashes without flaking or smudging.
                  </li>
                </ul>
              </div>
              {/* Lips */}
              <div className="luxe-product-category-card" style={{
                flex: "1 1 240px",
                maxWidth: 330,
                background: "#fff",
                color: "#6C3483",
                border: "1.6px solid #c851a8",
                borderRadius: 14,
                padding: "23px 20px 18px 20px",
                minHeight: 210,
                marginBottom: 8
              }}>
                <h3 style={{ fontWeight: 700, color: "#c851a8", fontSize: 22, marginBottom: 8 }}>Lips</h3>
                <ul style={{ paddingLeft: 18 }}>
                  <li>
                    <strong>Velvet Matte Lipstick:</strong> Our signature matte lipsticks are made with high-quality, pure ingredients enhanced with natural mineral oils. They add rich pigment while hydrating your lips, keeping them smooth and supple.
                  </li>
                  <li style={{ marginTop: 6 }}>
                    <strong>Glossy Luxe Lip Gloss:</strong> Non-sticky formula that provides high-shine finish with long-lasting wear.
                  </li>
                </ul>
              </div>
            </div>
            {/* Product Features */}
            <div className="luxe-features" style={{ textAlign: "center", marginTop: 36 }}>
              <div style={{
                display: "inline-flex", flexWrap: "wrap", justifyContent: "center",
                gap: 24,
                background: "#edb6e3",
                color: "#6C3483",
                fontWeight: 500,
                fontSize: 15,
                borderRadius: 18,
                padding: "18px 28px"
              }}>
                {[
                  "Cruelty-free and vegan formulations",
                  "Dermatologically tested",
                  "Long-wearing formulas",
                  "Inclusive shade range (40+ foundation shades)",
                  "Sustainable packaging",
                  "Professional-grade quality"
                ].map((feat) => (
                  <span className="luxe-feature-pill" key={feat} style={{
                    margin: "4px 10px",
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    color: "#6C3483",
                    boxShadow: "0 1px 5px rgba(200,81,168,0.12)",
                  }}>{feat}</span>
                ))}
              </div>
            </div>
          </section>

          {/* CUSTOMER TESTIMONIALS */}
          <section id="testimonials" className="luxe-testimonials" style={{ margin: "68px 0 30px 0", textAlign: "center" }}>
            <h2 className="luxe-section-title" style={{ color: "#6C3483", fontWeight: 700, fontSize: 28, marginBottom: 26 }}>
              What Our Customers Say
            </h2>
            <div className="luxe-testimonial-list" style={{
              display: "flex",
              flexWrap: 'wrap',
              justifyContent: "center",
              gap: 34,
              marginTop: 8
            }}>
              {[
                {
                  review: "LuxePurple's foundation has transformed my daily routine. The coverage is flawless and it lasts all day without feeling heavy on my skin.",
                  author: "Sarah M., Verified Buyer"
                },
                {
                  review: "I've been searching for the perfect purple eyeshadow palette, and this exceeded all expectations. The colors are so pigmented and blend beautifully.",
                  author: "Maya K., Beauty Enthusiast"
                }
              ].map((t, i) => (
                <blockquote
                  className="luxe-testimonial-card"
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 16,
                    border: "2px solid #edb6e3",
                    padding: "26px 30px",
                    maxWidth: 370,
                    minWidth: 220,
                    fontStyle: "italic",
                    color: "#6C3483",
                    boxShadow: "0 2px 10px rgba(108,52,131,0.05)",
                  }}
                >
                  <span style={{ fontSize: 17, fontWeight: 500 }}>"{t.review}"</span>
                  <footer style={{ marginTop: 14, color: "#c851a8", fontWeight: 600 }}>
                    {t.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* SUSTAINABILITY */}
          <section id="sustainability" className="luxe-sustainability" style={{
            margin: "60px 0 26px 0",
            background: "#f6effa",
            borderRadius: 15,
            padding: "32px 27px"
          }}>
            <h2 style={{ color: "#6C3483", fontWeight: 700, fontSize: 24, marginBottom: 10 }}>Our Sustainability Commitment</h2>
            <div style={{ fontSize: 17, color: "#3f2050", fontWeight: 500 }}>
              We're committed to sustainable beauty practices with recyclable packaging, responsibly sourced ingredients, and carbon-neutral shipping options.
            </div>
          </section>

          {/* LOYALTY PROGRAM */}
          <section id="loyalty" className="luxe-loyalty" style={{
            margin: "46px 0 16px 0",
            background: "#fff",
            border: "2px dashed #c851a8",
            padding: "32px 27px",
            borderRadius: 13,
            textAlign: "center"
          }}>
            <h2 style={{ color: "#c851a8", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Royal Rewards</h2>
            <div style={{
              fontFamily: "Barlow, Arial, sans-serif",
              fontWeight: 500,
              color: "#6C3483",
              fontSize: 17
            }}>
              Join our Royal Rewards program and earn points with every purchase. Enjoy exclusive previews, birthday gifts, and special member pricing.
            </div>
          </section>

          {/* BEAUTY TIPS & BLOG */}
          <section id="beauty-tips" className="luxe-beauty-tips" style={{ margin: "50px 0", }}>
            <h2 className="luxe-section-title" style={{ color: "#6C3483", fontWeight: 700, fontSize: 26, marginBottom: 15 }}>
              Luxe Beauty Tips & Blog
            </h2>
            <div className="luxe-blog-list" style={{
              display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center"
            }}>
              {[
                'How to Create the Perfect Purple Smoky Eye',
                'Foundation Matching Guide for Your Skin Tone',
                '5 Ways to Incorporate Purple into Your Daily Look',
                'Skincare Prep for Long-Lasting Makeup'
              ].map((tip) => (
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

          {/* CONTACT & SUPPORT */}
          <section id="contact" className="luxe-contact" style={{
            background: "#f6effa",
            borderRadius: 15,
            padding: "36px 25px 24px 25px",
            margin: "44px 0 34px 0"
          }}>
            <h2 style={{ color: "#6C3483", fontWeight: 700, fontSize: 24, marginBottom: 12 }}>Contact & Support</h2>
            <div className="luxe-contact-info" style={{ display: "flex", flexWrap: "wrap", gap: 36 }}>
              <div style={{ minWidth: 200, flex: 1 }}>
                <h4 style={{ color: "#c851a8", marginBottom: 7, fontWeight: 600 }}>Customer Service</h4>
                <div style={{ fontSize: 15, color: "#6C3483" }}>
                  <div><b>Email:</b> hello@luxepurple.com</div>
                  <div><b>Phone:</b> 1-800-LUXE-PURPLE</div>
                  <div><b>Live Chat:</b> Available 9 AM - 7 PM EST</div>
                  <div><b>Social:</b> @LuxePurpleCosmetics</div>
                </div>
              </div>
              <div style={{ minWidth: 220, flex: 2 }}>
                <h4 style={{ color: "#c851a8", marginBottom: 7, fontWeight: 600 }}>Service Hours</h4>
                <div style={{ fontSize: 15, color: "#6C3483" }}>
                  <div><b>Monday-Friday:</b> 9 AM - 7 PM EST</div>
                  <div><b>Saturday:</b> 10 AM - 6 PM EST</div>
                  <div><b>Sunday:</b> 12 PM - 5 PM EST</div>
                  <div style={{ marginTop: 14, fontWeight: 500 }}>
                    <span style={{ color: "#6C3483" }}>Support For:</span>
                    <ul style={{ margin: "4px 0 0 14px", color: "#3f2050" }}>
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

        </div>
      </main>
      {/* Footer (simple brand tagline) */}
      <footer className="luxe-footer" style={{
        textAlign: "center",
        padding: "20px 0",
        background: "#6C3483",
        color: "#fff",
        fontSize: 16,
        fontFamily: "Georgia, serif",
        borderTop: "2px solid #c851a8"
      }}>
        <span>&copy; {new Date().getFullYear()} LuxePurple Cosmetics. Unleash Your Royal Beauty.</span>
      </footer>
    </div>
  );
}

export default App;