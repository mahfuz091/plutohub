import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AiProduct = () => {
  const uxServices = [
    "Mobile-First UI/UX",
    "iOS & Android Optimized Designs",
    "Interactive Prototypes",
    "Streamlined Navigation Flows",
    "Engaging Visual Elements",
    "Usability Testing & Iteration",
  ];
  return (
    <div className="ux-design AI-Product">
      <Image
        src="/images/yellow.png"
        alt="yellow ellipse"
        width={400}
        height={400}
        className="ellipse ellipse-bottom-left"
      />
      <Image
        src="/images/green.png"
        alt="green ellipse"
        width={400}
        height={400}
        className="ellipse ui-ux-ellipse-right"
      />

          <Container>
      <Row className="d-flex ui-ux-contain-main ai-contain-main g-4 align-items-center">
      
        <Col xl={6} className="order-2 order-xl-1 text-center">
          <Image
            src="/images/ai-product.png"
            alt="uiux"
            width={590}
            height={665}
           
            className="img-fluid"
          />
        </Col>


        <Col xl={6} className="order-1 order-xl-2">
          <div className="ux-design-heading ai-product">
            <h1 className="service-title">AI Product Design</h1>
            <p className="service-description gray">
              Making advanced technology feel simple, our AI product designs
              translate complex data and algorithms into clear, intuitive
              interfaces people can trust and understand.
            </p>
          </div>

          <div className="ui-ux-content">
            {[
              "AI Workflow Mapping",
              "Data Visualization & Insights UI",
              "Chatbot & Assistant Interfaces",
              "Predictive Analytics Dashboards",
              "Context-Aware Interactions",
              "Trust-Building UX Patterns",
            ].map((item, index, arr) => (
              <Col sm={12} key={index} className="mb-3">
                <div
                  className={`d-flex align-items-center ${
                    index !== arr.length - 1 ? "ai-border" : ""
                  }`}
                >
                  <img
                    src="/images/LogoBrandingIcon.svg"
                    alt="icon"
                    className="me-3"
                    width={24}
                    height={24}
                  />
                  <span className="white data text-start">{item}</span>
                </div>
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>

    </div>
  );
};

export default AiProduct;
