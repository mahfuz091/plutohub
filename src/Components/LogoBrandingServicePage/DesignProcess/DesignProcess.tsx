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
    title: "Brand Discovery",
    description:
      "We begin by understanding your business values, goals, and target audience. This step reveals what makes your brand unique and establishes the strategic foundation for everything that follows.",
  },
  {
    id: 2,
    image: "/images/Visual.png",
    step: "Step 2",
    title: "Visual Exploration",
    description:
      "We explore visual directions that reflect your brand personality. Moodboards, style inspiration, and creative concepts are developed to guide the design of a cohesive and authentic brand identity.",
  },
  {
    id: 3,
    image: "/images/Market.png",
    step: "Step 3",
    title: "Market & Competitor Research",
    description:
      "An in-depth analysis of your industry and competitors enables us to identify opportunities and gaps. This insight allows us to position your brand effectively and ensure it stands out in your space.",
  },
  {
    id: 4,
    image: "/images/Market.png",
    step: "Step 4",
    title: "Creative Design",
    description:
      "We craft your brand visuals — from logos to color palettes — ensuring each element aligns perfectly with your strategy and resonates with your target audience.",
  },
  {
    id: 5,
    image: "/images/Market.png",
    step: "Step 5",
    title: "Final Delivery",
    description:
      "Your complete brand identity package is delivered with all assets, ready to launch and make an impact across platforms.",
  },
];

const DesignProcess = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false, 
    focusOnSelect: false,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <div className="design-process ">
        <Image
                src="/images/idu.png"
                alt="yellow ellipse"
                width={1800}
                height={1300}
                className="ellipse-recentwork"
              />
      <Container>
        
        <Row className="align-items-center mb-5">
          <Col xl={7}>
            <h5 className="text-left web-title">
              Our Strategic Branding & <br /> Identity Design Process
            </h5>
          </Col>

          <Col xl={5}>
            <h2 className="text-right web-description gray">
              We follow a structured branding process that transforms ideas into
              iconic brand identities. From discovery to final delivery, each
              step is crafted to ensure your brand stands out with clarity,
              purpose, and impact.
            </h2>
          </Col>
        </Row>

        
        <div className="process-tabs d-flex gap-1 mb-4  justify-content-between flex-wrap">

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
              <div className="process-card mx-auto">
                <div className="process-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={460}
                    height={300}
                    layout="responsive"
                    className="rounded-3"
                  />
                </div>
                <div className="process-content mt-4">
                  <p className="process-step white">{item.step}</p>
                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-description gray">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        </div>
        
        <div className="d-flex justify-content-end justify-content-md-end justify-content-center gap-3 nav-mt-arrow ">
          <span
            className="nav-arrow"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <MoveLeft size={24} />
          </span>
          <span
            className="nav-arrow"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <MoveRight size={24} />
          </span>
        </div>
      </Container>

      
    </div>
  );
};

export default DesignProcess;
