"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

const features = [
  {
    id: 1,
    img: "/images//UiUx-Service/easy.svg",
    title: "Make It Easy for People to Use Your Product",
    desc: "We design interfaces that feel natural, so users know what to do — and enjoy doing it.",
    list: [
      "Simple layouts that guide users clearly",
      "Less confusion, more action",
      "Easy navigation for any age or skill level",
      "Designed for real people, not just designers",
    ],
  },
  {
    id: 2,
    img: "/images/UiUx-Service/grow.svg",
    title: "Grow Without Rebuilding Everything",
    desc: "Our designs grow with your business — no need to redesign every time you scale.",
    list: [
      "Built to support new features easily",
      "Works for both startups and big teams",
      "Easy to update as things change",
      "Saves time and cost as you grow",
    ],
  },
  {
    id: 3,
    img: "/images/UiUx-Service/real.svg",
    title: "See Real Results, Not Just Good Looks",
    desc: "We focus on what matters — helping users take action and helping your business grow.",
    list: [
      "Boosts signups, sales, or whatever you need",
      "Helps users complete tasks faster",
      "Supports your business goals directly",
      "Designed to get results, not just compliments",
    ],
  },
];

const RealResults = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    <div className="result-uiux">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1200}
        height={800}
        className=" ellipse-benefits"
      />
      <Image
        src="/images/LogoBranding/benefits-vector.png"
        alt="yellow ellipse"
        width={390}
        height={403}
        className=" ellipse-benefits-vector"
      />
      <Image
        src="/images/contact-vector.png"
        alt="yellow ellipse"
        width={390}
        height={403}
        className="ellipse-benefits-vector-2"
      />

      <Container>
        <div className="uiux-result-header text-start text-md-center">
          <h2 className="text-start text-md-center">How Our UX/UI Design Services Drive Real Results?</h2>
          <p className="gray">
            Our UX/UI design services combine strategy, creativity, and data to
            deliver real business outcomes. We craft user-centric interfaces
            that boost engagement, improve usability, and drive higher
            conversions across digital platforms.
          </p>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {features.map((feature) => (
            <div key={feature.id} className="result-card">
              <div className="">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="">{feature.title}</h3>
              <p className="gray">{feature.desc}</p>
              <ul className="list-unstyled white">
                {feature.list.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-2 list">
                    <img
                      src="/images/UiUx-Service/right.svg"
                      alt="check"
                      width={24}
                      height={24}
                      className="me-2"
                    />
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>

        <div className="d-flex justify-content-end justify-content-md-end justify-content-center gap-3 nav-mt-arrow mobile-top">
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

export default RealResults;
