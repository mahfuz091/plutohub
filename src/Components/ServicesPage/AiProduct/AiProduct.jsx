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
        <Row className="d-flex  ui-ux-contain-main ai-contain-main">
          <Col md={6}>
            <Image
              src="/images/shopify-services.png"
              width={590}
              height={665}
              alt="uiux"
            />
          </Col>
          <Col md={6}>
            <div className="ux-design-heading ai-product">
              <h1 className="service-title ">AI Product Design</h1>
              <p className="service-description">
                Making advanced technology feel simple, our AI product designs
                translate complex data and algorithms into clear, intuitive
                interfaces people can trust and understand.
              </p>
            </div>
            <div className="ui-ux-content">
              {[
                " AI Workflow Mapping",
                "Data Visualization & Insights UI",
                "Chatbot & Assistant Interfaces",
                "Predictive Analytics Dashboards",
                "Context-Aware Interactions",
                "Trust-Building UX Patterns",
              ].map((item, index, arr) => (
                <Col sm={12} key={index} className="mb-3 ">
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
                    <span>{item}</span>
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
