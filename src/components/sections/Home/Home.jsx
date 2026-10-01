import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__bg" aria-hidden="true">
        <span className="home__blob home__blob--one"></span>
        <span className="home__blob home__blob--two"></span>
      </div>

      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className="home__img"
            role="img"
            aria-label="Portrait of Tewodros Abebe"
          ></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
