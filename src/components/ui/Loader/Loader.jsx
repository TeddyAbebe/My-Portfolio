import React, { useEffect, useState } from "react";

const VISIBLE_MS = 20000;
const FADE_MS = 600;

const Loader = ({ onDone }) => {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), VISIBLE_MS);
    const doneTimer = setTimeout(onDone, VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`boot${hiding ? " boot--hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="boot__buddy" aria-hidden="true">
        <div className="boot__body">
          <span className="boot__arm">
            <i></i>
          </span>
          <span className="boot__eye">
            <i></i>
          </span>
          <span className="boot__eye">
            <i></i>
          </span>
          <span className="boot__glasses"></span>
          <span className="boot__smile"></span>
        </div>
        <div className="boot__shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
