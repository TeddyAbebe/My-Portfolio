import React, { useState } from "react";
import "./qualification.css";
import qualificationData from "../../assets/qualificationData";
import Work from "../../assets/images/Work.svg";
import Education from "../../assets/images/Education.svg";
import { GoDot, GoDotFill } from "react-icons/go";

const Qua = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(true);

  const toggleEducation = () => {
    setShowEducation(true);
    setShowExperience(false);
  };

  const toggleExperience = () => {
    setShowEducation(false);
    setShowExperience(true);
  };

  return (
    <section className="section -mr-[3rem] sm:-mr-0" id="portfolio">
      <h2 className="section__title mb-5 md:mb-10">Qualification</h2>

      <div className="flex justify-center w-full">
        {/* Education */}
        <div className="p-5 w-full border shadow-sm rounded-md sm:w-1/3 flex flex-col gap-5">
          <div
            className={`flex items-center font-serif text-black sm:text-3xl font-bold justify-center cursor-pointer ${
              showEducation ? "underline underline-offset-4" : ""
            }`}
            onClick={toggleEducation}
          >
            {showEducation ? (
              <div className="flex gap-1 text-xl">
                <i className="uil uil-graduation-cap text-black"></i>
                <h3>Education</h3>
              </div>
            ) : (
              <div>
                <h3>Education</h3>
              </div>
            )}
          </div>
          {showEducation ? (
            <div className="flex flex-col gap-5">
              {qualificationData.education.map((edu, index) => (
                <div
                  className="flex items-start group cursor-pointer w-full"
                  key={index}
                >
                  <div className="relative pt-1">
                    <GoDot className=" group-hover:hidden" />
                    <GoDotFill className="hidden group-hover:block text-black" />
                  </div>

                  <div key={index}>
                    <div>
                      <h4 className="text-sm sm:text-xl text-gray-700 group-hover:text-black font-semibold">
                        {edu.title}
                      </h4>
                      <span className="text-sm sm:text-base text-black">
                        {edu.institution}
                      </span>
                      <div className="text-xs text-black">
                        <i className="uil uil-calendar-alt"></i> {edu.date}
                      </div>
                    </div>
                    <div>
                      <span className=""></span>
                      <span className=""></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center hover:scale-105 cursor-pointer text-black duration-300 ease-in-out transition">
              <img
                src={Education}
                alt=""
                className="w-44 h-44 "
                onClick={toggleEducation}
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-2 border-black h-32 self-center rounded-full"></div>

        {/* Experience */}
        <div className="p-5 w-full border shadow-sm rounded-md sm:w-1/3 flex flex-col gap-5">
          <div
            className={`flex items-center font-serif text-black sm:text-3xl font-bold justify-center cursor-pointer ${
              showExperience ? "underline underline-offset-4" : ""
            }`}
            onClick={toggleExperience}
          >
            {showExperience ? (
              <div className="flex gap-1 text-xl">
                <i className="uil uil-suitcase-alt text-black"></i>
                <h3>Experience</h3>
              </div>
            ) : (
              <div>
                <h3>Experience</h3>
              </div>
            )}
          </div>

          {showExperience ? (
            <div className="flex flex-col gap-5 w-full">
              {qualificationData.experience.map((exp, index) => (
                <div
                  className="flex items-start group cursor-pointer w-full"
                  key={index}
                >
                  <div className="relative pt-1">
                    <GoDot className=" group-hover:hidden" />
                    <GoDotFill className="hidden group-hover:block text-black" />
                  </div>

                  <div key={index} className="w-full">
                    <h4 className="text-sm sm:text-xl text-gray-700 group-hover:text-black font-semibold">
                      {exp.title}
                    </h4>

                    <a
                      href={exp.link}
                      className="text-sm sm:text-base text-black hover:underline hover:text-blue-800 underline-offset-2"
                    >
                      {exp.company}
                    </a>

                    <div className="text-xs text-gray-700 group-hover:text-black">
                      <i className="uil uil-calendar-alt"></i> {exp.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center hover:scale-105 cursor-pointer text-black duration-300 ease-in-out transition">
              <img
                src={Work}
                alt=""
                className="w-44 h-44 "
                onClick={toggleExperience}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qua;
