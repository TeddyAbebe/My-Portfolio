import React from "react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/TeddyAbebe",
    icon: "uil-github-alt",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/teddyabebe/",
    icon: "uil-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://t.me/Teddyy_x",
    icon: "uil-telegram-alt",
    label: "Telegram",
  },
];

const Social = () => {
  return (
    <div className="home__social">
      {SOCIAL_LINKS.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
          aria-label={label}
        >
          <i className={`uil ${icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
