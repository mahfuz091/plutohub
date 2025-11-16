"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="pluto-screen">
      <div className="pluto-orbit-wrap">
        <div className="pluto-core">P</div>
        <div className="pluto-ring"></div>
        <div className="pluto-orb"></div>
      </div>

      <div className="pluto-bar">
        <div className="pluto-bar-fill"></div>
      </div>

      <p className="pluto-text">Launching PlutoHub...</p>
    </div>
  );
};

export default Loading;
