import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardService from "./Card";
import Image from "next/image";
interface Stat {
  icon: string;
  title: string;
  text: string;
}

const Services = () => {
  const stats: Stat[] = [
    {
      icon: "/images/services-redesign.svg",
      title: "Website Design & Re-design",
      text: "Your website should look good and perform well. Whether you're starting fresh or giving it a facelift, we design clean, responsive sites that feel modern and convert better.",
    },
    {
      icon: "/images/services-webflow.svg",
      title: "Website Information Architecture",
      text: "Our team combines creative minds, strategic thinkers, and tech specialists.",
    },
    {
      icon: "/images/servicesStrategy.svg",
      title: "Website Strategy",
      text: "Every great website begins with a well-planned strategy. We help you define goals, understand your users, and map out a clear plan to build a site that works.",
    },
    {
      icon: "/images/services-webflow.svg",
      title: "Webflow Development",
      text: "Want something sleek and smooth? With Webflow, we build responsive websites that feel modern, move beautifully, and don't need heavy backend development.",
    },
    {
      icon: "/images/servicesStrategy.svg",
      title: "Website Strategy",
      text: "Every great website begins with a well-planned strategy. We help you define goals, understand your users, and map out a clear plan to build a site that works.",
    },
    {
      icon: "/images/services-webflow.svg",
      title: "Webflow Development",
      text: "Want something sleek and smooth? With Webflow, we build responsive websites that feel modern, move beautifully, and don't need heavy backend development.",
    },
  ];

  return (
    <div className="uiux-services-section">
        <Image
              src="/images/services-bg.png"
              width={344}
              height={400}
              alt="background"
              className="services-bg"
            />
            <Image
             
              src="/images/about-shape.png"
              width={244}
              height={200}
              alt="shape"
              className="services-shape"
            />
             <Image
                    src="/images/yellow.png"
                    alt="yellow ellipse"
                    width={400}
                    height={400}
                    className="ellipse ellipse-top-left"
                  />
            
      <Container className="uiux-elips">
         <Image
                    src="/images/yellow.png"
                    alt="yellow ellipse"
                    width={500}
                    height={500}
                    className="ellipse ellipse-top-mid"
                  />
        <div className="uiux-services-header text-center">
          <h6>Our Services</h6>
          <h1>Our Core UI/UX Services at Plutohub</h1>
        </div>

        <Row className="align-items-center uiux-card-service">
          <Col md={4}>
            {stats.slice(0, 3).map((item, index) => (
              <div className="mb-4" key={index}>
                <CardService
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </Col>

          <Col
            md={4}
            className=" md={4} position-relative "
          >
            <div className="service-bg" />
          </Col>

          <Col md={4}>
            {stats.slice(3).map((item, index) => (
              <div className="mb-4" key={index}>
                <CardService
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
