import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SWIPE_THRESHOLD = 40;

const arrowClass =
  "absolute top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-black/70 focus-visible:opacity-100 group-hover/carousel:opacity-100";

/**
 * Screenshot slider. With a single image it renders a plain image; with
 * several it adds dot pagination, arrows (on hover) and touch swipe.
 * Pass `onOpen` to make clicking the image trigger an action.
 */
const ImageCarousel = ({ images, alt, className = "", onOpen, openLabel }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const count = images.length;
  const hasMany = count > 1;
  const goTo = (next) => setIndex((next + count) % count);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <div
      className={`group/carousel relative overflow-hidden bg-subtle ${className}`}
      role="group"
      aria-roledescription={hasMany ? "carousel" : undefined}
      aria-label={hasMany ? `${alt} screenshots` : undefined}
      onTouchStart={hasMany ? handleTouchStart : undefined}
      onTouchEnd={hasMany ? handleTouchEnd : undefined}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={`${src}-${i}`} className="h-full w-full shrink-0 overflow-hidden">
            <img
              src={src}
              alt={i === 0 ? alt : `${alt} screenshot ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/carousel:scale-105"
            />
          </div>
        ))}
      </div>

      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="absolute inset-0 z-[1] cursor-pointer"
          aria-label={openLabel}
        />
      )}

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className={`${arrowClass} left-3`}
            aria-label="Previous screenshot"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className={`${arrowClass} right-3`}
            aria-label="Next screenshot"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-[2] flex justify-center">
            <div className="pointer-events-auto flex items-center rounded-full bg-black/50 px-2 backdrop-blur">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show screenshot ${i + 1} of ${count}`}
                  aria-current={i === index ? "true" : undefined}
                  className="flex h-5 items-center px-[3px]"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
