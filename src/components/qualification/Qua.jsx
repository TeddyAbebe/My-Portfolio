import React, { useState } from "react";
import "./qualification.css";
import qualificationData from "../../assets/qualificationData";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

const Qua = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const toggleEducation = () => {
    setShowEducation(true);
    setShowExperience(false);
  };

  const toggleExperience = () => {
    setShowEducation(false);
    setShowExperience(true);
  };

  return (
    <div className="">
      <h2 className="section__title mb-5 md:mb-10">Qualification</h2>
      <div className="flex justify-center">
        <div className="border-r p-5 border-black w-1/4 flex flex-col gap-5">
          <div
            className={`flex items-center font-serif text-black text-3xl font-bold justify-center cursor-pointer ${
              showEducation ? "underline" : ""
            }`}
            onClick={toggleEducation}
          >
            {showEducation ? (
              <div className="flex">
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
                <div className="flex items-start">
                  <IoMdArrowDropright className="text-black w-5 h-5" />

                  <div key={index}>
                    <div>
                      <h4 className="text-black text-xl font-semibold">
                        {edu.title}
                      </h4>
                      <span className="text-lg text-black">
                        {edu.institution}
                      </span>
                      <div className="text-sm text-black">
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
            <div className="flex items-end hover:scale-105 cursor-pointer text-black duration-300 ease-in-out transition">
              <LuGraduationCap
                onClick={toggleEducation}
                className="w-32 h-32 "
              />
              <BiDotsHorizontalRounded className="w-16 h-16 " />
            </div>
          )}
        </div>
        <div className="border-l p-5 border-black w-1/4 flex flex-col gap-5">
          <div
            className={`flex items-center font-serif text-black text-3xl font-bold justify-center cursor-pointer ${
              showExperience ? "underline" : ""
            }`}
            onClick={toggleExperience}
          >
            {showExperience ? (
              <div className="flex">
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
            <div className="flex flex-col gap-5">
              {qualificationData.experience.map((exp, index) => (
                <div className="flex items-start">
                  <IoMdArrowDropright className="text-black w-5 h-5" />
                  <div key={index}>
                    <div className="">
                      <div>
                        <h4 className="text-black text-xl font-semibold">
                          {exp.title}
                        </h4>
                        <span className="text-lg text-black">
                          {exp.company}
                        </span>
                        <div className="text-sm text-black">
                          <i className="uil uil-calendar-alt"></i> {exp.date}
                        </div>
                      </div>
                      <div>
                        <span className=""></span>
                        <span className=""></span>
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
            <div className="flex items-end hover:scale-105 cursor-pointer text-black duration-300 ease-in-out transition">
              <PiSuitcaseSimple
                onClick={toggleExperience}
                className="w-32 h-32 "
              />
              <BiDotsHorizontalRounded className="w-16 h-16 " />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Qua;
