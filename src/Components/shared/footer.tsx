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
                <div className="social-links">
                  <a href="">
                    <Facebook color="white" />
                  </a>
                  <a href="">
                    <Instagram color="white" />
                  </a>
                  <a href="">
                    <Linkedin color="white" />
                  </a>
                  <a href="">
                    <Twitter color="white" />
                  </a>
                </div>
              </div>
            </Col>

            <Col xl={2} lg={2} md={6} xs={6}>
              <div className="footer-box uppercase ">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/">Services</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Projects</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={2} lg={2} md={6} xs={6}>
              <div className="footer-box uppercase">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/">UI Design</Link>
                  </li>
                  <li>
                    <Link href="/">UX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Web Design</Link>
                  </li>
                  <li>
                    <Link href="/">View More</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={2} lg={3} md={12} xs={12}>
              <div className="footer-box uppercase">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link href="/">Work</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms and Conditions</Link>
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
                    750 W Dimond Blvd Ste 103 #204 <br/> Anchorage <br/> Alaska 99515 <br/>
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
                  <p>R. Das Pedralvas 5 A <br/> 1500-487 <br/> Lisboa</p>
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
