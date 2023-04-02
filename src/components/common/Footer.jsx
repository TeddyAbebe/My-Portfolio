import React from "react";
import { social } from "../data/data";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="zoom-in">{item.icon}</i>
          </>
        ))}
        <p data-aos="zoom-in">All Rights Reserved, 2022</p>
      </footer>
    </>
  );
};

export default Footer;
