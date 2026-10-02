import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import portfolios from "./portfolioData";
import Modal from "./Modal";
import PortfolioCard from "./PortfolioCard";

const INITIAL_COUNT = 6;
const PAGE_SIZE = 3;

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(INITIAL_COUNT);
  const [activePortfolioId, setActivePortfolioId] = useState(null);

  const total = portfolios.length;
  const hasMore = visibleItems < total;
  const canCollapse = !hasMore && total > INITIAL_COUNT;
  const activePortfolio = portfolios.find((p) => p.id === activePortfolioId);

  const handleToggle = () => {
    if (hasMore) {
      setVisibleItems((count) => Math.min(count + PAGE_SIZE, total));
      return;
    }
    setVisibleItems(INITIAL_COUNT);
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        {(hasMore || canCollapse) && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={handleToggle}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent/50 hover:text-accent"
            >
              {hasMore ? "Show more work" : "Show less"}
              {hasMore ? (
                <FiArrowDown className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-y-0.5" />
              ) : (
                <FiArrowUp className="h-4 w-4 text-accent transition-transform duration-300 group-hover:-translate-y-0.5" />
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
