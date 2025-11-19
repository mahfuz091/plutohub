"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Offcanvas, Row, NavDropdown } from "react-bootstrap";
import Buttons from "../Banner/Buttons";
import { usePathname } from "next/navigation";
import { Layers } from "lucide-react";
const Header = () => {
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isActive = (path) =>
    path === "/" ? pathname === path : pathname.startsWith(path);

  return (
    <>
     
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        placement="end"
      >
        <Offcanvas.Header closeButton className="py-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Link href="/" onClick={handleClose} className="d-inline-block">
              <Image
                src="/images/logo.svg"
                alt="Plutohob"
                width={110}
                height={24}
              />
            </Link>

            <div className="me-2">
              <Buttons links="/services" btnText="Book a Call" />
            </div>
          </div>
        </Offcanvas.Header>

        <div className="d-flex  gap-3 optional-nav  mb-3">
          <Link href="/services/web-development" onClick={handleClose}>
            Web Development
          </Link>
          <span>|</span>
          <Link href="/services/ui-ux" onClick={handleClose}>
            UI & UX Design
          </Link>
        </div>

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
                    <NavDropdown.Item
                      as={Link}
                      href="/services"
                      onClick={handleClose}
                    >
                      Our Services
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      href="/services/web-development"
                      onClick={handleClose}
                    >
                      Web Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      href="/services/ui-ux"
                      onClick={handleClose}
                    >
                      UI & UX Design
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      href="/services/logo-and-branding"
                      onClick={handleClose}
                    >
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
            <div className="sidebar-main">
              <h6>Let’s Design Your Success Story</h6>
              <p>
                No matter the project size, we provide premium design tailored
                to your goals.
              </p>
              <div>
                <Buttons
                  links="https://calendly.com/plutohubagency/30min?month=2025-08"
                  btnText="Get Qoute"
                />
              </div>
            </div>
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
                    <Image
                      src="/images/logo.svg"
                      alt="Plutohob"
                      width={110}
                      height={24}
                    />
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

      {/* DESKTOP HEADER */}
      <header>
        <Container>
          <Row>
            <Col xxl={12}>
              <div className="header-content d-flex align-items-center justify-content-between">
                <div className="site-logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.svg"
                      alt="Plutohob"
                      width={160}
                      height={35}
                    />
                  </Link>
                </div>

                <nav>
                  <ul className="d-flex gap-4 align-items-center">
                    <li>
                      <Link
                        href="/"
                        className={isActive("/") ? "active-link" : ""}
                      >
                        Home
                      </Link>
                    </li>

                    <li
                      className="custom-dropdown d-flex align-items-center gap-2"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <Link
                        href="/services"
                        className={
                          isActive("/services")
                            ? "active-link d-flex align-items-center gap-2"
                            : "d-flex align-items-center gap-1"
                        }
                      >
                        Services
                        <Layers
                          size={16}
                          className={`dropdown-icon  ${showDropdown ? "" : ""}`}
                        />
                      </Link>

                      <ul
                        className={`dropdown-menu-custom ${
                          showDropdown ? "show" : ""
                        }`}
                      >
                        <li>
                          <Link href="/services/web-development">
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ui-ux">UI & UX Design</Link>
                        </li>
                        <li>
                          <Link href="/services/logo-and-branding">
                            Logo & Branding
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        href="/about"
                        className={isActive("/about") ? "active-link" : ""}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={isActive("/blog") ? "active-link" : ""}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={isActive("/contact") ? "active-link" : ""}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

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
