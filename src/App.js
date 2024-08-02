import "./App.css";
import React, { useEffect } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Qualification from "./components/qualification/Qualification";
import Up from "./components/scrollup/Up";
import Skills from "./components/skills/Skills";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mr-[3rem] md:mr-0">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          toastClassName="custom-toast"
        />
      </main>
      <Footer />
      <Up />
    </div>
  );
}

export default App;
