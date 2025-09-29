'use client'
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IndustriesServeCard from "./IndustriesServeCard";

const IndustriesServe = () => {
  return (
    <section className="IndustriesServe">
      <Container>
        <Row>
          <Col sm={10}>
            <h5>Industries We Serve</h5>
            <p>
              We don't believe in one-size-fits-all design. Every industry has
              its unique rhythm, needs, and people, and we tailor our approach
              to meet those specific requirements. Smart strategy, sharp
              design, all deeply rooted in purpose.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <IndustriesServeCard />
      </Container>
    </section>
  );
};

export default IndustriesServe;
