import ContactUs from "../../Components/ContactUs/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Plutohub. We'd love to hear from you!",
};

export default function ContactPage() {
  return <ContactUs />;
}
