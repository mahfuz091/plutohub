import WebDesignDevPage from "@/Components/WebDesignDevPage/WebDesignDevPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Website Development Services: Build Your Digital Success ",
  description: "Need results? Professional website development that works. We build SEO-optimized, conversion-focused site that attract your ideal customers and maximize ROI.| Plutohob",
};
const Web = () => {
  return (
    <div>
      <WebDesignDevPage />
    </div>
  );
};

export default Web;
