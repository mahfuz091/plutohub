import { Metadata } from "next";
import AboutUs from "../../Components/AboutUs/AboutUs";
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Plutohub, our mission, vision, and team.",
};

export default function AboutPage() {
  return <AboutUs />;
}
