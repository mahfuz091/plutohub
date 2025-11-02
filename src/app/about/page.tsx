import { Metadata } from "next";
import AboutUs from "../../Components/AboutUs/AboutUs";
export const metadata: Metadata = {
  title: "About Us: Your Trusted Digital Solutions Partner",
  description: "Learn about us - the dedicated team behind your success. See our story, our core values, and the expertise we bring to every development and design project.",
};

export default function AboutPage() {
  return <AboutUs />;
}
