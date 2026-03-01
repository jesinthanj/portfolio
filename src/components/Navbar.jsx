import { useState } from "react";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar({ activeNav, scrolled, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (link) => {
    onNavigate(link);
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <button className="nav__logo" onClick={() => handleNavigate("about")}>
          Dia! Duit conas atá tú?
        </button>

        {/* Desktop links */}
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav__link ${activeNav === link ? "nav__link--active" : ""}`}
                onClick={() => handleNavigate(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          className={`nav__hamburger ${menuOpen ? "nav__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          <ul className="nav__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  className={`nav__mobile-link ${activeNav === link ? "nav__mobile-link--active" : ""}`}
                  onClick={() => handleNavigate(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
