import portfolioImg01 from "./images/portfolio-01.jpg";
import portfolioImg02 from "./images/portfolio-02.jpg";
import portfolioImg03 from "./images/portfolio-03.jpg";
import portfolioImg04 from "./images/portfolio-04.jpg";
import portfolioImg05 from "./images/portfolio-05.jpg";
import portfolioImg06 from "./images/portfolio-06.jpg";
import portfolioImg07 from "./images/portfolio-07.jpg";
import portfolioImg08 from "./images/portfolio-08.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
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
    imgUrl: portfolioImg02,
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
    imgUrl: portfolioImg03,
    category: "Ux",
    title: "Music Library Managers",
    description:
      "I've created a Full Stack Music Management App using the MERN stack. It allows users to add, edit, and remove Musics, and provides insightful music statistics. The backend uses ExpressJS and MongoDB, while the frontend is built with ReactJS and Redux.",
    technologies: ["React", "Emotion", "Redux Toolkit", "Redux-Saga"],
    siteUrl: "https://musicsss.netlify.app/",
    github: "https://github.com/TeddyAbebe/JS-Music-Client",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Amazon Website Clone",
    description:
      "Amazon-clone app using react which is an e-commerce store with full functionality, front and back end.",
    technologies: ["React", "Node.js", "Firebase"],
    siteUrl: "https://aug-bc35b.firebaseapp.com/",
    github: "https://github.com/TeddyAbebe/Amazon-Clone",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Netflix Website Clone",
    description:
      "Netflix-clone using react which is an online video streaming services.",
    technologies: ["React", "TMBD-Movie", "Redux Toolkit", "Redux-Saga"],
    siteUrl: "https://t-netflix-clone.netlify.app/",
    github: "https://github.com/TeddyAbebe/Netflix-Client",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Ux",
    title: "Apple Website Clone",
    description:
      "Apple’s current website using React - created React components for various pages and sections - Integrated Apple’s YouTube channel with the website using REST API",
    technologies: ["React", "Bootstrap", "Node.js"],
    siteUrl: "https://apple-clone-135e7.web.app/",
    github: "https://github.com/TeddyAbebe/Apple-Website-Replica-by-React",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Zoom Clone",
    description:
      "Authored Zoom replica using Node.js. so that two or more users can go online and meet face to face.",
    technologies: ["Socket.io", "Node.js"],
    siteUrl: "#",
    github: "https://github.com/TeddyAbebe/ZoomClone",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
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
