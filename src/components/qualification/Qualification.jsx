import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaChevronDown } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiStyledcomponents,
  SiCss3,
  SiShadcnui,
} from "react-icons/si";
import { TbCircleLetterRFilled } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import qualificationData from "../../assets/qualificationData";
import { TiStar } from "react-icons/ti";

const iconMap = {
  SiReact: { component: SiReact, color: "#61DAFB" }, // React
  SiNextdotjs: { component: SiNextdotjs, color: "#000000" }, // Next.js
  SiTailwindcss: { component: SiTailwindcss, color: "#38B2AC" }, // Tailwind
  SiMui: { component: SiMui, color: "#007FFF" }, // Material UI
  SiAntdesign: { component: SiAntdesign, color: "#F5222D" }, // Ant Design
  SiReactquery: { component: SiReactquery, color: "#EF4444" }, // React Query
  SiNodedotjs: { component: SiNodedotjs, color: "#3C873A" }, // Node.js
  SiExpress: { component: SiExpress, color: "#000000" }, // Express
  SiMongodb: { component: SiMongodb, color: "#47A248" }, // MongoDB
  SiStyledcomponents: { component: SiStyledcomponents, color: "#DB7093" }, // Styled Component
  SiCss3: { component: SiCss3, color: "#1572B6" }, // CSS3
  SiShadcnui: { component: SiShadcnui, color: "#000000" }, // ShadCn
  TbCircleLetterRFilled: { component: TbCircleLetterRFilled, color: "#000000" }, // RizzUI
};

