import UiUxServicePage from "@/Components/UiUxServicePage/UiUxServicePage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "UI & UX Design Services",
  description: "Professional UI & UX Design Services | Plutohob",
};
const page = () => {
  return (
    <div>
      <UiUxServicePage />
    </div>
  );
};

export default page;
