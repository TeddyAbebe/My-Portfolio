import React, { useEffect, useRef } from "react";
import portfolios from "../../assets/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModal]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-30 z-40"></div>

      <div className="w-full h-full flex items-center justify-center z-50">
        <div
          ref={modalRef}
          className="mx-6 w-[600px] rounded-xl bg-white py-2 flex flex-col justify-center items-center gap-2 relative z-50"
        >
          <div className="w-[40%]">
            <figure>
              <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
            </figure>
          </div>

          <div className="px-5 text-justify sm:px-10 flex flex-col">
            <h2 className="font-serif underline">{portfolio.title}</h2>
            <p className="text-sm">{portfolio.description}</p>

            <div className="mt-5 flex flex-col sm:flex-row items-center">
              <h4 className="font-serif text-black sm:w-1/3 text-[18px] text-[700]">
                Technologies :
              </h4>

              <div className="grid grid-cols-3 w-full">
                {portfolio.technologies.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 flex justify-center items-center text-center rounded-md w-full h-12 px-1 py-1 text-xs sm:text-sm hover:bg-gray-300 cursor-pointer font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-5">
              <button className="w-24 flex justify-center items-center hover:scale-105 bg-[#5A5A5A] font-serif text-white text-xs p-1.5 mt-5 rounded-[5px] font-[500] hover:bg-slate-900 ease-in duration-300">
                <a href={portfolio.siteUrl} target="__blank">
                  Live Site
                  <i className="uil uil-arrow-right"></i>
                </a>
              </button>

              <a
                href={portfolio.github}
                target="__blank"
                className="hover:text-gray-200 rounded-md w-7 h-7 shadow-md border flex justify-center items-center hover:bg-slate-900 text-slate-900"
              >
                <i className="uil uil-github-alt text-lg"></i>
              </a>
            </div>

            <div className="absolute top-[0.7rem] right-[1rem] w-7 h-7 cursor-pointer rounded-md flex  justify-center items-center  hover:shadow-inner hover:shadow-slate-900">
              <button onClick={() => setShowModal(false)} className="">
                <i className="uil uil-times text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
