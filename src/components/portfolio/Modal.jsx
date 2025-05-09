import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Modal = ({ portfolio, onClose }) => {
  const modalRef = useRef(null);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!portfolio) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
      <div
        ref={modalRef}
        className="relative mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl sm:mx-6 sm:max-w-xl transform transition-all duration-300 scale-100 hover:scale-[1.02]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-0 top-0 text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
          aria-label="Close modal"
        >
          <IoClose className="h-6 w-6" />
        </button>

        {/* Portfolio Image */}
        <div className="mb-6 w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={portfolio.imgUrl}
            alt={portfolio.title || "Portfolio project"}
            className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Portfolio Details */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {portfolio.title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            {portfolio.description}
          </p>  
        </div>
      </div>
    </div>
  );
};

export default Modal;
