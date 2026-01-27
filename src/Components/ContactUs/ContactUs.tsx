"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Buttons from "../Banner/Buttons";
import { usePathname } from "next/navigation";
import { HiArrowUp } from "react-icons/hi";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string;
  budget: string;
  project: string;
}

const ContactUs = () => {
  const blubRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: "",
    budget: "",
    project: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  useEffect(() => {
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
        blubRef.current.style.transform = `translate(${xPos * 20}px, ${yPos * 15
          }px) rotate(${xPos * 5}deg)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

 
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      
      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: "",
          budget: "",
          project: "",
        });
        setStatus("Sent successfully!");
      } else {
        toast.error("Failed to send email");
        setStatus("Failed to send email");
      }
    } catch (err) {
      toast.error("Failed to send email");
      setStatus("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact_banner_area contact con">
      <Image
        src="/images/contact-vector.png"
        width={241}
        height={236}
        alt="screw"
        className="contact-vector-img"
      />
      {/* <Image
        src="/images/AboutBannerEl.png"
        width={500}
        height={500}
        alt="screw"
        className="contact-center-img"
      /> */}
      <Image
        src="/images/contact2-bg.png"
        width={500}
        height={500}
        alt="screw"
        className="contact-corner-img"
      />
      <Image
        src="/images/contact-left-bg.png"
        width={350}
        height={500}
        alt="screw"
        className="contact-left-img"
      />

      <div className="hero-image"></div>

      <Container className="contact-py">
        <Row>
          <Col xl={12}>
            <div
              className={`${pathname === "/contact"
                  ? "section-title-wrapper2"
                  : "section-title-wrapper"
                }`}
            >
              {pathname === "/" ? (
                <h2
                  className="title text-center"
                  style={{ position: "relative", zIndex: 20 }}
                >
                  Have a{" "}
                  <span className="green-text">
                    Pr
                    <Image
                      src="/images/white-o.png"
                      width={98}
                      height={30}
                      alt="white-o"
                    />
                    ject
                  </span>{" "}
                  Idea?
                </h2>
              ) : (
                <h1
                  className="title text-center"
                  style={{ position: "relative", zIndex: 20 }}
                >
                  Have a{" "}
                  <span className="green-text">
                    Pr
                    <Image
                      src="/images/white-o.png"
                      width={98}
                      height={30}
                      alt="white-o"
                    />
                    ject
                  </span>{" "}
                  Idea?
                </h1>
              )}
            </div>
          </Col>
        </Row>

        <Row className="gx-5">
          <Col xl={4} lg={5} className="order-2 order-lg-1 mobile-gap gy-4 ">
            <div className="contact-info">
              <div className="contact-info-inner">
                <div className="contact-info-top">
                  <div className="contact-meta">
                    <div className="contact-meta-left">
                      <Image
                        src="/images/shahin.svg"
                        alt="Shahin"
                        width={56}
                        height={56}
                      />
                      <div className="name">
                        <h4>Shahinul Islam</h4>
                        <p>Founder of Plutohub</p>
                      </div>
                    </div>

                    <div className="contact-meta-right">
                      <Link className="primary-icon" href="/">
                        <ArrowRight color="white" />
                      </Link>
                    </div>
                  </div>
                  <p>
                    We turn your vision into engaging experiences that get
                    results. Let’s start creating something amazing today.
                  </p>
                </div>

                <div className="contact-info-bottom">
                  <div className="contact-info-box">
                    <h5>Email</h5>
                    <p>
                      <a target="_blank" href="mailto:hello@plutohub.agency">
                        hello@plutohub.agency
                      </a>
                    </p>
                  </div>
                  <div className="contact-info-box">
                    <h5>Whatsapp</h5>
                    <p>
                      <a
                        href="https://wa.me/351937296113"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +351 937 296 113
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={8} lg={7} className="order-1 order-lg-2  mt-md-4">
            <div
              className="contact-form-wrapper"
              style={{ backgroundImage: "url(/images/contact-form-bg.png)" }}
            >
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col xl={12}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name*</label>
                      <input
                        type="text"
                        placeholder="e.g. Adam Smith"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="phone">Phone (Whatsapp)*</label>
                      <input
                        type="text"
                        placeholder="+192********"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="services">Services*</label>
                      <input
                        type="text"
                        placeholder="Insert your service"
                        id="services"
                        value={formData.services}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className="form-group">
                      <label htmlFor="budget">Project Budget*</label>
                      <input
                        type="text"
                        placeholder="Insert your range"
                        id="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className="form-group">
                      <label htmlFor="project">Project Details*</label>
                      <textarea
                        name="project"
                        id="project"
                        placeholder="Tell us more about your project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl={12}>
                    <div className="form-group">
                      <button
                        className="theme_btn flex items-center gap-2 mt-3"
                        type="submit"
                        disabled={loading}
                      >
                        <span>{loading ? "Sending..." : "Submit Now"}</span>
                        <span className="arrow_icon">
                          <HiArrowUp />
                        </span>
                      </button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="spotlight3"></div>
    </section>
  );
};

export default ContactUs;
