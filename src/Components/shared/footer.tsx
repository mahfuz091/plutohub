import {
  ArrowDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer style={{ backgroundImage: "url(/images/footer-bg.jpg)" }}>
      <div className="footer-top">
        <Container>
          <Row>
            <Col xl={6} lg={5} md={12} xs={12}>
              <div className="footer-box">
                <h2>
                  We partner with global brands, <br /> from startups to
                  industry <br />
                  leaders. <strong>Lets discuss</strong>
                </h2>
                <div className=" social-links-footer">
                  <a
                    href="https://www.facebook.com/p/PlutoHub-61569889000814/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook color="white" />
                  </a>
                  <a
                    href="https://www.instagram.com/plutohub.agency/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/105067253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin color="white" />
                  </a>
                  <a
                    href="https://x.com/PlutohubAgency"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter color="white" size={22} />
                  </a>
                </div>
              </div>
            </Col>

            <Col xl={4} lg={4} md={12} xs={12}>
              <div className="footer-box uppercase">
                <h3>Services</h3>
                <Row>
                  <Col xs={6}>
                    <ul className="footer-text list-unstyled">
                      <li>
                        <Link href="/services/uiux">UI/UX Design</Link>
                      </li>
                      <li>
                        <Link href="/services/logo&branding">
                          Logo & Branding
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web">Website Design</Link>
                      </li>
                      <li>
                        <Link href="/services">Apps Design</Link>
                      </li>
                      <li>
                        <Link href="/services">SaaS Design</Link>
                      </li>
                      <li>
                        <Link href="/services">AI Product Design</Link>
                      </li>
                    </ul>
                  </Col>

                  <Col xs={6}>
                    <ul className="footer-text list-unstyled">
                      <li>
                        <Link href="/services">Webflow Website</Link>
                      </li>
                      <li>
                        <Link href="/services">WordPress Website</Link>
                      </li>
                      <li>
                        <Link href="/services">Shopify Website</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">
                          Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xl={2} lg={2} md={6} xs={6}>
              <div className="footer-box uppercase">
                <h3>Quick Links</h3>
                <ul className="footer-text">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <Link href="/blog" className="blog-footer">Blog</Link>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-middle">
        <Container className="footer-middle-container">
          <Row>
            <Col xl={6} lg={6}>
              <div className="middle-footer-box">
                <Image
                  src="/images/statue.svg"
                  width={100}
                  height={140}
                  alt="Statue"
                />
                <div className="middle-footer-box-content">
                  <h4>USA</h4>
                  <p>
                    750 W Dimond Blvd Ste 103 #204, <br /> Anchorage , Alaska
                    99515 <br />
                    United State
                  </p>
                  <a
                    href="tel:+19295683751‬
"
                  >
                    +19295683751‬
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="middle-footer-box">
                <Image
                  src="/images/portugal.svg"
                  width={100}
                  height={140}
                  alt="Statue"
                />
                <div className="middle-footer-box-content">
                  <h4>Portugal</h4>
                  <p>
                    R. Das Pedralvas 5 A, <br /> 1500-487, Lisboa <br />{" "}
                    Portugal{" "}
                  </p>
                  <a href="tel:++351937296113">+351937296113</a>
                </div>
              </div>
            </Col>
            {/* <Col xl={4} lg={4}>
              <div className="middle-footer-box last-item">
                <div className="middle-footer-box-content">
                  <h4 className="green-text">Company Deck</h4>
                  <p>PDF 4MB</p>
                </div>
                <button className="arrow-button" type="button">
                  <ArrowDown size={24} />
                </button>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="footer-logo">
                <Image
                  src="/images/footer-logo.png"
                  width={1320}
                  height={290}
                  alt="Plutohub"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-copyright">
        <Container>
          <Row>
            <Col xl={12}>
              <p>
                &copy; {new Date().getFullYear()}{" "}
                <strong>Plutohub Agency</strong>. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
