import WebDesignDevPage from "@/Components/WebDesignDevPage/WebDesignDevPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/services/web-development",
  },
  title: "Website Development Services: Build Your Digital Success ",
  description:
    "Need results? Professional website development that works. We build SEO-optimized, conversion-focused site that attract your ideal customers and maximize ROI.",
  openGraph: {
    title: "Website Development Services: Build Your Digital Success ",
    description:
      "Need results? Professional website development that works. We build SEO-optimized, conversion-focused site that attract your ideal customers and maximize ROI.",
    images: [
      {
        url: "/images/opengraph/service-web-development.png", // local image from public folder
        alt: "My OG Image",
      },
    ],
  },
};

const Web = () => {
  return (
    <div>
      <WebDesignDevPage />
    </div>
  );
};

export default Web;
