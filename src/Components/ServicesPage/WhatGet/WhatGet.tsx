import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const WhatGet = () => {
  const processCards = [
    {
      icon: "/images/creative-solution.png",
      title: "Creative Solutions That Work",
      description: "Our approach blends strategy, creativity, and technology to deliver designs that don't just look great but also achieve real business results.",
    },
    {
      icon: "/images/DedicatedSupport copy 2.png",
      title: "Dedicated Support",
      description: "From project kickoff to post-launch, our team stays with you every step, ready to answer questions, solve problems, and make improvements.",
    },
    {
      icon: "/images/Industry-Versatility.png",
      title: "Industry Versatility",
      description: "We've successfully worked with clients in multiple niches, adapting our designs to meet the unique needs of every market and audience.",
    },
    {
      icon: "/images/optimized.png",
      title: "Optimized for Growth",
      description: "Every project is built with performance in mind: fast loading times, mobile responsiveness, and SEO best practices come as standard.",
    },
    {
      icon: "/images/Delivery.png",
      title: "On-Time Delivery",
      description: "We value your time and stick to agreed timelines without compromising on design quality or functionality.",
    },
    {
      icon: "/images/Transparent.png",
      title: "Transparent Collaboration",
      description: "Clear communication and regular updates ensure you're always in the loop, with no surprises and no confusion.",
    },
  ];

  return (
    <div className="work-process ">
         <Image
                src="/images/idu.png"
                alt="yellow ellipse"
                width={1200}
                height={800}
                className=" ellipse-workprocess"
              />
      <Container className="what-get">
        <h1 className="section-title text-center mb-5">
          What You Get With PlutoHub
        </h1>
        <Row>
          {processCards.map((card, index) => (
            <Col md={4} className="mb-4" key={index}>
              <div className="process-card ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="mb-3"
                />
               <h5 className="heading">{card.title}</h5>
                <p className="description">{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhatGet;
