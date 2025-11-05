"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { HiArrowUp } from "react-icons/hi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string;
  budget: string;
  project: string;
}

const ContactSection = () => {
  const contactShapeRef = useRef<HTMLImageElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: "",
    budget: "",
    project: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (contactShapeRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        const moveX = xPercent * 20;
        const moveY = yPercent * 15;

        contactShapeRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      const res = await fetch("/api/contact", {
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
    <section
      className="contact-section"
      style={{ backgroundImage: "url(/images/contact-bg.jpg)" }}
    >
      <Image
        ref={contactShapeRef}
        src="/images/contact-shape.png"
        width={373}
        height={324}
        alt="Contact Shape"
        className="contact-shape"
        style={{
          transition: "transform 0.1s ease-out",
          willChange: "transform",
        }}
      />

      <Container>
        <Row>
          <Col xl={12}>
            <div className="section-title-wrapper">
              <h2 className="title">
                Have a <span className="green-text">Project</span> Idea?
              </h2>
            </div>
          </Col>
        </Row>

        <Row className="gx-5 gy-4">
          <Col xl={4} lg={5}>
            <div className="contact-info">
              <div className="contact-info-inner">
                <div className="contact-info-top text-start">
                  <div className="contact-meta">
                    <div className="contact-meta-left d-flex align-items-center">
                      <Image
                        src="/images/shahin.svg"
                        alt="Shahin"
                        width={56}
                        height={56}
                        className="me-3" 
                      />
                      <div className="name">
                        <h4 className="">Shahinul Islam</h4>
                        <p className=" text-muted">Founder of Plutohub</p>
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
                      <a target="_blank" href="https://wa.me/351937296113">
                        +351937296113
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col xl={8} lg={7}>
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
                        id="name"
                        placeholder="e.g. Adam Smith"
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
                        id="email"
                        placeholder="example@email.com"
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
                        id="phone"
                        placeholder="+192********"
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
                        id="services"
                        placeholder="Insert your service"
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
                        type="number"
                        id="budget"
                        placeholder="Insert your range"
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
                        id="project"
                        placeholder="Tell us more about your project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className="form-group">
                      <button
                        className="theme_btn flex items-center gap-2"
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
    </section>
  );
};

export default ContactSection;
