import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/data";

export const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="text" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in-up">Submit</button>
              </form>
            </div>
            
            <div className="left">
              {contact.map((item) => (
                <div className="box" data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <h3>{item.text1}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
