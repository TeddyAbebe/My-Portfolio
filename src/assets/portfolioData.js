import AKAN from "./images/AKAN.png";
import NoteZipper from "./images/NoteZipper.png";
import MyMusicApp from "./images/MusicHub.jpg";
import Amazon from "./images/Amazon.jpg";
import Netflix from "./images/Netflix.jpg";
import Apple from "./images/Apple.jpg";
import Zoom from "./images/Zoom.jpg";
import InstaVerse from "./images/InstaVerse.jpg";
import EvoGym from "./images/EvoGym.png";
import Chat from "./images/chitchat.jpg";

let idCounter = 0;

const Id = () => {
  return idCounter++;
};

const portfolios = [
  {
    id: Id(),
    imgUrl: AKAN,
    category: "Front-End",
    title: "Commercial Website",
    description:
      "I work on a platform serves as a valuable resource for businesses and individuals alike, providing invaluable insights into customer behavior and optimizing their journey for enhanced satisfaction and success.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://akanpilot.co.uk/",
    github: "https://github.com/TeddyAbebe/AKAN",
  },

  {
    id: Id(),
    imgUrl: Chat,
    category: "Full-Stack",
    title: "Chit Chat App",
    description:
      "ChitChat is a React-powered web app. It enables one-on-one and group chats for seamless communication. Enjoy real-time interactions in a sleek interface",
    technologies: ["React", "Chakra UI", "Socket.io", "Node.js", "MongoDB"],
    siteUrl: "https://ta-lk.netlify.app/",
    github: "https://github.com/TeddyAbebe/Talk-Client",
  },

  {
    id: Id(),
    imgUrl: EvoGym,
    category: "Front-End",
    title: "EvoGym Website",
    description:
      "Designed and developed the official website for EvoGym, a local fitness center dedicated to transforming lives through health and wellness. The website showcases class information, membership plans, and a user-friendly interface to support fitness enthusiasts on their journey to a healthier lifestyle.",
    technologies: ["Vite-React", "TypeScript", "TailwindCSS"],
    siteUrl: "https://evolgym.netlify.app/",
    github: "https://github.com/TeddyAbebe/Gym",
  },

  {
    id: Id(),
    imgUrl: NoteZipper,
    category: "Full-Stack",
    title: "Note taking Web App",
    description:
      "I work on a platform that aims to support village school teachers by providing them with a powerful tool for taking short notes, capture key points, ideas, and important information quickly.",
    technologies: ["React", "React Bootstrap", "Node.js", "MongoDB"],
    siteUrl: "https://note-zipper-client.onrender.com/",
    github: "https://github.com/TeddyAbebe/Note-Zipper-Client",
  },

  {
    id: Id(),
    imgUrl: MyMusicApp,
    category: "Full-Stack",
    title: "Music Hub",
    description:
      "I've created a Full Stack Music Management App using the MERN stack. It allows users to save their favorite playlist, and provides insightful music statistics. The backend uses ExpressJS and MongoDB, while the frontend is built with ReactJS and Redux.",
    technologies: [
      "Vite-React",
      "Typescript",
      "Styled-Component",
      "Redux Toolkit",
      "Redux-Saga",
    ],
    siteUrl: "https://muisc-hub.netlify.app/",
    github: "https://github.com/TeddyAbebe/music-hub-client",
  },

  {
    id: Id(),
    imgUrl: InstaVerse,
    category: "Full-Stack",
    title: "Insta-Verse",
    description:
      "A social media type of app that can help users to Post their memories, and Share it with their friends.",
    technologies: ["React", "Ant-Design", "Node.js"],
    siteUrl: "https://instaversee.netlify.app/",
    github: "https://github.com/TeddyAbebe/InstaVerse_Client",
  },

  {
    id: Id(),
    imgUrl: Netflix,
    category: "Front-End",
    title: "Netflix Website Clone",
    description:
      "Netflix-clone using react which is an online video streaming services.",
    technologies: ["React", "TMBD-Movie", "Redux Toolkit", "Redux-Saga"],
    siteUrl: "https://t-netflix-clone.netlify.app/",
    github: "https://github.com/TeddyAbebe/Netflix-Client",
  },

  {
    id: Id(),
    imgUrl: Amazon,
    category: "Full-Stack",
    title: "Amazon Website Clone",
    description:
      "Amazon-clone app using react which is an e-commerce store with full functionality, front and back end.",
    technologies: ["React", "Node.js", "Firebase"],
    siteUrl: "https://aug-bc35b.firebaseapp.com/",
    github: "https://github.com/TeddyAbebe/Amazon-Clone",
  },

  {
    id: Id(),
    imgUrl: Apple,
    category: "Front-End",
    title: "Apple Website Clone",
    description:
      "Apple’s current website using React - created React components for various pages and sections - Integrated Apple’s YouTube channel with the website using REST API",
    technologies: ["React", "Bootstrap", "Node.js"],
    siteUrl: "https://apple-clone-135e7.web.app/",
    github: "https://github.com/TeddyAbebe/Apple-Website-Replica-by-React",
  },

  {
    id: Id(),
    imgUrl: Zoom,
    category: "Back-End",
    title: "Zoom Clone",
    description:
      "Authored Zoom replica using Node.js. so that two or more users can go online and meet face to face.",
    technologies: ["Socket.io", "Node.js"],
    siteUrl: "#",
    github: "https://github.com/TeddyAbebe/ZoomClone",
  },
];

export default portfolios;
