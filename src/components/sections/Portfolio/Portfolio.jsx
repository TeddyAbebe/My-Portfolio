import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { FiArrowDown } from "react-icons/fi";
import portfolios from "./portfolioData";
import Modal from "./Modal";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [activePortfolioId, setActivePortfolioId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 3);
      setIsLoading(false);
    }, 600);
  };

  const activePortfolio = portfolios.find((p) => p.id === activePortfolioId);

  return (
    <section id="portfolio" className="section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.slice(0, visibleItems).map((portfolio, index) => (
            <PortfolioCard
              key={portfolio.id}
              portfolio={portfolio}
              onOpen={setActivePortfolioId}
              index={index % 3}
            />
          ))}
        </div>

        {visibleItems < portfolios.length && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
              className="button button--ghost button--flex disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <CgSpinner className="animate-spin h-5 w-5 mr-2" />
                  Loading...
                </>
              ) : (
                <>
                  Load More
                  <FiArrowDown className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {activePortfolio && (
        <Modal
          portfolio={activePortfolio}
          onClose={() => setActivePortfolioId(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
