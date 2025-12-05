import React from "react";
import { Container } from "react-bootstrap";

const NumberLoc = () => {
  return (
    <div className="pt-100 number-loc">
      <Container>
        <div className="d-flex justify-content-between gap-2 flex-wrap number-loc-content">
          <h2 className="loc-title"> Number Don’t lie</h2>
          <p className="loc-des">
            Trusted by hundreds of businesses to deliver websites that perform
            and grow with them.
          </p>
        </div>
        <div className="pt-60 ">
          <div className="stats-grid">
            <div className="card-custom content-number">
              <h3>12+</h3>
              <h4>Years of Impact</h4>
              <p>
                Over a decade of crafting clear, thoughtful digital experiences.
              </p>
            </div>

            <div className="card-custom content-number">
              <h3>1K+</h3>
              <h4>Total Projects</h4>
              <p>
                SaaS, mobile and web products delivered across diverse
                industries.
              </p>
            </div>

            <div className="card-custom content-number">
              <h3>100%</h3>
              <h4>Happy Clients</h4>
              <p>
                Strong client relationships built on consistent, reliable design
                work.
              </p>
            </div>

            <div className="card-custom content-number">
              <h3>25+</h3>
              <h4>Worldwide</h4>
              <p>
                Global collaborations with teams in more than twenty-five
                countries.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NumberLoc;
