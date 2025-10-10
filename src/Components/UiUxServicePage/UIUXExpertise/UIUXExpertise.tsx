import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkItem from "./WorkItem";
import Image from "next/image";
const UIUXExpertise = () => {
  return (
    <div className="uiux-expertise">
        <Image
                src="/images/idu.png"
                alt="yellow ellipse"
                width={1000}
                height={1200}
                className="ellipse-industries-expertise"
              />
      <Container>
        <div className="Industries-Expertise-heading mb-2 mb-xl-5">
          <Row className="d-flex justify-content-between">
            <Col xl={4}>
              <h2>Domain-Focused UI/UX Expertise</h2>
            </Col>
            <Col xl={5}>
              <p>
                We deliver impactful branding and identity design services to
                industries such as Fintech, SaaS, Edtech, Healthcare, and
                E-Commerce. Our strategic, design-led approach helps brands
                connect, communicate, and thrive across diverse market
                landscapes.
              </p>
            </Col>
          </Row>
        </div>

        <WorkItem />
      </Container>
    </div>
  );
};

export default UIUXExpertise;
