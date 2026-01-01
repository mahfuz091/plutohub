"use client";
import { ArrowLeft, ArrowRight, MapPin, MapPinCheckInside } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    image: "/assets/images/web/alvarez.png",
    text: " “Shahin has been incredible. He went above and beyond our expectations, and we couldn’t be happier with how the page looks. The quality of the Figma design, attention to detail, and responsiveness throughout the process were outstanding. We’re actually hiring him again for future client projects- highly recommended.”",
    name: "Lucas Alvarez",
    role: "Head of PPC",
    location: "Melbourne, Australia",
    company: "Double Espresso",
    platformIcon: "/assets/images/web/double.svg",
  },
  {
    id: 2,
    image: "/assets/images/web/marom.png",
    text: "“I’m very happy with the mobile app UI/UX design delivered by the Plutohub team. They worked closely with my app developer, maintained clear communication, and provided full end-to-end support to ensure everything was executed properly.”",
    name: "Capt. Golan Z. Marom",
    role: "CEO & Founder",
    location: "New York, USA",
    company: "Goa Karma",
    platformIcon: "/assets/images/web/goa-karma.svg",
  },
  {
    id: 3,
    image: "/assets/images/web/wegner.png",
    text: "“Shahinul and the Plutohub team have been a pleasure to work with on our SaaS product UI/UX design. They delivered professional, well-structured designs and supported the project from start to finish.”",
    name: "Khaled Belkadi",
    role: "IGNITE C/ETRM",
    location: "Houston, TX",
    company: "IGNITE C/ETRM",
    platformIcon: "/assets/images/web/ignite.svg",
  },
];

const ClientSay = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState("next");

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

  const clickPrev = () => {
    setActive("prev");
    sliderRef.current?.slickPrev();
  };

  const clickNext = () => {
    setActive("next");
    sliderRef.current?.slickNext();
  };

  return (
    <div className="pt-120">
      <div className="client-say-loc">
        <Container>
          <h2 className="loc-title text-center">
            What Clients Say About Us
          </h2>

          <div className="clientreview-wrapper">
            <Slider ref={sliderRef} {...settings} className="clientreview">
              {reviews.map((item) => (
                <div className="review-card" key={item.id}>
                  <div className="review-img">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                    />
                  </div>

                  <div className="review-content">
                    <p>{item.text}</p>

                    <div className="review-footer">
                      <div>
                        <p className="client">{item.name}</p>
                        <p className="role mt-1">{item.role}</p>
                      </div>

                      <div className="">
                        <div className="d-flex align-items-center  gap-2">
                          <div className="">
                            <Image
                              src={item.platformIcon}
                              alt="platform"
                              width={25}
                              height={25}
                              className=""
                            />
                          </div>
                          <div className="">
                            <span className="client">{item.company}</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-1 mt-1 role">
                          <MapPin size={20} /> <span className="m-0">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <button
              onClick={clickPrev}
              className={`nav-btn-loc prev-btn-loc ${active === "prev" ? "active" : ""
                }`}
            >
              <ArrowLeft />
            </button>

            <button
              onClick={clickNext}
              className={`nav-btn-loc next-btn-loc ${active === "next" ? "active" : ""
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
