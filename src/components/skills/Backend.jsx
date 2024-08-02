import React from "react";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data my-1">
            <SiNodedotjs className="text-green-500" />
            <div>
              <h3 className="skills__name">NodeJs</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiMysql className="text-blue-500" />
            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiFirebase className="text-orange-500" />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data my-1">
            <SiExpress className="text-black" />
            <div>
              <h3 className="skills__name">Express</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiMongodb className="text-green-500" />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data my-1">
            <SiSupabase className="text-green-500" />
            <div>
              <h3 className="skills__name">Supabase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
