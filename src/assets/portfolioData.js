import AKAN from "./images/AKAN.png";
import NoteZipper from "./images/NoteZipper.png";
import MyMusicApp from "./images/MyMusicApp.png";
import Amazon from "./images/Amazon.jpg";
import Netflix from "./images/Netflix.jpg";
import Apple from "./images/Apple.jpg";
import Zoom from "./images/Zoom.jpg";
import InstaVerse from "./images/InstaVerse.png";
import EvoGym from "./images/EvoGym.png";

const portfolios = [
  {
    id: "01",
    imgUrl: AKAN,
    category: "Web Design",
    title: "Commercial Website",
    description:
      "I work on a platform serves as a valuable resource for businesses and individuals alike, providing invaluable insights into customer behavior and optimizing their journey for enhanced satisfaction and success.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://akanpilot.co.uk/",
    github: "https://github.com/TeddyAbebe/AKAN",
  },
  {
    id: "02",
    imgUrl: NoteZipper,
    category: "Ux",
    title: "Note taking Web App",
    description:
      "I work on a platform that aims to support village school teachers by providing them with a powerful tool for taking short notes, capture key points, ideas, and important information quickly.",
    technologies: ["React", "React Bootstrap", "Node.js", "MongoDB"],
    siteUrl: "https://note-zipper-client.onrender.com/",
    github: "https://github.com/TeddyAbebe/Note-Zipper-Client",
  },

  {
    id: "03",
    imgUrl: EvoGym,
    category: "Fitness",
    title: "EvoGym Website",
    description:
      "Designed and developed the official website for EvoGym, a local fitness center dedicated to transforming lives through health and wellness. The website showcases class information, membership plans, and a user-friendly interface to support fitness enthusiasts on their journey to a healthier lifestyle.",
    technologies: ["Vite-React", "TypeScript", "TailwindCSS"],
    siteUrl: "https://evolgym.netlify.app/",
    github: "https://github.com/TeddyAbebe/Gym",
  },

  {
    id: "04",
    imgUrl: MyMusicApp,
    category: "Ux",
    title: "Music Library Managers",
    description:
      "I've created a Full Stack Music Management App using the MERN stack. It allows users to add, edit, and remove Musics, and provides insightful music statistics. The backend uses ExpressJS and MongoDB, while the frontend is built with ReactJS and Redux.",
    technologies: ["React", "Emotion", "Redux Toolkit", "Redux-Saga"],
    siteUrl: "https://musicsss.netlify.app/",
    github: "https://github.com/TeddyAbebe/JS-Music-Client",
  },
  {
    id: "05",
    imgUrl: Amazon,
    category: "Web Design",
    title: "Amazon Website Clone",
    description:
      "Amazon-clone app using react which is an e-commerce store with full functionality, front and back end.",
    technologies: ["React", "Node.js", "Firebase"],
    siteUrl: "https://aug-bc35b.firebaseapp.com/",
    github: "https://github.com/TeddyAbebe/Amazon-Clone",
  },
  {
    id: "06",
    imgUrl: Netflix,
    category: "Web Design",
    title: "Netflix Website Clone",
    description:
      "Netflix-clone using react which is an online video streaming services.",
    technologies: ["React", "TMBD-Movie", "Redux Toolkit", "Redux-Saga"],
    siteUrl: "https://t-netflix-clone.netlify.app/",
    github: "https://github.com/TeddyAbebe/Netflix-Client",
  },

  {
    id: "07",
    imgUrl: Apple,
    category: "Ux",
    title: "Apple Website Clone",
    description:
      "Apple’s current website using React - created React components for various pages and sections - Integrated Apple’s YouTube channel with the website using REST API",
    technologies: ["React", "Bootstrap", "Node.js"],
    siteUrl: "https://apple-clone-135e7.web.app/",
    github: "https://github.com/TeddyAbebe/Apple-Website-Replica-by-React",
  },
  {
    id: "08",
    imgUrl: Zoom,
    category: "Web Design",
    title: "Zoom Clone",
    description:
      "Authored Zoom replica using Node.js. so that two or more users can go online and meet face to face.",
    technologies: ["Socket.io", "Node.js"],
    siteUrl: "#",
    github: "https://github.com/TeddyAbebe/ZoomClone",
  },
  {
    id: "09",
    imgUrl: InstaVerse,
    category: "ux",
    title: "Insta-Verse",
    description:
      "A social media type of app that can help users to Post their memories, Edit and Delete their story or memory.",
    technologies: ["React", "Ant-Design", "Node.js"],
    siteUrl: "https://instaversee.netlify.app/",
    github: "https://github.com/TeddyAbebe/InstaVerse_Client",
  },
];

export default portfolios;
