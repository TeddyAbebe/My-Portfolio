import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i class="uil uil-graduation-cap nav__icon"></i> Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close pr-[0.4rem]"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div
          className="nav__toggle pr-[3.4rem]"
          onClick={() => showMenu(!Toggle)}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
