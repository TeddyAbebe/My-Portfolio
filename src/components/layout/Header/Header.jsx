import React, { useEffect, useState } from "react";
import _ from "lodash";
import ThemeToggle from "../../ui/ThemeToggle";
import "./Header.css";

const NAV_LINKS = [
  { id: "about", label: "About", icon: "uil-user" },
  { id: "skills", label: "Skills", icon: "uil-file-alt" },
  { id: "qualification", label: "Experience", icon: "uil-briefcase-alt" },
  { id: "portfolio", label: "Projects", icon: "uil-scenery" },
  { id: "contact", label: "Contact", icon: "uil-message" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    window.location.hash.slice(1)
  );

  useEffect(() => {
    const handleScroll = _.debounce(() => {
      let currentSection = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 80) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

      if (currentSection && window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    }, 100);

    const handleHashChange = () =>
      setActiveSection(window.location.hash.slice(1));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Teddy<span className="nav__logo-dot">.</span>
        </a>

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">
            {NAV_LINKS.map(({ id, label, icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${
                    activeSection === id ? "nav__link--active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`uil ${icon} nav__icon`}></i>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav__close"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="nav__actions">
          <ThemeToggle />
          <button
            type="button"
            className="nav__toggle"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="uil uil-apps"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
