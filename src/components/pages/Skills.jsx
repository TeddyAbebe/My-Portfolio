import React from "react";

export const Skills = () => {
  return (
    <div className="container skill_sec">
      <h2 className="heading aos-init aos-animate" data-aos="zoom-in-down">
        Skills
      </h2>
      <div className="skills content grid3">
        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
              title="ReactJS"
              alt="ReactJS"
              width="20"
              height="20"
            />
            <h4>ReactJS</h4>
          </>
        </div>

        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              title="Node.js"
              alt="Node.js"
              width="20"
              height="20"
            />
            <h4>Node.js</h4>
          </>
        </div>

        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              title="express"
              alt="express"
              width="20"
              height="20"
            />
            <h4>Express</h4>
          </>
        </div>

        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              title="mysql"
              alt="mysql"
              width="20"
              height="20"
            />
            <h4>MySQL</h4>
          </>
        </div>

        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              title="mongoDB"
              alt="mongoDB"
              width="20"
              height="20"
            />
            <h4>MongoDB</h4>
          </>
        </div>

        <div className="skill" data-aos="flip-right">
          <>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
              title="php"
              alt="php"
              width="20"
              height="20"
            />
            <h4>PHP</h4>
          </>
        </div>
      </div>
    </div>
  );
};
