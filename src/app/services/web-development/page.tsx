import WebDesignDevPage from "@/Components/WebDesignDevPage/WebDesignDevPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description: "Professional Web Design & Development Services | Plutohob",
};
const Web = () => {
  return (
    <div>
      <WebDesignDevPage />
    </div>
  );
};

export default Web;
