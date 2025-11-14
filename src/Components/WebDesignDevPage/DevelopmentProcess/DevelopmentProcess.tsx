"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

const processData = [
  {
    id: 1,
    image: "/images/Brand.png",
    step: "Step 1",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your goals, target audience, and competitors. This helps us shape a website strategy that's focused, goal-oriented, and user-centric.",
  },

  {
    id: 2,
    image: "/images/Market.png",
    step: "Step 2",
    title: "Content & Architecture",
    description:
      "Next, we organize your content and plan the site structure. This ensures easy navigation and a seamless user experience.",
  },
  {
    id: 3,
    image: "/images/Visual.png",
    step: "Step 3",
    title: "Content & Architecture",
    description:
      "Next, we organize your content and plan the site structure. This ensures easy navigation and a seamless user experience.",
  },
  {
    id: 4,
    image: "/images/Brand.png",
    step: "Step 4",
    title: "Content & Architecture",
    description:
      "Next, we organize your content and plan the site structure. This ensures easy navigation and a seamless user experience.",
  },
  {
    id: 5,
    image: "/images/Market.png",
    step: "Step 5",
    title: "Content & Architecture",
    description:
      "Next, we organize your content and plan the site structure. This ensures easy navigation and a seamless user experience.",
  },
];

const DevelopmentProcess = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.5,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current?.slickGoTo(index);

    setTimeout(() => {
      document
        .querySelector(".design-process .slick-list")
        ?.scrollTo({ left: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="design-process web-pro">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1800}
        height={1300}
        className="ellipse-recentwork"
      />
      <Container>
        <Row className="align-items-center mb-3 mb-md-5">
          <Col xl={7}>
            <h5 className="text-left web-title text-start">
              Our Strategic Branding & <br /> Identity Design Process
            </h5>
          </Col>

          <Col xl={5}>
            <h2 className="text-right web-description text-start">
              We follow a structured branding process that transforms ideas into
              iconic brand identities. From discovery to final delivery, each
              step is crafted to ensure your brand stands out with clarity,
              purpose, and impact.
            </h2>
          </Col>
        </Row>

        <div className="process-tabs d-flex flex-wrap gap-1  mb-md-4   g-4 xl:g-0">
          {processData.map((item, index) => (
            <button
              key={item.id}
              className={`process-tab ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item.step}
            </button>
          ))}
        </div>

        <div className="pr-card">
          <Slider {...sliderSettings} ref={sliderRef}>
            {processData.map((item) => (
              <div key={item.id}>
                <div className="process-cards mx-auto">
                  <Row>
                    <Col xl={6}>
                      <div className="process-image">
                        <Image
                          src={item.image}
                          alt={item.image}
                          width={800}
                          height={300}
                          layout="responsive"
                          className="rounded-3"
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="process-content mt-4">
                        <p className="process-step">{item.step}</p>
                        <h3 className="process-title">{item.title}</h3>
                        <p className="process-description">
                          {item.description}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default DevelopmentProcess;
