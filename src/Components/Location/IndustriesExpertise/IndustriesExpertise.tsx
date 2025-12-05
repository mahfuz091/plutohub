"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
const IndustriesExpertise = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    speed: 500,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, 
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  const [active, setActive] = useState("next");

  const clickPrev = () => {
    setActive("prev");
    handlePrev();
  };

  const clickNext = () => {
    setActive("next");
    handleNext();
  };
  return (
    <div className="pt-120 industries-expertise-loc">
      <Container>
        <div className="d-flex justify-content-between gap-2 flex-wrap industries-expertise-content">
          <h2 className="loc-title">Industries Expertise</h2>
          <p className="loc-des">
            PlutoHub supports teams across fast-growing sectors by shaping
            clear, intuitive digital experiences. Our work spans SaaS, fintech,
            ecommerce, hospitality, and more, helping modern brands communicate
            with clarity and build meaningful connections in competitive
            markets.
          </p>
        </div>

        <div className="pt-60">
          <Slider
            ref={sliderRef}
            {...settings}
            className="industries-expertise-slide-loc"
          >
            <div className="industries-expertise-slide-loc-card">
              <img src="/assets/images/crypto.png" className="card-image" />
              <div className="card-overlay"></div>
              <h6 className="card-title">Crypto</h6>
            </div>
            <div className="industries-expertise-slide-loc-card">
              <img src="/assets/images/travel.png" className="card-image" />
              <div className="card-overlay"></div>
              <h6 className="card-title">Travel</h6>
            </div>
            <div className="industries-expertise-slide-loc-card">
              <img src="/assets/images/medical.png" className="card-image" />
              <div className="card-overlay"></div>
              <h6 className="card-title">Medical</h6>
            </div>
            <div className="industries-expertise-slide-loc-card">
              <img src="/assets/images/finance.png" className="card-image" />
              <div className="card-overlay"></div>
              <h6 className="card-title">Finance</h6>
            </div>
            
          </Slider>
          <div className="d-flex justify-content-center justify-content-md-end mt-5 mt-md-5 gap-3">
             <button
              id="prevBtn"
              onClick={clickPrev}
              className={`nav-btn-loc prev-btn-loc ${
                active === "prev" ? "active" : ""
              }`}
            >
              <ArrowLeft />
            </button>

            <button
              id="nextBtn"
              onClick={clickNext}
              className={`nav-btn-loc next-btn-loc ${
                active === "next" ? "active" : ""
              }`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndustriesExpertise;
