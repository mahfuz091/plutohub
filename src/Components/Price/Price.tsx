"use client";

import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import Buttons from "../Banner/Buttons";

const Price = () => {
  const tabRef = useRef(null);
  const hoverBgRef = useRef(null);
  const [activeKey, setActiveKey] = useState("first");

  const moveHoverBg = () => {
    const container = tabRef.current;
    if (!container) return;

    const activeLink = container.querySelector(
      `.nav-link[data-event-key="${activeKey}"]`
    );

    if (!activeLink || !hoverBgRef.current) return;

    const { offsetLeft: left, offsetWidth: width } = activeLink;

    hoverBgRef.current.style.left = `${left}px`;
    hoverBgRef.current.style.width = `${width}px`;

    // Update active classes manually to be extra sure
    container.querySelectorAll(".nav-link").forEach((link) => {
      const key = link.getAttribute("data-event-key");
      if (key === activeKey) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    if (tabRef.current && window.innerWidth > 450) {
      const hoverBg = document.createElement("li");
      hoverBg.className = "hover_bg";
      hoverBgRef.current = hoverBg;
      tabRef.current.appendChild(hoverBg);

      moveHoverBg();
    }

    // Clean up if needed
    return () => {
      if (hoverBgRef.current && tabRef.current?.contains(hoverBgRef.current)) {
        tabRef.current.removeChild(hoverBgRef.current);
      }
    };
  }, []); // Run only once

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveHoverBg();
    }, 50);

    return () => clearTimeout(timeout);
  }, [activeKey]);

  return (
    <section className='price_area'>
      <Container>
        <Row>
          <Col lg={6} md={12} xs={12}>
            <div className='price_inner box'>
              <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant='pills' className='price_tab' ref={tabRef} as='ul'>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey='first' data-event-key='first'>
                      30 min
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as='li'>
                    <Nav.Link eventKey='second' data-event-key='second'>
                      1 hour
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <div className='tab_content d-flex'>
                      <h4>Free audit</h4>
                      <div className='p_middle'>
                        <h3>30 mins call</h3>
                        <p>
                          Let’s kick things off with a quick design preview—no
                          pressure, no strings.
                        </p>
                        <Buttons links='https://calendly.com/plutohubagency/30min?month=2025-08' btnText='Book a call' />
                      </div>
                      <div className='p_footer d-flex'>
                        <div className='p_list_item'>
                          <h5>You get a team</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              1 Senior Product Manager
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              2 Junior Support Designer
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              24/7 Figma support
                            </li>
                          </ul>
                        </div>
                        <div className='p_list_item'>
                          <h5>Design Delivery</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Unlimited Request
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              One request at a time
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Delivery (4-6 days)
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Design support
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <div className='tab_content d-flex'>
                      <h4>2 audit</h4>
                      <div className='p_middle'>
                        <h3>60 mins call</h3>
                        <p>
                          Let’s kick things off with a quick design preview—no
                          pressure, no strings.
                        </p>
                        <Buttons links='#' btnText='Book a call' />
                      </div>
                      <div className='p_footer d-flex'>
                        <div className='p_list_item'>
                          <h5>You get a team</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              1 Senior Product Manager
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              1 Junior Support Designer
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              2 Junior Support Designer
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              24/7 Figma support
                            </li>
                          </ul>
                        </div>
                        <div className='p_list_item'>
                          <h5>Design Delivery</h5>
                          <ul className='list-unstyled'>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Unlimited Request
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              One request at a time
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Delivery (4-6 days)
                            </li>
                            <li>
                              <Image
                                src='/images/pcheck.png'
                                width={20}
                                height={20}
                                alt='check'
                              />{" "}
                              Design support
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12}>
            <div className='quoted_box box'>
              <div className='quote_img'>
                <Image
                  src='/images/audit.png'
                  alt='quote-img'
                  width={600}
                  height={500}
                />
              </div>
              <h3>Are you interested in a quoted project?</h3>
              <p>
               Start with a UI/UX design and if we’re fit for your needs without any major commitment.
              </p>
              <Buttons links='#' btnText='Get a Quote' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Price;
