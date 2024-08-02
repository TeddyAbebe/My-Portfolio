import React from "react";
import { FaJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiNuxtdotjs, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data my-1">
            <FaReact className="text-blue-500" />
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <FaVuejs className="text-green-500" />
            <div>
              <h3 className="skills__name">Vue</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiTypescript className="text-blue-500" />
            <div>
              <h3 className="skills__name">Typescript</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiTailwindcss className="text-teal-500" />
            <div>
              <h3 className="skills__name">TailwindCss</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data my-1">
            <SiNextdotjs className="text-black" />
            <div>
              <h3 className="skills__name">NextJs</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiNuxtdotjs className="text-green-500" />
            <div>
              <h3 className="skills__name">NuxtJs</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <FaJs className="text-yellow-500" />
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiShadcnui className="text-blue-500" />
            <div>
              <h3 className="skills__name">ShadCN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
