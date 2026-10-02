import React, { useState } from "react";
import "./GlassImage.css";

const GlassImage = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span className={`glass-frame ${className}`}>
      {!isLoaded && <span className="glass-shimmer" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={`glass-frame__img ${isLoaded ? "is-ready" : ""}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </span>
  );
};

export default GlassImage;
