"use client";
import React from "react";


const Loading = () => {
  return (
    <div className="pluto-loader-screen">
      <div className="pluto-logo-wrap">
        <div className="pluto-logo">P</div>
        <span className="pluto-particle particle-1"></span>
        <span className="pluto-particle particle-2"></span>
        <span className="pluto-particle particle-3"></span>
        <span className="pluto-particle particle-4"></span>
      </div>

      <div className="pluto-progress-bar">
        <div className="pluto-progress-fill"></div>
      </div>

      <p className="pluto-loader-text">Loading PlutoHub...</p>
    </div>
  );
};

export default Loading;
