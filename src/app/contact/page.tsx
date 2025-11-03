import ContactUs from "../../Components/ContactUs/ContactUs";
import { Metadata } from "next";



export const metadata: Metadata = {
  metadataBase: new URL("https://plutohub.agency"),
  alternates: {
    canonical: "/contact",
  },
  title: "Ready to Start? Contact Us and Get Your Quote",
  description: "Need support or want a project estimate? Contact Us through our simple form or give us a call. We look forward to hearing about your business needs!",
  openGraph: {
    title: "Ready to Start? Contact Us and Get Your Quote",
    description: "Need support or want a project estimate? Contact Us through our simple form or give us a call. We look forward to hearing about your business needs!",
  },
};




export default function ContactPage() {
  return <ContactUs />;
}
