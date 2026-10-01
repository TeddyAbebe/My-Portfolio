import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../../../hooks/useTheme";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const label = `Switch to ${isDark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <FiSun className="theme-toggle__icon theme-toggle__icon--sun" />
      <FiMoon className="theme-toggle__icon theme-toggle__icon--moon" />
    </button>
  );
};

export default ThemeToggle;
