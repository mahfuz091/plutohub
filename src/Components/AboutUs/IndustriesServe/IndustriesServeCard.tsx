"use client";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

import { useRef, useState } from "react";

const IndustriesServeCard = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1, variableWidth: false } },
    ],
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const testimonialsData = [
    {
      id: 1,
      img: "/images/saas.png",
      title: "SaaS",
      des: "SaaS design made simple and scalable. We create intuitive flows that help users get started fast and keep your product ready to grow.",
    },
    {
      id: 2,
      img: "/images/fintech.png",
      title: "Fintech",
      des: "Money moves fast, and trust is everything. Our fintech designs strike a balance between sleek visuals and strong functionality.",
    },
    {
      id: 3,
      img: "/images/helthcare.png",
      title: "Healthcare",
      des: "Robust financial tools designed to provide clear insights and help users manage money smarter.",
    },
    {
      id: 4,
      img: "/images/medTech.png",
      title: "MedTech",
      des: "MedTech design blends precision with empathy. We craft interfaces that make complex tools feel clear, from diagnostics to patient dashboards.",
    },
    {
      id: 5,
      img: "/images/edtech.png",
      title: "Edtech",
      des: "Learning occurs most effectively when the experience is seamless. We build engaging, focused interfaces that support curiosity, at any age, on any screen.",
    },
    {
      id: 6,
      img: "/images/travel.png",
      title: "Travel & Lifestyle",
      des: "We design the digital side of adventure. Smooth bookings, rich content, and visuals that inspire exploration without slowing users down.",
    },
    {
      id: 7,
      img: "/images/ecomarce.png",
      title: "E-commerce & More",
      des: "Shopping should feel effortless and personal. From product discovery to checkout, we create sleek, responsive, conversion-ready online stores.",
    },
  ];

  return (
    <section className="testimonail IndustriesServ-no-margin-right">
      <Container>
        <Slider {...sliderSettings} ref={sliderRef}>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="industry-card d-flex flex-column align-items-center  text-center idus_why_fact_item no-margin"
            >
              <div className="industry-image-wrapper">
                <Image
                  src={testimonial.img}
                  width={40}
                  height={40}
                  alt={testimonial.title}
                  className="industry-image"
                />
              </div>
              <h6>{testimonial.title}</h6>
              <p>{testimonial.des}</p>
            </div>
          ))}
        </Slider>
      </Container>

      <Container>
        <Row className="text-center arrow-testi ">
          <Col xl={12}>
            <div className="testi-navigation d-flex justify-content-end align-items-end gap-3">
             
              <div>
                {testimonialsData.map((_, index) => (
                  <span
                    key={index}
                    className={`testi-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>

              
              <div className="testi-nav d-flex gap-3">
                <span className="testi-arrow-left" onClick={handlePrevClick}>
                  <MoveLeft size={24} />
                </span>
                <span className="testi-arrow-right" onClick={handleNextClick}>
                  <MoveRight size={24} />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default IndustriesServeCard;
