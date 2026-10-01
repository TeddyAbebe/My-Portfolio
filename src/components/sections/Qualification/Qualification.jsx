import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiCalendar, FiCode, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiStyledcomponents,
  SiShadcnui,
} from "react-icons/si";
import { TbCircleLetterRFilled } from "react-icons/tb";
import { TiStar } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import qualificationData from "./qualificationData";

// A `null` color renders the icon in the theme's heading color.
const iconMap = {
  SiReact: { component: SiReact, color: "#61DAFB" },
  SiTypescript: { component: SiTypescript, color: "#3178C6" },
  SiNextdotjs: { component: SiNextdotjs, color: null },
  SiTailwindcss: { component: SiTailwindcss, color: "#38B2AC" },
  SiMui: { component: SiMui, color: "#007FFF" },
  SiAntdesign: { component: SiAntdesign, color: "#F5222D" },
  SiReactquery: { component: SiReactquery, color: "#EF4444" },
  SiNodedotjs: { component: SiNodedotjs, color: "#3C873A" },
  SiExpress: { component: SiExpress, color: null },
  SiMongodb: { component: SiMongodb, color: "#47A248" },
  SiStyledcomponents: { component: SiStyledcomponents, color: "#DB7093" },
  SiShadcnui: { component: SiShadcnui, color: null },
  TbCircleLetterRFilled: { component: TbCircleLetterRFilled, color: null },
};

const canHover =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const Qualification = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const viewportAnchor = window.innerHeight * 0.6;
      const value = (viewportAnchor - rect.top) / rect.height;
      setProgress(Math.min(Math.max(value, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="qualification" className="section">
      <h2 className="section__title">Work Experience</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="container">
        <div
          ref={timelineRef}
          className="relative max-w-3xl mx-auto pl-9 sm:pl-14"
        >
          <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-0 h-full w-0.5 rounded-full bg-line">
            <div
              className="w-full rounded-full bg-gradient-to-b from-accent to-accent-alt transition-[height] duration-150"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-6 sm:space-y-10">
            {qualificationData.experience.map((exp, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={`${exp.company}-${exp.date}`}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <span className="absolute -left-5 sm:-left-8 top-6 sm:top-7 -translate-x-1/2 flex h-4 w-4 sm:h-5 sm:w-5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-accent border-4 border-page" />
                  </span>

                  <Tilt
                    tiltEnable={canHover}
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    glareEnable={canHover}
                    glareMaxOpacity={0.15}
                    glareColor="#ffffff"
                    glareBorderRadius="1rem"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                      onClick={() => toggleCard(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleCard(index);
                        }
                      }}
                      className={`relative w-full p-4 sm:p-6 bg-surface rounded-2xl border shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 ${
                        isExpanded
                          ? "border-accent/50"
                          : "border-line hover:border-accent/40"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
                        <div className="min-w-0">
                          <h4 className="text-base sm:text-xl font-semibold text-heading">
                            {exp.title}
                          </h4>
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 mt-1 text-sm sm:text-base font-medium text-accent hover:underline underline-offset-4"
                            >
                              {exp.company}
                              <FiExternalLink className="h-3.5 w-3.5" />
                            </a>
                          ) : (
                            <span className="inline-block mt-1 text-sm sm:text-base font-medium text-accent">
                              {exp.company}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-full bg-subtle border border-line px-3 py-1 text-xs font-medium text-body">
                          <FiCalendar className="h-3.5 w-3.5 text-accent" />
                          {exp.date}
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-3 mt-4">
                        <div className="flex flex-1 flex-wrap items-center gap-1.5 sm:gap-2">
                          {exp.techStack.map((tech) => {
                            const iconData = iconMap[tech.icon];
                            const IconComponent = iconData?.component || FiCode;

                            return (
                              <span
                                key={tech.name}
                                title={tech.name}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-subtle border border-line px-2 py-1 text-xs font-medium text-body"
                              >
                                <IconComponent
                                  className="h-3.5 w-3.5 text-heading"
                                  style={
                                    iconData?.color
                                      ? { color: iconData.color }
                                      : undefined
                                  }
                                />
                                {tech.name}
                              </span>
                            );
                          })}
                        </div>

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex"
                          >
                            <FaChevronDown className="h-3.5 w-3.5" />
                          </motion.span>
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.ul
                            key="details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden text-sm text-body space-y-2"
                          >
                            <li className="h-2" aria-hidden="true" />
                            {(exp.details || []).map((detail, i) => (
                              <motion.li
                                key={detail}
                                className="flex items-start gap-2 p-3 bg-subtle rounded-lg border-l-4 border-accent"
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: i * 0.06 }}
                              >
                                <TiStar className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <p>{detail}</p>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </Tilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
