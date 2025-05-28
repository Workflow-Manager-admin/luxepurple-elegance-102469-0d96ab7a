import React from "react";

// PUBLIC_INTERFACE
function NavigationBar() {
  /** LuxePurple Navigation Bar */
  const navItems = [
    "Shop All",
    "New Arrivals",
    "Face",
    "Eyes",
    "Lips",
    "Brushes & Tools",
    "Gift Sets",
    "About Us",
    "Beauty Tips",
    "Contact",
  ];

  return (
    <nav className="navbar luxe-navbar" style={{
      backgroundColor: "#6C3483",
      borderBottom: "2px solid #c851a8",
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{
          color: "#fff",
          fontFamily: "Georgia, serif"
        }}>
          <span className="logo-symbol" style={{
            color: "#edb6e3",
            fontWeight: 700,
            fontSize: 32,
            marginRight: 8
          }}>♛</span>
          LuxePurple <span style={{
            color: "#c851a8",
            fontWeight: 400,
            fontSize: 22
          }}>Cosmetics</span>
        </div>
        <ul className="main-nav luxe-nav-menu" style={{
          listStyle: "none",
          display: 'flex',
          gap: 30,
          margin: 0,
          padding: 0
        }}>
          {navItems.map((item) => (
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
  );
}

export default NavigationBar;
