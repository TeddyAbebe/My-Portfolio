import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="md:bg-white">
      <div className="flex flex-col items-center gap-6 py-5">
        <h1 className="footer__title font-serif text-xl sm:text-3xl">
          Tewodros Abebe
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social ">
          <a
            href="https://github.com/TeddyAbebe"
            className="footer__social-link hover:scale-125 transition"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/teddyabebe/"
            className="footer__social-link hover:scale-125 transition"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/t.e.d.d.y_y/"
            className="footer__social-link hover:scale-125 transition"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Tewodros Abebe. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
