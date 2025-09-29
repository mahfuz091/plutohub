"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef } from "react";
import Buttons from "../Banner/Buttons";
import { usePathname } from "next/navigation";

const ContactUs = () => {
  const blubRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animate "Design" by character with different animations for each

    // Drop and bounce animation for "Develop" - same for all characters

    // Loop color changes for "Dominate" every 7 seconds

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const banner = document.querySelector(
        ".contact_banner_area"
      ) as HTMLElement | null;
      if (banner) {
        banner.style.setProperty("--clientX", `${e.clientX}px`);
        banner.style.setProperty("--clientY", `${e.clientY}px`);
      }

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;

      if (blubRef.current) {
        gsap.to(blubRef.current, {
          duration: 0.8,
          x: xPos * 20,
          y: yPos * 15,
          rotation: xPos * 5,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pathname = usePathname();

  return (
    <section className='contact_banner_area contact con'>
      <Image
        src='/images/contact-vector.png'
        width={241}
        height={236}
        alt='screw'
        className='contact-vector-img'
      />
      <Image
        src='/images/AboutBannerEl.png'
        width={500}
        height={500}
        alt='screw'
        className='contact-center-img'
      />
      <Image
        src='/images/contact2-bg.png'
        width={500}
        height={500}
        alt='screw'
        className='contact-corner-img'
      />
      <Image
        src='/images/contact-left-bg.png'
        width={500}
        height={500}
        alt='screw'
        className='contact-left-img'
      />
      <Image
        src='/images/contactmainbg.png'
        width={800}
        height={600}
        alt='screw'
        className='contact-bottom-img'
      />
      <div
        className='hero-image'
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      ></div>

      <Container className='contact-py'>
        <Row>
          <Col xl={12}>
            <div
              className={`${
                pathname === "/contact"
                  ? "section-title-wrapper2"
                  : "section-title-wrapper"
              }`}
            >
              <h2 className='title '>
                Have a{" "}
                <span className='green-text'>
                  Pr
                  <Image
                    src='/images/white-o.png'
                    width={98}
                    height={30}
                    alt='white-o'
                  />
                  ject
                </span>{" "}
                Idea?
              </h2>
            </div>
          </Col>
        </Row>

        <Row className='gx-5'>
          {/* col 01 */}
          <Col xl={4} lg={5} className='order-2 order-lg-1 mobile-gap gy-4'>
            <div className='contact-info'>
              <div className='contact-info-inner'>
                <div className='contact-info-top'>
                  <div className='contact-meta'>
                    <div className='contact-meta-left'>
                      <Image
                        src='/images/shahin.svg'
                        alt='Shahin'
                        width={56}
                        height={56}
                      />
                      <div className='name'>
                        <h4>Shahinul Islam</h4>
                        <p>Founder of Plutohub</p>
                      </div>
                    </div>

                    <div className='contact-meta-right'>
                      <Link className='primary-icon' href='/'>
                        <ArrowRight color='white' />
                      </Link>
                    </div>
                  </div>
                  <p>
                    We turn your vision into engaging experiences that get
                    results. Let’s start creating something amazing today.
                  </p>
                </div>

                <div className='contact-info-bottom'>
                  <div className='contact-info-box'>
                    <h5>Email</h5>
                    <p>
                      <a target='_blank' href='mailto:hello@plutohub.agency'>
                        hello@plutohub.agency
                      </a>
                    </p>
                  </div>
                  <div className='contact-info-box'>
                    <h5>Whatsapp</h5>
                    <p>
                      <a target='_blank' href='https://wa.me/351937296113'>
                        +351937296113
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* col 02 */}
          <Col xl={8} lg={7} className='order-1 order-lg-2 '>
            <div
              className='contact-form-wrapper'
              style={{ backgroundImage: "url(/images/contact-form-bg.png)" }}
            >
              <form action=''>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='name'>Full Name*</label>
                      <input
                        type='text'
                        placeholder='e.g. Adam Smith'
                        id='name'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='email'>Email Address*</label>
                      <input
                        type='email'
                        placeholder='example@email.com'
                        id='email'
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='email'>Phone (Whatsapp)*</label>
                      <input
                        type='number'
                        placeholder='+192********‬'
                        id='number'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='services'>Services*</label>
                      <input
                        type='text'
                        placeholder='Insert your service'
                        id='services'
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='budget'>Project Budget*</label>
                      <input
                        type='text'
                        placeholder='Insert your range'
                        id='budget'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='project'>Project Details*</label>
                      <textarea
                        name='project'
                        id='project'
                        placeholder='Tell us more about your project'
                      ></textarea>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <Buttons links='#' btnText='Submit Now' />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='spotlight3'></div>
    </section>
  );
};

export default ContactUs;
