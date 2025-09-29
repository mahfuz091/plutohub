"use client";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Clientlogo from "../Components/Clientlogo/Clientlogo";
import Projects from "../Components/Projects/Projects";
import Services from "../Components/Service/Services";
import Promo from "../Components/Promo/Promo";
import Price from "../Components/Price/Price";
import WhyWe from "../Components/WhyWe/WhyWe";
import TestimonialsSection from "../Components/Testimonial/testimonial";
import ContactSection from "../Components/contact/contact";
import FaqSection from "../Components/FAQ/faq";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <WhyWe />
      <Clientlogo />

      <Services />
      <Projects />

      <Promo />
      <TestimonialsSection />
      <Price />
      <ContactSection />
      <FaqSection />
    </>
  );
}
