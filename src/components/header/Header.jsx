import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }

    const sections = document.querySelectorAll("section");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active section state
    setActiveSection(currentSection);

    // Update URL hash if it changes
    if (currentSection && window.location.hash !== `#${currentSection}`) {
      window.history.replaceState(null, "", `#${currentSection}`);
    }
  };

  // Debounce handleScroll to improve performance
  const debouncedHandleScroll = _.debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("hashchange", () => {
      setActiveSection(window.location.hash.slice(1));
    });

    // Initialize the active section
    setActiveSection(window.location.hash.slice(1));
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("hashchange", () => {
        setActiveSection(window.location.hash.slice(1));
      });
    };
  }, []);

  return (
    <header className={`header ${hasScrolled ? "scrolled" : ""}`}>
      <nav className="nav container">
        <span className="nav__logo">
          <strong>Teddy</strong>
        </span>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li
              className={`nav__item relative group ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <a
                href="#about"
                className="nav__link flex items-center relative group"
              >
                <i className="uil uil-user nav__icon mr-2"></i>
                About
                <span
                  className={`group-hover:scale-x-100 absolute bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-1/2 md:w-full h-[2px] rounded-full bg-current transform scale-x-0 transition-transform duration-300 ${
                    activeSection === "about" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </a>
            </li>

            <li
              className={`nav__item relative group ${
                activeSection === "skills" ? "active" : ""
              }`}
            >
              <a
                href="#skills"
                className="nav__link flex items-center relative group"
              >
                <i className="uil uil-file-alt nav__icon mr-2"></i>
                Skills
                <span
                  className={`group-hover:scale-x-100 absolute bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-1/2 md:w-full h-[2px] rounded-full bg-current transform scale-x-0 transition-transform duration-300 ${
                    activeSection === "skills" ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </a>
            </li>

            <li
              className={`nav__item relative group ${
                activeSection === "qualification" ? "active" : ""
              }`}
            >
              <a href="#qualification" className="nav__link flex items-center">
                <i className="uil uil-graduation-cap nav__icon mr-2"></i>
                Qualification
                <span
                  className={`group-hover:scale-x-100 absolute bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-1/2 md:w-full h-[2px] rounded-full bg-current transform scale-x-0 transition-transform duration-300 ${
                    activeSection === "qualification" ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            </li>

            <li
              className={`nav__item relative group ${
                activeSection === "portfolio" ? "active" : ""
              }`}
            >
              <a href="#portfolio" className="nav__link flex items-center">
                <i className="uil uil-scenery nav__icon mr-2"></i>
                Portfolio
                <span
                  className={`group-hover:scale-x-100 absolute bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-1/2 md:w-full h-[2px] rounded-full bg-current transform scale-x-0 transition-transform duration-300 ${
                    activeSection === "portfolio" ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            </li>

            <li
              className={`nav__item relative group ${
                activeSection === "contact" ? "active" : ""
              }`}
            >
              <a href="#contact" className="nav__link flex items-center">
                <i className="uil uil-message nav__icon mr-2"></i>
                Contact
                <span
                  className={`group-hover:scale-x-100 absolute bottom-0 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0 w-1/2 md:w-full h-[2px] rounded-full bg-current transform scale-x-0 transition-transform duration-300 ${
                    activeSection === "contact" ? "scale-x-100" : ""
                  }`}
                ></span>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close pr-[0.4rem]"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div
          className="nav__toggle pr-[3.4rem]"
          onClick={() => showMenu(!Toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
