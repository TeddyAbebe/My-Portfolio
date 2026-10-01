import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Modal = ({ portfolio, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    modalRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!portfolio) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
        tabIndex={-1}
        className="relative flex w-full max-w-xl max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur transition-colors hover:bg-slate-900/80"
          aria-label="Close modal"
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div className="h-36 w-full shrink-0 overflow-hidden bg-subtle sm:h-44">
          <img
            src={portfolio.imgUrl}
            alt={portfolio.title}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="space-y-3 overflow-hidden p-5 sm:p-6">
          <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            {portfolio.category}
          </span>
          <h2
            id="portfolio-modal-title"
            className="text-2xl font-semibold tracking-tight text-heading"
          >
            {portfolio.title}
          </h2>
          <p className="text-sm leading-6 text-body">
            {portfolio.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {portfolio.technologies?.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-line bg-subtle px-2.5 py-1 text-xs font-medium text-body"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {portfolio.siteUrl && (
              <a
                href={portfolio.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--flex !py-3 text-sm"
              >
                Live Site
                <MdArrowForward className="button__icon h-4 w-4" />
              </a>
            )}
            {portfolio.github && (
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--ghost button--flex !py-3 text-sm"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
