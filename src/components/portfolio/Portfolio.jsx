import React, { useState } from "react";
import "./portfolio.css";
import portfolios from "../../assets/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Recent projects</span>
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0"></div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] overflow-hidden object-contain  "
            >
              <figure>
                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
              </figure>

              <div className="w-full h-full bg-slate-700 bg-opacity-40 rounded-[8px] absolute top-0 left-0 z-[5] hidden group-hover:block ">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white hover:text-black bg-black hover:bg-slate-200 py-2 px-4 rounded-[8px] font-serif font-bold ease-in duration-200 "
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolios.length && portfolios.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white bg-black hover:bg-slate-800 py-2 px-4 rounded-[8px] font-[500] font-serif ease-in duration-200 "
            >
              Load More...
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;