const Qualification = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(true);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleEducation = () => {
    setShowEducation(true);
    setShowExperience(false);
    setExpandedCard(null);
  };

  const toggleExperience = () => {
    setShowEducation(false);
    setShowExperience(true);
    setExpandedCard(null);
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("qualification");
      const timelineLine = document.querySelector(".timeline-line");
      if (section && timelineLine) {
        const rect = section.getBoundingClientRect();
        const progress = Math.min(
          (window.scrollY - rect.top + 200) / (rect.height - 400),
          1
        );
        timelineLine.style.background = `linear-gradient(to bottom, #14b8a6 ${
          progress * 100
        }%, #d1d5db ${progress * 100}%)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="qualification"
      className="section -mr-[3rem] sm:-mr-0"
    >
      {/* Parallax Background with Subtle Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars-layer-1 absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-slow-parallax"></div>
        <div className="stars-layer-2 absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 animate-fast-parallax"></div>
      </div>

      <div className="mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10 sm:mb-12 tracking-tight"
        >
          <span className="bg-clip-text text-transparent section__title mb-5 md:mb-10">
            My Journey
          </span>
        </motion.h2>

        {/* Toggle Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center mb-8 sm:mb-12 gap-2 sm:gap-0"
        >
          <div className="inline-flex gap-2 rounded-full bg-white shadow-lg p-1 relative overflow-hidden w-full sm:w-auto">
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
              animate={{
                x: showExperience ? 0 : "100%",
                width: "50%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={toggleExperience}
              className={`relative z-10 flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex-1 sm:flex-none ${
                showExperience
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FaBriefcase className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Experience
            </button>

            <button
              onClick={toggleEducation}
              className={`relative z-10 flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 flex-1 sm:flex-none ${
                showEducation
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FaGraduationCap className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              Education
            </button>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full"></div>

          {/* Experience Timeline */}
          <AnimatePresence mode="wait">
            {showExperience && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 sm:space-y-12"
              >
                {qualificationData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-teal-500/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>

                    {/* Card with Tilt Effect */}
                    <Tilt
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      glareEnable={true}
                      glareMaxOpacity={0.3}
                      glareColor="#ffffff"
                    >
                      <motion.div
                        className="w-full p-4 sm:p-6 bg-white rounded-xl shadow-xl border border-transparent hover:border-teal-200 transition-all duration-300 group cursor-pointer relative"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            {/* Title and Tech Stack Row */}
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 flex-1 min-w-0">
                                {exp.title}
                              </h4>

                              <div className="flex flex-wrap gap-3 w-1/3 group/tech-container">
                                {exp.techStack.map((tech, techIndex) => {
                                  const iconData = iconMap[tech.icon];
                                  const IconComponent =
                                    iconData?.component || SiCss3;
                                  const iconColor =
                                    iconData?.color || "#1572B6";
                                  return (
                                    <motion.div
                                      key={techIndex}
                                      className="relative group/tech h-6 w-6 sm:h-7 sm:w-7 p-1"
                                      whileHover={{ scale: 1.2 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 300,
                                      }}
                                    >
                                      <IconComponent
                                        className="h-full w-full group-hover/tech:drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] transition-all duration-300"
                                        style={{ color: iconColor }}
                                      />
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>

                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base text-gray-700 hover:text-teal-600 underline underline-offset-2 transition-colors duration-300"
                            >
                              {exp.company}
                            </a>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">
                              <span className="mr-1">📅</span> {exp.date}
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                              {expandedCard === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 text-xs sm:text-sm text-gray-600 space-y-2"
                                >
                                  {(exp.details || []).map((detail, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex items-start gap-2 p-2 bg-gray-50 rounded-md border-l-4 border-teal-500 hover:bg-gray-100 hover:scale-102 transition-all duration-200"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: i * 0.1,
                                      }}
                                    >
                                      <TiStar className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                                      <p>{detail}</p>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Chevron Icon */}
                        <motion.div
                          className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-teal-500/20 group-hover:bg-teal-500/40 group-hover:animate-fast-bounce transition-all duration-300"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{
                            scale: 1.1,
                            opacity: 1,
                            transition: { duration: 0.2 },
                          }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            animate={{
                              rotate: expandedCard === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown
                              className={`h-4 w-4 ${
                                expandedCard === index
                                  ? "text-teal-700"
                                  : "text-teal-600"
                              } group-hover:text-teal-800 transition-colors duration-300`}
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Timeline */}
            {showEducation && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 sm:space-y-12"
              >
                {qualificationData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>

                    {/* Card with Tilt Effect */}
                    <Tilt
                      tiltMaxAngleX={15}
                      tiltMaxAngleY={15}
                      glareEnable={true}
                      glareMaxOpacity={0.3}
                      glareColor="#ffffff"
                    >
                      <motion.div
                        className="w-full p-4 sm:p-6 bg-white rounded-xl shadow-xl border border-transparent hover:border-blue-200 transition-all duration-300 group cursor-pointer relative"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex items-start">
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                              {edu.title}
                            </h4>
                            <a
                              href={edu.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:underline underline-offset-2 transition-colors duration-300"
                            >
                              {edu.institution}
                            </a>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">
                              <span className="mr-1">📅</span> {edu.date}
                            </div>
                            {/* Expanded Details */}
                            <AnimatePresence>
                              {expandedCard === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-4 text-xs sm:text-sm text-gray-600 space-y-2"
                                >
                                  {(edu.details || []).map((detail, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex items-start gap-2 p-2 bg-gray-50 rounded-md border-l-4 border-blue-500 hover:bg-gray-100 hover:scale-102 transition-all duration-200"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        delay: i * 0.1,
                                      }}
                                    >
                                      <TiStar className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                                      <p>{detail}</p>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Chevron Icon */}
                        <motion.div
                          className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 group-hover:bg-blue-500/40 group-hover:animate-fast-bounce transition-all duration-300"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{
                            scale: 1.1,
                            opacity: 1,
                            transition: { duration: 0.2 },
                          }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            animate={{
                              rotate: expandedCard === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown
                              className={`h-4 w-4 ${
                                expandedCard === index
                                  ? "text-blue-700"
                                  : "text-blue-600"
                              } group-hover:text-blue-800 transition-colors duration-300`}
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </Tilt>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
