import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";
import ImageCarousel from "../../ui/ImageCarousel";
import { getProjectImages } from "./portfolioData";

const PortfolioCard = ({ portfolio, onOpen, index }) => (
  <article
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
  >
    <ImageCarousel
      images={getProjectImages(portfolio)}
      alt={portfolio.title}
      className="aspect-[16/9] w-full border-b border-line"
      onOpen={() => onOpen(portfolio.id)}
      openLabel={`View details for ${portfolio.title}`}
    />

    <div className="flex flex-1 flex-col p-6">
      <span className="mb-3 inline-flex items-center gap-2 self-start rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {portfolio.category}
      </span>

      <h3 className="mb-2 text-xl font-semibold tracking-tight text-heading">
        {portfolio.title}
      </h3>

      <p className="mb-5 text-sm leading-6 text-body line-clamp-3">
        {portfolio.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-1.5">
        {portfolio.technologies?.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-line bg-subtle px-2 py-0.5 text-xs font-medium text-body"
          >
            {tech}
          </span>
        ))}
        {portfolio.technologies?.length > 4 && (
          <span className="rounded-md px-1 py-0.5 text-xs font-medium text-muted">
            +{portfolio.technologies.length - 4}
          </span>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
        <button
          type="button"
          onClick={() => onOpen(portfolio.id)}
          className="inline-flex items-center gap-1 text-sm font-semibold text-heading transition-all hover:gap-2 hover:text-accent"
        >
          Details <FiArrowRight className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {portfolio.github && (
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              aria-label={`${portfolio.title} source code on GitHub`}
              title="View on GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
          {portfolio.siteUrl && (
            <a
              href={portfolio.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-alt px-4 py-2 text-sm font-semibold text-on-accent shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Live demo
              <MdOpenInNew className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default PortfolioCard;
