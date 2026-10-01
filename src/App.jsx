import "./styles/globals.css";
import React, { useEffect } from "react";
import Aos from "aos";
import { ToastContainer } from "react-toastify";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Portfolio from "./components/sections/Portfolio";
import Qualification from "./components/sections/Qualification";
import Skills from "./components/sections/Skills";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="overflow-x-clip">
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
          theme={theme}
          toastClassName="custom-toast"
        />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
