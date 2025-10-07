"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

const workData = [
  {
    id: 1,
    title: "FinVault – Personal Finance App",
    desc: "Meet Quantafit — an AI-powered fitness app that creates personalized routines based on your body, goals, and lifestyle. From zero-equipment training to progressive overload plans, it flexes with your schedule and experience level.",
    img: "/images/services-web/FinVault.png",
    link: "https://www.behance.net/gallery/230888791/Quantafit-AI-Fitness-app",
  },
  {
    id: 2,
    title: "Kayaking Landing Page",
    desc: "We made this kayaking landing page to help you find your next adventure easily. Our goal was to make booking your trip simple and exciting. If you’re new to kayaking or already experienced, this design makes it easy to get started.",
    img: "/images/services-web/doctor.png",
    link: "https://dribbble.com/shots/25683228-Kayaking-Landing-Page",
  },
  {
    id: 3,
    title: "AI Creativity: Unlock Your Creative Potential",
    desc: "These AI tools automate tasks and create stunning visuals in minutes, making your work easier, faster, and more creative.",
    img: "/images/services-web/eduocore-dashboard.png",
    link: "https://dribbble.com/shots/25469638-AI-Creativity-Landing-Page",
  },
  {
    id: 4,
    title: "Hotel Booking Landing Page",
    desc: "We designed this hotel booking landing page to make finding the perfect stay easy and stress-free. Because booking a getaway should feel as good as the trip itself!",
    img: "/images/services-web/FinVault.png",
    link: "https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page",
  },
  {
    id: 5,
    title: "Shopwise Landing Page",
    desc: "We designed this landing page to make finding the perfect products easy and stress-free.",
    img: "/images/services-web/shopwise.png",
    link: "https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page",
  },
  {
    id: 6,
    title: "Eduocore Landing Page",
    desc: "We designed this landing page to make finding the perfect education platform easy and stress-free.",
    img: "/images/services-web/eduocore.png",
    link: "https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page",
  },
];

const WorkItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
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
    <div className="project_wrapper-web">
      <Slider {...settings} ref={sliderRef}>
        {workData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            className="project_item"
          >
            <div className="pr_image">
              <Image
                src={item.img}
                alt={item.title}
                height={330}
                width={333}
              />
            </div>
            <div className="pr_content-web">
              <h3 className="ph-text">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </a>
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
    </div>
  );
};

export default WorkItem;
