import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { Projects } from "../common/Projects";
import { portfolio, works } from "../data/data";


export const Portfolio = () => {
  const [list] = useState(portfolio);
  const [work] = useState(works);

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Work Experience" />

          <div className="content grid3">
            {work.map((item) => (
              <div className="box" data-aos="fade-up">
                <Projects
                  name={item.name}
                  desc={item.desc}
                  frames={item.frames}
                  photo={item.cover}
                  link={item.link}
                  git={item.git}
                />
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <Heading title="Personal Projects" />

          <div className="content grid3">
            {list.map((item) => (
              <div className="box" data-aos="fade-up">
                <Projects
                  name={item.name}
                  desc={item.desc}
                  frames={item.frames}
                  photo={item.cover}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
