import React from "react";

const INFO_ITEMS = [
  { icon: "bx-award", title: "Experience", subtitle: "3+ Years Working" },
  { icon: "bx-briefcase-alt", title: "Completed", subtitle: "30+ Projects" },
  { icon: "bx-support", title: "Support", subtitle: "Online 24 / 7" },
];

const Info = () => {
  return (
    <div className="about__info grid">
      {INFO_ITEMS.map(({ icon, title, subtitle }) => (
        <div key={title} className="about__box">
          <i className={`bx ${icon} about__icon`}></i>
          <h3 className="about__title">{title}</h3>
          <span className="about__subtitle">{subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
