import AKAN from "./images/AKAN.png";
import GMJA from "./images/gmja.png";
import Klimate from "./images/klimate.png";
import NoteZipper from "./images/NoteZipper.png";
import MyMusicApp from "./images/MusicHub.jpg";
// import Amazon from "./images/Amazon.jpg";
// import Netflix from "./images/Netflix.jpg";
// import Apple from "./images/Apple.jpg";
// import Zoom from "./images/Zoom.jpg";
import InstaVerse from "./images/InstaVerse.jpg";
import EvoGym from "./images/EvoGym.png";
import Chat from "./images/chitchat.jpg";
import Sheko from "./images/Sheko.PNG";
import Mission from "./images/Mission180.PNG";

let idCounter = 0;

const Id = () => {
  return idCounter++;
};

const portfolios = [
  {
    id: Id(),
    imgUrl: Sheko,
    category: "Frontend",
    title: "Sheko Coffee",
    description:
      "Sheko Coffee is an elegant e-commerce platform promoting premium Ethiopian coffee from the Sheko region — the birthplace of Arabica beans. The site offers detailed insights into the region’s coffee heritage, cultivation practices, and sustainability efforts, all wrapped in a clean, modern interface built with React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    siteUrl: "https://www.shekocoffee.com/",
    github: "https://github.com/TeddyAbebe/Sheko",
  },
  {
    id: Id(),
    imgUrl: Mission,
    category: "Frontend",
    title: "Mission 180",
    description:
      "Mission 180 is a compassionate and impactful website dedicated to supporting orphaned and vulnerable children around the world. Built for a non-profit organization. With a heartfelt design and clear call-to-actions, it encourages community involvement and showcases the global impact of everyday kindness.",
    technologies: ["React", "Typescript", "TailwindCSS"],
    siteUrl: "https://mission180.netlify.app/",
    github: "https://github.com/TeddyAbebe/mission180",
  },
  {
    id: Id(),
    imgUrl: Klimate,
    category: "Frontend",
    title: "Klimate Weather Tracking",
    description:
      "Kli-Mate is a sleek and intuitive weather app designed to provide real-time weather updates and insights. Built with modern technologies like TanStack Query for efficient data fetching, ShadCN for beautiful UI components, Recharts for dynamic data visualizations, and styled with Tailwind CSS, the app delivers a seamless user experience. Powered by TypeScript, it ensures robust type safety and performance",
    technologies: [
      "React",
      "Tanstack Query",
      "Typescript",
      "TailwindCSS",
      "ShadCn",
      "Recharts",
    ],
    siteUrl: "https://kli-mate.netlify.app/",
    github: "https://github.com/TeddyAbebe/Klimate",
  },
  {
    id: Id(),
    imgUrl: GMJA,
    category: "FullStack",
    title: "GMJA Archive Website",
    description:
      "I developed the GMJA Archive website, which serves as a platform dedicated to preserving architectural legacies. The website encapsulates the passion of its founders for history, culture, and architectural heritage. It aims to document, preserve, and share invaluable architectural narratives, combating the threats posed by time, neglect, and development.",
    technologies: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
    siteUrl: "https://gmja.et/",
    github: "https://github.com/TeddyAbebe/Gmja-Arch-Hive",
  },
  {
    id: Id(),
    imgUrl: AKAN,
    category: "Front-End",
    title: "Commercial Website",
    description:
      "I work on a platform serves as a valuable resource for businesses and individuals alike, providing invaluable insights into customer behavior and optimizing their journey for enhanced satisfaction and success.",
    technologies: ["React", "Tailwind css"],
    // siteUrl: "https://akanpilot.co.uk/",
    siteUrl: "https://akandigital.netlify.app/",
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
    technologies: ["React", "TypeScript", "TailwindCSS"],
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
      "React",
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

  // {
  //   id: Id(),
  //   imgUrl: Netflix,
  //   category: "Front-End",
  //   title: "Netflix Website Clone",
  //   description:
  //     "Netflix-clone using react which is an online video streaming services.",
  //   technologies: ["React", "TMBD-Movie", "Redux Toolkit", "Redux-Saga"],
  //   siteUrl: "https://t-netflix-clone.netlify.app/",
  //   github: "https://github.com/TeddyAbebe/Netflix-Client",
  // },

  // {
  //   id: Id(),
  //   imgUrl: Amazon,
  //   category: "Full-Stack",
  //   title: "Amazon Website Clone",
  //   description:
  //     "Amazon-clone app using react which is an e-commerce store with full functionality, front and back end.",
  //   technologies: ["React", "Node.js", "Firebase"],
  //   siteUrl: "https://aug-bc35b.firebaseapp.com/",
  //   github: "https://github.com/TeddyAbebe/Amazon-Clone",
  // },

  // {
  //   id: Id(),
  //   imgUrl: Apple,
  //   category: "Front-End",
  //   title: "Apple Website Clone",
  //   description:
  //     "Apple’s current website using React - created React components for various pages and sections - Integrated Apple’s YouTube channel with the website using REST API",
  //   technologies: ["React", "Bootstrap", "Node.js"],
  //   siteUrl: "https://apple-clone-135e7.web.app/",
  //   github: "https://github.com/TeddyAbebe/Apple-Website-Replica-by-React",
  // },

  // {
  //   id: Id(),
  //   imgUrl: Zoom,
  //   category: "Back-End",
  //   title: "Zoom Clone",
  //   description:
  //     "Authored Zoom replica using Node.js. so that two or more users can go online and meet face to face.",
  //   technologies: ["Socket.io", "Node.js"],
  //   siteUrl: "#",
  //   github: "https://github.com/TeddyAbebe/ZoomClone",
  // },
];

export default portfolios;
