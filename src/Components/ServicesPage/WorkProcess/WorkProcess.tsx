"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const WorkProcess = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
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

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const processSteps = [
    {
      id: 1,
      icon: "/images/discover-service.svg",
      title: "Discovery & Strategy",
      des: "We start by understanding your goals, audience, and ideas. This includes discussing your needs, researching your industry, and creating a clear plan for the project.",
    },
    {
      id: 2,
      icon: "/images/design-service.svg",
      title: "Design & Iteration",
      des: "We bring ideas to life with wireframes and mockups, sharing progress and refining designs based on your feedback until everything feels just right.",
    },
    {
      id: 3,
      icon: "/images/review-service.svg",
      title: "Development & Implementation",
      des: "Once approved, we turn the design into a fully functional product. Whether it’s Webflow, WordPress, Shopify, or custom development, we focus on responsiveness, performance, and smooth interactions.",
    },
    {
      id: 4,
      icon: "/images/development-service.svg",
      title: "Review, Launch & Support",
      des: "Turn designs into functional products with clean, scalable code.",
    },
  ];

  return (
    <section className="work-process ">
      <Image
        src="/images/yellow.png"
        alt="yellow ellipse"
        width={400}
        height={400}
        className="ellipse ellipse-top-left"
      />
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1200}
        height={800}
        className=" ellipse-workprocess"
      />
      <Container>
        <div className="text-center process-heding">
          <h2 className="service-title ">Our Work Process</h2>
          <p className="service-description">
            We follow a clear, collaborative process to ensure great results
            every time.
          </p>
        </div>
        <Slider {...sliderSettings} ref={sliderRef} className="">
          {processSteps.map((step) => (
            <div key={step.id} className="">
              <div className="process-card  ">
                <img src={step.icon} alt={step.title} className="mb-3" />
                <h5 className="heading">{step.title}</h5>
                <p className="description">{step.des}</p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <span className="nav-arrow" onClick={handlePrevClick}>
            <MoveLeft size={24} />
          </span>
          <span className="nav-arrow" onClick={handleNextClick}>
            <MoveRight size={24} />
          </span>
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;
