import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/TeddyAbebe"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/teddyabebe/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://www.instagram.com/t.e.d.d.y_y/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
