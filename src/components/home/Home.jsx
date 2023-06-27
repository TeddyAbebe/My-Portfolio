import React from "react";
import { About } from "../pages/About";
import { Hero } from "./Hero";
import { Services } from "../pages/Services";
import { Portfolio } from "../pages/Portfolio";
import { Contact } from "../pages/Contact";
import { Skills } from "../pages/Skills";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </>
  )
};
