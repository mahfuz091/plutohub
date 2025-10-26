import LogoBrandingServicePage from "@/Components/LogoBrandingServicePage/LogoBrandingServicePage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logo & Branding Services",
  description: "Professional Logo & Branding Services | Plutohob",
};

const UiUx = () => {
  return (
    <div>
      <LogoBrandingServicePage />
    </div>
  );
};

export default UiUx;
