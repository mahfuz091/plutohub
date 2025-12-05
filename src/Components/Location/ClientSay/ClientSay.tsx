"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const ClientSay = () => {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    speed: 500,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
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
    <div className="pt-120">
      <div className="client-say-loc ">
        <Container>
          <h2 className="loc-title text-center"> What Clients Say About Us</h2>
          <div className="happy-client-wrapper">
            <span className="happy-client">Our Happy Customer From</span>
          </div>
          <div className="d-flex items-center justify-content-center gap-4">
            <img src="/assets/images/fiver.svg" alt="fiver" />
            <img src="/assets/images/upwork.svg" alt="upwork" />
          </div>
          <div className="clientreview-wrapper">
            <Slider ref={sliderRef} {...settings} className="clientreview">
              <div className="review-card">
                <div className="review-img">
                  <Image
                    src="/assets/images/client.png"
                    alt="client"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="review-content">
                  <p>
                    “We are pleased with the quality and comprehensiveness of
                    the outcomes, as well as the ongoing support. The team
                    recognized the limitations of mobile and web app
                    development, avoiding overly flashy designs that complicate
                    front-end coding. We are pleased with the quality and
                    comprehensiveness outcomes, as well as the ongoing support.”
                  </p>

                  <div className="review-footer">
                    <div>
                      <p className="client">Khaled Belkadi</p>
                      <p className="role">Product Manager</p>
                    </div>

                    <Image
                      src="/assets/images/fiver.svg"
                      alt="fiverr"
                      width={80}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-img">
                  <Image
                    src="/assets/images/client.png"
                    alt="client"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="review-content">
                  <p>
                    “We are pleased with the quality and comprehensiveness of
                    the outcomes, as well as the ongoing support. The team
                    recognized the limitations of mobile and web app
                    development, avoiding overly flashy designs that complicate
                    front-end coding. We are pleased with the quality and
                    comprehensiveness outcomes, as well as the ongoing support.”
                  </p>

                  <div className="review-footer">
                    <div>
                      <p className="client">Khaled Belkadi</p>
                      <p className="role">Product Manager</p>
                    </div>

                    <Image
                      src="/assets/images/fiver.svg"
                      alt="fiverr"
                      width={80}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-img">
                  <Image
                    src="/assets/images/client.png"
                    alt="client"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="review-content">
                  <p>
                    “We are pleased with the quality and comprehensiveness of
                    the outcomes, as well as the ongoing support. The team
                    recognized the limitations of mobile and web app
                    development, avoiding overly flashy designs that complicate
                    front-end coding. We are pleased with the quality and
                    comprehensiveness outcomes, as well as the ongoing support.”
                  </p>

                  <div className="review-footer">
                    <div>
                      <p className="client">Khaled Belkadi</p>
                      <p className="role">Product Manager</p>
                    </div>

                    <Image
                      src="/assets/images/fiver.svg"
                      alt="fiverr"
                      width={80}
                      height={40}
                    />
                  </div>
                </div>
              </div>
             

             
            </Slider>

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
        </Container>
      </div>
    </div>
  );
};

export default ClientSay;
