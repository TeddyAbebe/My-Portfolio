import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";

const iconButtonClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-heading transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent";

const PortfolioCard = ({ portfolio, onOpen, index }) => (
  <article
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
  >
    <button
      type="button"
      onClick={() => onOpen(portfolio.id)}
      className="relative block h-48 w-full overflow-hidden bg-subtle"
      aria-label={`View details for ${portfolio.title}`}
    >
      <img
        src={portfolio.imgUrl}
        alt={portfolio.title}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">
          View Details <FiArrowRight className="h-4 w-4" />
        </span>
      </span>
    </button>

    <div className="flex flex-1 flex-col p-5">
      <span className="mb-2 self-start rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
        {portfolio.category}
      </span>

      <h3 className="mb-2 text-lg font-semibold text-heading">
        {portfolio.title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-body line-clamp-2">
        {portfolio.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
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

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
        <button
          type="button"
          onClick={() => onOpen(portfolio.id)}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2"
        >
          Details <FiArrowRight className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {portfolio.github && (
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconButtonClass}
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
              className={iconButtonClass}
              aria-label={`Visit ${portfolio.title} live site`}
              title="Visit Live Site"
            >
              <MdOpenInNew className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default PortfolioCard;
