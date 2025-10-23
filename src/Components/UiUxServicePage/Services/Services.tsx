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
      icon: "/images/uiux.svg",
      title: "UI UX Consulting",
      text: "At our UI/UX design services company, we dig deep to spot what's holding your product back. Our expert UI UX consulting transforms issues into user-friendly wins with innovative UI and UX services.",
    },
    {
      icon: "/images/uiuxdesign.svg",
      title: "UI UX Design",
      text: "We craft exceptional digital experiences with our creative UI/UX services. From sleek UI design services to seamless UX design services, we ensure your users love every click.",
    },
    {
      icon: "/images/eye.svg",
      title: "Visual Design",
      text: "Visuals matter, and our UI and UX design company knows how to make yours pop. As the best UI/UX design company, we blend creativity and strategy in every pixel of our UI/UX services.",
    },
    {
      icon: "/images/baseuiux.svg",
      title: "UX Audit & Research",
      text: "Our UX agency services delve into data and real user insights to address pain points. With our UX design services company approach, you gain valuable insights that truly enhance your user experience.",
    },
    {
      icon: "/images/wireframing.svg",
      title: "Wireframing and Prototyping",
      text: "We bring ideas to life with crisp wireframes and interactive prototypes. Our UI/UX development services ensure your user interface design feels just right before launch.",
    },
    {
      icon: "/images/designsys.svg",
      title: "Design System Audit",
      text: "Consistency is key, and our UI/UX design services company keeps your design system sharp and up-to-date. We align your UI/UX services to deliver flawless, scalable UI and UX design solutions every time.",
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
          
          <Col md={6} xl={4}>
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

          
          <Col md={4} className="d-none d-xl-block position-relative">
            <div className="service-bg" />
          </Col>

          
          <Col md={6} xl={4}>
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
