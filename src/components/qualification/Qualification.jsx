import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
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
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import qualificationData from "../../assets/qualificationData";
import { TiStar } from "react-icons/ti";

const iconMap = {
  SiReact: { component: SiReact, color: "#61DAFB" },
  SiNextdotjs: { component: SiNextdotjs, color: "#000000" },
  SiTailwindcss: { component: SiTailwindcss, color: "#38B2AC" },
  SiMui: { component: SiMui, color: "#007FFF" },
  SiAntdesign: { component: SiAntdesign, color: "#F5222D" },
  SiReactquery: { component: SiReactquery, color: "#EF4444" },
  SiNodedotjs: { component: SiNodedotjs, color: "#3C873A" },
  SiExpress: { component: SiExpress, color: "#000000" },
  SiMongodb: { component: SiMongodb, color: "#47A248" },
  SiStyledcomponents: { component: SiStyledcomponents, color: "#DB7093" },
  SiCss3: { component: SiCss3, color: "#1572B6" },
  SiShadcnui: { component: SiShadcnui, color: "#000000" },
  TbCircleLetterRFilled: { component: TbCircleLetterRFilled, color: "#000000" },
};

const Qualification = () => {
  const [expandedCard, setExpandedCard] = useState(null);

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
    <section id="qualification" className="section -mr-[3rem] sm:-mr-0">
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
            Work Experience
          </span>
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full"></div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
                              const iconColor = iconData?.color || "#1572B6";
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
        </div>
      </div>
    </section>
  );
};

export default Qualification;
