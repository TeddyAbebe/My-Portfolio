import { FaJs, FaReact, FaVuejs } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// A `null` color renders the icon in the current theme's heading color,
// for brand marks that are pure black and would vanish in dark mode.
const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible UIs",
    icon: "uil-brackets-curly",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: null },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "ShadCN", icon: SiShadcnui, color: null },
      { name: "Vue", icon: FaVuejs, color: "#42B883" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, databases & services",
    icon: "uil-server-network",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: null },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
];

export default skillCategories;
