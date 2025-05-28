import React from "react";

/**
 * PUBLIC_INTERFACE
 * LuxePurple Navigation Bar - Glamorous LuxePurple Theme, streamlined menu
 */
function NavigationBar() {
  // Just Home, Shop, About, and Contact
  const navItems = [
    { label: "Home", anchor: "hero" },
    { label: "Shop", anchor: "featured-collections" },
    { label: "About", anchor: "about-us" },
    { label: "Contact", anchor: "contact" },
  ];

  return (
    <nav className="navbar luxe-navbar luxe-glitter-navbar" aria-label="Primary Navigation">
      <div className="container luxe-navbar-container">
        <a href="#hero" className="logo luxe-navbar-logo" aria-label="LuxePurple Cosmetics Home">
          <span className="logo-symbol luxe-logo-glitter">♛</span>
          LuxePurple <span className="logo-sub">Cosmetics</span>
        </a>
        <ul className="main-nav luxe-nav-menu" role="menubar">
          {navItems.map((item) => (
            <li key={item.label} role="none">
              <a
                href={`#${item.anchor}`}
                className="luxe-nav-link"
                tabIndex={0}
                role="menuitem"
                aria-label={item.label}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
