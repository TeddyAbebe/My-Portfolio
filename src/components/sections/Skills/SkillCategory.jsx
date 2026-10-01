import React from "react";

const SkillCategory = ({ title, description, icon, skills, index }) => {
  return (
    <div
      className="skills__content"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <div className="skills__header">
        <span className="skills__header-icon">
          <i className={`uil ${icon}`}></i>
        </span>
        <div>
          <h3 className="skills__title">{title}</h3>
          <p className="skills__description">{description}</p>
        </div>
      </div>

      <ul className="skills__list">
        {skills.map(({ name, icon: Icon, color }) => (
          <li key={name} className="skills__item">
            <Icon
              className="skills__icon"
              style={color ? { color } : undefined}
            />
            <span className="skills__name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
