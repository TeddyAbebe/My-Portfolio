import React from "react";
import { home } from "../data/data";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.do}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <div className="socials">
              <a
                href="https://github.com/TeddyAbebe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {val.icon1}
              </a>

              <a
                href="https://www.linkedin.com/in/teddyabebe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {val.icon2}
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
