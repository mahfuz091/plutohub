"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
const industries = [
  { img: "/images/services-web/crypto.png", title: "Crypto" },
  { img: "/images/services-web/travel.png", title: "Travel" },
  { img: "/images/services-web/medical.png", title: "Medical" },
  { img: "/images/services-web/finance.png", title: "Finance" },
];

const IndustriesExpertise = () => {
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
    <div className="industries-expertise ">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1000}
        height={1200}
        className="ellipse-industries-expertise"
      />
      <Container>
        <div className="Industries-Expertise-heading mb-5">
          <Row>
            <Col xl={6}>
              <h2>
                Industries
                
                Expertise
              </h2>
            </Col>
            <Col xl={6}>
              <p className="gray">
                We deliver impactful branding and identity design services to
                industries such as Fintech, SaaS, Edtech, Healthcare, and
                E-Commerce. Our strategic, design-led approach helps brands
                connect, communicate, and thrive across diverse market
                landscapes.
              </p>
            </Col>
          </Row>
        </div>

        <Slider {...sliderSettings} ref={sliderRef}>
          {industries.map((item, index) => (
            <div className="industry-card position-relative overflow-hidden rounded-3">
              <Image
                src={item.img}
                alt={item.title}
                height={420}
                width={400}
                className=" "
              />
              <div className="industry-overlay position-absolute bottom-0   text-white py-3">
                <h5 className="mb-0">{item.title}</h5>
              </div>
            </div>
          ))}
        </Slider>

        <div className="d-flex justify-content-end gap-3 nav-mt-arrow ">
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

export default IndustriesExpertise;
