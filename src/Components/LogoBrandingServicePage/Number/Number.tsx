import Counter from "@/Components/Counter/Counter";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const Number = () => {
  return (
    <div className="logo-number">
     
      <Container>
        <div className="Industries-Expertise-heading ">
          <Row>
            <Col xl={6}>
              <h2>
                Number  Don’t lie
              </h2>
            </Col>
            <Col xl={6}>
              <p className="gray">
               With a proven track record of building strong brands, Plutohub has empowered hundreds of businesses to enhance their identity, foster trust, and achieve lasting recognition in their respective industries.
              </p>
            </Col>
          </Row>
        </div>
        <Counter />
      </Container>
    </div>
  );
};

export default Number;
