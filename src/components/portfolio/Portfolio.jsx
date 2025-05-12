import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import portfolios from "../../assets/portfolioData";
import Modal from "./Modal";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePortfolioId, setActivePortfolioId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 3);
      setIsLoading(false);
    }, 1000);
  };

  const openModal = (id) => {
    setActivePortfolioId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePortfolioId(null);
  };

  return (
    <section id="portfolio" className="py-12 bg-gray-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h2
            className="section__title mb-5 md:mb-10"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Projects
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolios.slice(0, visibleItems).map((portfolio, index) => (
            <PortfolioCard
              key={portfolio.id}
              portfolio={portfolio}
              onClick={openModal}
              index={index}
            />
          ))}
        </div>

        {portfolios.length > 0 && visibleItems < portfolios.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-sm font-medium rounded-full shadow-sm hover:from-gray-300 hover:to-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinner className="animate-spin h-5 w-5 mr-2" />
                  Loading...
                </>
              ) : (
                <>
                  Load More
                  <FiArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <Modal
          portfolio={portfolios.find((p) => p.id === activePortfolioId)}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

const PortfolioCard = ({ portfolio, onClick, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    data-aos-duration="600"
    className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-teal-200 flex flex-col justify-between overflow-hidden"
  >
    <div>
      <div className="w-full h-52 overflow-hidden">
        <img
          src={portfolio.imgUrl}
          alt={portfolio.title || "Portfolio"}
          className="w-full h-auto object-top object-contain rounded-md"
        />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
            {portfolio.title || "Project"}
          </span>
        </h3>

        <p className="text-base font-medium text-gray-700 mb-1">
          {portfolio.category}
        </p>

        <p className="text-sm text-gray-600 leading-6 mb-2 line-clamp-1">
          {portfolio.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {portfolio.technologies?.map((tech, i) => (
            <span
              key={i}
              className="relative flex items-center justify-center px-2.5 py-1 text-xs text-center rounded-lg bg-gradient-to-r from-teal-100 to-teal-200 font-medium text-teal-800 shadow-sm hover:shadow-md hover:from-teal-200 hover:to-teal-300 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-3">
      <div className="relative group">
        <a
          href={portfolio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 overflow-hidden"
          aria-label="View on GitHub"
        >
          <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="absolute inset-0 bg-teal-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </a>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs font-medium text-white bg-teal-600 rounded-lg shadow-sm whitespace-nowrap">
          View on GitHub
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-teal-600"></span>
        </span>
      </div>

      <button
        onClick={() => onClick(portfolio.id)}
        className="relative inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 text-sm font-medium rounded-full shadow-sm hover:from-blue-100 hover:to-teal-200 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 overflow-hidden group"
      >
        <span className="relative z-10 flex items-center">
          View Details
          <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="absolute inset-0 bg-teal-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      </button>

      {portfolio.siteUrl && (
        <div className="relative group">
          <a
            href={portfolio.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-teal-50 hover:border-teal-300 hover:text-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 overflow-hidden"
            aria-label="Visit Live Site"
          >
            <MdOpenInNew className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute inset-0 bg-teal-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 text-xs font-medium text-white bg-teal-600 rounded-lg shadow-sm whitespace-nowrap">
            Visit Live Site
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-teal-600"></span>
          </span>
        </div>
      )}
    </div>
  </div>
);

export default Portfolio;
