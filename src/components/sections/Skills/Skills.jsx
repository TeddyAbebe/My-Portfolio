import React from "react";
import "./Skills.css";
import SkillCategory from "./SkillCategory";
import skillCategories from "./skillsData";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies I work with</span>

      <div className="skills__container container grid">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} index={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
