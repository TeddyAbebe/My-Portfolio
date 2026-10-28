import { useEffect } from "react";

const MAX_VISIBLE_MS = 3000;
const FADE_MS = 600;

const Loader = ({ onDone }) => {
  useEffect(() => {
    const boot = document.getElementById("boot");
    if (!boot) {
      onDone();
      return undefined;
    }

    let pageLoaded = document.readyState === "complete";
    let minTimePassed = false;
    let finished = false;
    let removeTimer;

    const finish = () => {
      if (finished || !pageLoaded || !minTimePassed) return;
      finished = true;
      boot.classList.add("boot--hide");
      removeTimer = setTimeout(() => {
        boot.remove();
        onDone();
      }, FADE_MS);
    };

    const onLoad = () => {
      pageLoaded = true;
      finish();
    };

    if (!pageLoaded) window.addEventListener("load", onLoad);

    const maxTimer = setTimeout(() => {
      minTimePassed = true;
      finish();
    }, MAX_VISIBLE_MS);

    return () => {
      clearTimeout(maxTimer);
      clearTimeout(removeTimer);
      window.removeEventListener("load", onLoad);
    };
  }, [onDone]);

  return null;
};

export default Loader;
