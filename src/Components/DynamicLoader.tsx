"use client";

import React, { useEffect, useState } from "react";
import NProgress from "nprogress";


interface DynamicLoaderProps {
  fetchData?: () => Promise<any>; // optional API call
  text?: string;
  onFinish?: () => void;
}

const DynamicLoader: React.FC<DynamicLoaderProps> = ({ fetchData, text = "Loading PlutoHub...", onFinish }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false, minimum: 0.1, speed: 400 });
    NProgress.start();

    const loadData = async () => {
      try {
        if (fetchData) await fetchData();
      } catch (err) {
        console.error(err);
      }

      NProgress.done();

      // fade out loader after short delay
      setTimeout(() => {
        setHidden(true);
        if (onFinish) onFinish();
      }, 300);
    };

    loadData();
  }, [fetchData, onFinish]);

  if (hidden) return null;

  return (
    <div className="pluto-loader-screen">
      <div className="pluto-logo-wrap">
        <div className="pluto-logo">P</div>
        <span className="pluto-particle particle-1"></span>
        <span className="pluto-particle particle-2"></span>
        <span className="pluto-particle particle-3"></span>
        <span className="pluto-particle particle-4"></span>
      </div>

      <p className="pluto-loader-text">{text}</p>
    </div>
  );
};

export default DynamicLoader;
