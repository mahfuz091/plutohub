import LogoBrandingServicePage from "@/Components/LogoBrandingServicePage/LogoBrandingServicePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/services/logo-and-branding",
  },
  title: "Expert Logo and Branding Services: Build Brand Identity",
  description: "Struggling with brand identity? Our logo and branding services provide complete brand solutions. Stand out from competitors. Transform your brand identity now.",
  openGraph: {
    title: "Expert Logo and Branding Services: Build Brand Identity",
    description: "Struggling with brand identity? Our logo and branding services provide complete brand solutions. Stand out from competitors. Transform your brand identity now.",
  },
};
const UiUx = () => {
  return (
    <div>
      <LogoBrandingServicePage />
    </div>
  );
};

export default UiUx;
