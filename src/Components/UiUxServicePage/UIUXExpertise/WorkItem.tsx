"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";

const workData = [
  {
    id: 1,
    title: "FinVault – Personal Finance App",
    desc: "We designed an intuitive mobile experience for FinVault, helping users track spending, set goals, and manage finances effortlessly. The clean UI and smart UX boosted user retention by 30%.",
    img: "/images/services-web/FinVault.png",
    link: "https://www.behance.net/gallery/230888791/Quantafit-AI-Fitness-app",
  },
  {
    id: 2,
    title: "Shopwise – E-commerce Web Redesign",
    desc: "A full redesign of Shopwise’s online store, focused on improving navigation, product discovery, and mobile responsiveness. The result: a sleek, modern interface and a 40% increase in conversions.",
    img: "/images/services-web/doctor.png",
    link: "https://dribbble.com/shots/25683228-Kayaking-Landing-Page",
  },
  {
    id: 3,
    title: "Educore – Learning Platform Dashboard",
    desc: "For Educore, we created a dashboard that simplifies student and teacher workflows. Through user research and smart UI decisions, we built an engaging, scalable design system.",
    img: "/images/services-web/eduocore-dashboard.png",
    link: "https://dribbble.com/shots/25469638-AI-Creativity-Landing-Page",
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
              <Image src={item.img} alt={item.title} height={330} width={333} />
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
