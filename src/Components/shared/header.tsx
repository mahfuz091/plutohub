"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Offcanvas, Row, NavDropdown } from "react-bootstrap";
import Buttons from "../Banner/Buttons";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Offcanvas (Mobile Menu) */}
      <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src="/images/logo.svg" alt="Plutohob" width={110} height={24} />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="mobile-nav">
            <nav>
              <ul>
                <li>
                  <Link href="/" onClick={handleClose}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleClose}>
                    About Us
                  </Link>
                </li>
                <li>
                  <NavDropdown title="Services" id="mobile-services-dropdown">
                    <NavDropdown.Item as={Link} href="/services" onClick={handleClose}>
                      Our Services
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/services/web-development" onClick={handleClose}>
                      Web Development
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/services/ui-ux" onClick={handleClose}>
                      UI & UX Design
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/services/logo-and-branding" onClick={handleClose}>
                      Logo & Branding
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li>
                  <Link href="/blog" onClick={handleClose}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleClose}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Mobile Header */}
      <div className="mobile-header">
        <Container>
          <Row>
            <Col>
              <div className="header-inside">
                <div className="mobile-site-logo">
                  <Link href="/">
                    <Image src="/images/logo.svg" alt="Plutohob" width={110} height={24} />
                  </Link>
                </div>

                <span className="mobile-menu-trigger" onClick={handleShow}>
                  <Image
                    src="/images/mobile-menu-trigger.svg"
                    alt="mobile menu trigger"
                    width={44}
                    height={44}
                  />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Desktop Header */}
      <header>
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="header-content d-flex align-items-center justify-content-between">
                {/* Logo */}
                <div className="site-logo">
                  <Link href="/">
                    <Image src="/images/logo.svg" alt="Plutohob" width={160} height={35} />
                  </Link>
                </div>

                {/* Navigation */}
                <nav>
                  <ul className="d-flex gap-4 align-items-center">
                    <li>
                      <Link href="/">Home</Link>
                    </li>

                    {/* Hover Dropdown Section */}
                    <li
                     
                      className="position-relative d-flex gap-2 align-items-center"
                    >
                      <Link href="/services">Services</Link>

                      <div
                       onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                      >
                        <NavDropdown
                        title=""
                        id="desktop-services-dropdown"
                        show={showDropdown}
                        className="hover-dropdown"
                      >
                        <NavDropdown.Item as={Link} href="/services/web-development">
                          Web Development
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/ui-ux">
                          UI & UX Design
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} href="/services/logo-and-branding">
                          Logo & Branding
                        </NavDropdown.Item>
                      </NavDropdown>
                      </div>
                    </li>

                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>

                {/* Button */}
                <div className="header-btn">
                  <Buttons
                    links="https://calendly.com/plutohubagency/30min?month=2025-08"
                    btnText="Let’s Talk"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
