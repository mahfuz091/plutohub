import Buttons from "@/Components/Banner/Buttons";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Investment = () => {
  return (
    <div className="investment-page">
      <Image
        src="/images/idu.png"
        alt="yellow ellipse"
        width={1200}
        height={1000}
        className="ellipse-workprocess"
      />
      <Container>
        <Row className="d-flex align-items-center gap-5 flex-column flex-md-row justify-content-between">
          <Col className="invesetment-col">
            <h1 className="section-title">
              Smarter Investment Than Hiring In-House
            </h1>
            <p className="section-description pt-investment-description">
              Hiring and managing an in-house design team means salaries,
              training, software costs, and ongoing overhead. With PlutoHub, you
              get a skilled, ready-to-go team without the extra expenses, and
              with results that speak for themselves.
              <br />
            </p>
            <p className="">
              {" "}
              Hint: PlutoHub delivers projects faster than in-house teams and at
              a fraction of the cost of traditional agencies.
            </p>
            <div className="pt-investment-description-2">
              <Buttons links="#" btnText="Start Project" />
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <Image
              src="/images/investment-right.png"
              width={589}
              height={500}
              alt="Investment"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Investment;
