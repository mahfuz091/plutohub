"use client";

import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider, { Settings } from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import CardService from "./Card";

interface Stat {
  icon: string;
  title: string;
  text: string;
}

const Services: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutShapeRef = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title letters
    document.querySelectorAll<HTMLElement>(".title_animation2").forEach((heading) => {
      const text = heading.textContent || "";
      const wrappedText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      heading.innerHTML = wrappedText;

      gsap.from(heading.querySelectorAll("span"), {
        scrollTrigger: {
          trigger: ".service_area",
          start: "top -8%",
          end: "bottom top",
        },
        opacity: 0.3,
        stagger: 0.2,
        duration: 0.5,
      });
    });

    // Reveal animation
    if (aboutShapeRef.current && aboutRef.current) {
      gsap.set(aboutShapeRef.current, { opacity: 0, y: 30, scale: 0.9 });
      gsap.to(aboutShapeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: aboutRef.current, start: "top 80%" },
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!aboutRef.current || !aboutShapeRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = ((e.clientX - centerX) / rect.width) * 30;
      const deltaY = ((e.clientY - centerY) / rect.height) * 30;

      gsap.to(aboutShapeRef.current, {
        x: deltaX,
        y: deltaY,
        rotation: deltaX * 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      if (image2Ref.current) {
        gsap.to(image2Ref.current, {
          x: deltaX * 1.2,
          y: deltaY * 1.2,
          rotation: deltaX * 0.15,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      [aboutShapeRef.current, image2Ref.current].forEach((img) => {
        if (!img) return;
        gsap.to(img, { x: 0, y: 0, rotation: 0, duration: 1 });
      });
    };

    const section = aboutRef.current;
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
      section?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Slider settings with types
  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const stats: Stat[] = [
    {
      icon: "/images/services-redesign.svg",
      title: "Website Design & Re-design",
      text: "Your website should look good and perform well. Whether you're starting fresh or giving it a facelift, we design clean, responsive sites that feel modern and convert better.",
    },
    {
      icon: "/images/services-webflow.svg",
      title: "Website Information Architecture",
      text: "Our team combines creative minds, strategic thinkers, and tech specialists.",
    },
    {
      icon: "/images/servicesStrategy.svg",
      title: "Website Strategy",
      text: "Every great website begins with a well-planned strategy. We help you define goals, understand your users, and map out a clear plan to build a site that works.",
    },
    {
      icon: "/images/services-webflow.svg",
      title: "Webflow Development",
      text: "Want something sleek and smooth? With Webflow, we build responsive websites that feel modern, move beautifully, and don't need heavy backend development.",
    },
    
  ];

  return (
    <section className="service_about_area about_area services web-design" ref={aboutRef}>
        
      <Container>
        <Row>
          <Col xl={5}>
            <h5 className="text-left">Our Services</h5>
            <Image
              src="/images/services-bg.png"
              width={344}
              height={400}
              alt="background"
              className="services-bg"
            />
            <Image
              ref={image2Ref}
              src="/images/about-shape.png"
              width={244}
              height={200}
              alt="shape"
              className="services-shape"
            />
          </Col>

          <Col xl={6}>
            <h2 className="title_animation2 text-right">
              Our Custom Website Design and Development Solutions
            </h2>
          </Col>
        </Row>

        <Slider {...sliderSettings} ref={sliderRef} className="mt-5">
          {stats.map((item, index) => (
            <div key={index}>
              <CardService icon={item.icon} title={item.title} text={item.text} />
            </div>
          ))}
        </Slider>

       <div className="d-flex  justify-content-md-end justify-content-center gap-3 nav-mt-arrow">
  <span className="nav-arrow" onClick={() => sliderRef.current?.slickPrev()}>
    <MoveLeft size={24} />
  </span>
  <span className="nav-arrow" onClick={() => sliderRef.current?.slickNext()}>
    <MoveRight size={24} />
  </span>
</div>

      </Container>
    </section>
  );
};

export default Services;
