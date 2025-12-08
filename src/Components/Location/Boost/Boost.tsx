"use client";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";

const Boost = () => {
  return (
    <div className="pt-120">
      <div
        className="boost-loc"
        style={{ backgroundImage: "url('/assets/images/boost-bg.png')" }}
      >
        <Container>
          {/* <div className="boost-uiux-section">
            <div className="text-side">
              <h2 className="boost-title">
                Strengthen your product with thoughtful UI/UX that improves
                clarity, flow and engagement. Start your next design step with
                PlutoHub.
              </h2>

              <button className="theme_btn mt-20 md-mt-35">
                Contact Us
                <i className="fa-solid fa-arrow-up arrow_icon"></i>
              </button>
            </div>

            <div className="">
              
            </div>
          </div> */}
          <div className="d-flex gap-4 justify-content-between flex-column flex-md-row">
            <div className="text-side">
              <h2 className="boost-title">
                Strengthen your product with thoughtful UI/UX that improves
                clarity, flow and engagement. Start your next design step with
                PlutoHub.
              </h2>
              <Link href="/contact">
                <button className="theme_btn mt-20 md-mt-35">
                  Contact Us
                  <div className="arrow_icon">
                    <HiArrowUp />
                  </div>
                </button>
              </Link>
            </div>

            <div>
              <img
                src="/assets/images/main-boost.png"
                alt="tab"
                className="tab-img"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Boost;
