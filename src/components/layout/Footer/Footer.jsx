import React from "react";
import "./Footer.css";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/TeddyAbebe",
    icon: "bxl-github",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/teddyabebe/",
    icon: "bxl-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://t.me/Teddyy_x",
    icon: "bxl-telegram",
    label: "Telegram",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="#home" className="footer__title">
          Tewodros Abebe<span className="footer__dot">.</span>
        </a>

        <ul className="footer__list">
          {FOOTER_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="footer__link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__social">
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              <i className={`bx ${icon}`}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">&#169; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
