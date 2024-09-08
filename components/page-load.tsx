"use client"; // This marks the component as a Client Component

import React, { useEffect } from "react";

const PageLoadAnimation: React.FC = () => {
  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        document.body.classList.remove("is-preload");
      }, 100);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return null; // This component only handles the effect, no need to render anything
};

export default PageLoadAnimation;
