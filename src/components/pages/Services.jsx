import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/data";

export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <Heading title="Services" />
          <h3 data-aos="zoom-in-down">What I Offer...</h3>
          <p data-aos="zoom-in-down">
            I'm a great team player, and I enjoy working with others. some of my
            work qualities are listed below.
          </p>
          <div className="content grid3">
            {services.map((item) => (
              <div className="box" data-aos="flip-left">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
