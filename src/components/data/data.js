import React from "react";
import {
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  Computer,
  SentimentSatisfiedAlt,
  Code,
  AccessAlarm,
  Search,
  Wifi,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

export const home = [
  {
    text: "HELLO I'M",
    name: "Tewodros Abebe",
    do: "Full Stack Developer",
    desc: "Motivated and dynamic Web Developer with a keen focus and experience in web application development and web layout design, with a strong work ethic and innate    ability to adapt in ever-changing and challenging environments.",
    icon1: <GitHub />,
    icon2: <LinkedIn />,
  },
];
export const about = [
  {
    desc: "Hello, I'm a creative Full Stack Web Developer based in Ethiopia,who is very passionate and devoted to what I do. With a few years of experience, I have acquired the skills necessary to build great, appealing websites that meet the latest web standards.",
    desc1:
      "Self-motivated with strong organizational and time management abilities also meeting production deadlines. Most importantly, I'm constantly trying to learn new skills to improve myself and my work.",
    cover: "./images/man.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <Computer />,
    title: "Web Development",
    desc: "I do some research before starting my development to choose the right way for the job.",
  },
  {
    id: 2,
    icon: <Code />,
    title: "Clean Code",
    desc: "Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.",
  },
  {
    id: 3,
    icon: <SentimentSatisfiedAlt />,
    title: "Fully Responsive",
    desc: "I design my websites for every screen size available and I make sure it looks great on every device",
  },
  {
    id: 4,
    icon: <AccessAlarm />,
    title: "On Time",
    desc: "Always responsible to complete any given project on timey",
  },
  {
    id: 5,
    icon: <Search />,
    title: "Quick Learner",
    desc: "I like to learn new things and I have the ability to learn it quickly.",
  },
  {
    id: 6,
    icon: <Wifi />,
    title: "Online",
    desc: "Easy to reach and happy to help.y",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LIENS OF CODE",
  },
];

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Addis Ababa, Ethiopia",
  },
  {
    icon: <PhoneIphone />,
    text1: "+251-942-865217",
  },
  {
    icon: <EmailOutlined />,
    text1: "teddyab729@gmail.com",
  },
];
export const social = [
  {
    icon: <GitHub />,
  },
  {
    icon: <LinkedIn />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <Twitter />,
  },
];
