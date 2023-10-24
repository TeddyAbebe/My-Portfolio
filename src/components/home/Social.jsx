import React from "react";
import "./socials.css";

const Social = () => {
  return (
    <div className="home__social">
      <div className="home__social-icon flex justify-center items-center w-7 h-7 rounded-md hover:shadow-black shadow-inner">
        <a
          href="https://github.com/TeddyAbebe"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>

      <div className="home__social-icon flex justify-center items-center w-7 h-7 rounded-md hover:shadow-black shadow-inner">
        <a
          href="https://www.linkedin.com/in/teddyabebe/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin hover:text-[#0e76a8]"></i>
        </a>
      </div>

      <div className="home__social-icon flex justify-center items-center w-7 h-7 rounded-md hover:shadow-black shadow-inner">
        <a
          href="https://www.instagram.com/t.e.d.d.y_y/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-instagram ig-gradient w-7 h-7 flex justify-center items-center rounded-md"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
