import React from 'react';
import './App.css';

import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import FeaturedCollections from "./components/FeaturedCollections";
import AboutUs from "./components/AboutUs";
import ProductCategories from "./components/ProductCategories";
import ProductFeatures from "./components/ProductFeatures";
import Testimonials from "./components/Testimonials";
import BeautyTipsBlog from "./components/BeautyTipsBlog";
import Sustainability from "./components/Sustainability";
import LoyaltyProgram from "./components/LoyaltyProgram";
import ContactSupport from "./components/ContactSupport";

function App() {
  return (
    <div
      className="app luxe-purple-elegance-app"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(125deg, #352146 0%, #6C3483 65%, #edb6e3 180%) fixed",
        backgroundAttachment: "fixed",
        color: "#fff",
        transition: "background 0.5s",
      }}
    >
      <NavigationBar />
      <main className="luxe-main-content" style={{ marginTop: 96, paddingBottom: 36 }}>
        <div className="container">
          <HeroSection />
          <FeaturedCollections />
          <AboutUs />
          <ProductCategories />
          <ProductFeatures />
          <Testimonials />
          <Sustainability />
          <LoyaltyProgram />
          <BeautyTipsBlog />
          <ContactSupport />
        </div>
      </main>
      <footer
        className="luxe-footer"
        style={{
          textAlign: "center",
          padding: "20px 0",
          background: "linear-gradient(90deg, #6C3483 80%, #c851a8 120%)",
          color: "#fff",
          fontSize: 16,
          fontFamily: "Georgia, serif",
          borderTop: "2px solid #c851a8",
          letterSpacing: ".045em",
          boxShadow: "0 -2px 26px #edb6e37a",
        }}
      >
        <span>
          &copy; {new Date().getFullYear()} LuxePurple Cosmetics. Unleash Your Royal Beauty.
        </span>
      </footer>
    </div>
  );
}

export default App;