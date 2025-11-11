"use client";
import React from "react";


const PlutoLoader = ({ text = "Loading PlutoHub..." }: { text?: string }) => {
  return (
    <div className="pluto-loader-screen">
      {/* floating P */}
      <div className="pluto-logo-wrap">
        <div className="pluto-logo">P</div>

        {/* floating particles */}
        <span className="pluto-particle particle-1"></span>
        <span className="pluto-particle particle-2"></span>
        <span className="pluto-particle particle-3"></span>
        <span className="pluto-particle particle-4"></span>
      </div>

      {/* progress bar */}
      <div className="pluto-progress-bar">
        <div className="pluto-progress-fill"></div>
      </div>

      <p className="pluto-loader-text">{text}</p>
    </div>
  );
};

export default PlutoLoader;
