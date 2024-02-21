import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/data";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a
                  href="https://drive.google.com/file/d/1ip7wuWIllL0HNJAmkQ6rwcVQux0x-4mI/view?usp=sharing?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="primaryBtn resume_Btn"
                    data-aos="flip-left"
                  >
                    My Resume
                  </button>
                </a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
