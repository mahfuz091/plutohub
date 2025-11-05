import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Shopify = () => {
  return (
    <div className="Shopify AI-Product mobile-padding">
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
      <Row className="d-flex align-items-center ui-ux-contain-main ai-contain-main g-4">

        <Col xl={6} className="order-2 order-xl-1 text-center">
          <Image
            src="/images/shopify-services.png"
            alt="uiux"
            width={590}
            height={655}
            layout="responsive"
            className="img-fluid"
          />
        </Col>

        
        <Col xl={6} className="order-1 order-xl-2">
          <div className="ux-design-heading ai-product text-start">
            <h2 className="service-title">Shopify Website Design</h2>
            <p className="service-description gray">
              From storefront to checkout, our Shopify designs make online
              shopping seamless, visually appealing, and built to convert
              visitors into loyal customers.
            </p>
          </div>

          <div className="ui-ux-content">
            {[
              "Custom Shopify Themes",
              "Mobile-Optimized Shopping Experience",
              "App Setup & Functionality Add-Ons",
              "Product & Collection Page Design",
              "Secure Payment Integration",
              "Conversion-Focused Checkout Design",
            ].map((item, index, arr) => (
              <Col sm={12} key={index} className="mb-3 white">
                <div
                  className={`d-flex align-items-center data text-start ${
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

export default Shopify;
