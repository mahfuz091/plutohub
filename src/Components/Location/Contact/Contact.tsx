"use client";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";
import { toast } from "sonner";

interface FormData {
  email: string;
  name: string;
  services: string;
  budget: string;
  project: string;
  phone: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    services: "",
    budget: "",
    project: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(e)


    if (
      !formData.email ||
      !formData.name ||
      !formData.services ||
      !formData.budget ||
      !formData.project ||
      !formData.phone
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          email: "",
          name: "",
          services: "",
          budget: "",
          project: "",
          phone: "",
        });
      } else {
        toast.error(data?.message || "Failed to send message");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section-loc pt-120">
      <div className="contact-loc-section">
        <Container>
          <h2 className="loc-title">Have a Project Idea?</h2>

          <div className="contact-loc-grid pt-60">
            {/* LEFT CARD */}
            <div className="contact-loc-card-left">
              <div className="card-loc-inner">
                <div className="card-loc-top">
                  <div className="card-loc-info">
                    <img
                      src="/assets/images/ceo-2.png"
                      alt="CEO"
                      className="ceo"
                    />
                  </div>

                  <div>
                    <h6 className="ceo-loc-name">Shahinul Islam</h6>
                    <p className="ceo-loc-role">Founder Of Plutohub</p>
                  </div>

                  <div className="card-loc-arrow">
                    <ArrowRight />
                  </div>
                </div>

                <p className="card-loc-text">
                  Great design isn’t decoration. It’s how a product communicates,
                  behaves, and earns trust. I’m here to guide that journey with you.
                </p>
              </div>

              <div className="contact-loc-info">
                <p>Email</p>
                <a href="mailto:hello@plutohub.agency">hello@plutohub.agency</a>
              </div>

              <div className="contact-loc-info">
                <p>Whatsapp</p>
                <a href="https://wa.me/351937296113" target="_blank">
                  +351937296113
                </a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="contact-loc-form-wrapper">
              <form className="contact-loc-form" onSubmit={handleSubmit}>

                <div className="form-loc-group">
                  <label>Full Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Adam Smith"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-loc-grid">
                  <div className="form-loc-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-loc-group">
                    <label>Phone (Whatsapp)*</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="+192********"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>




                <div className="form-loc-grid">
                  <div className="form-loc-group">
                    <label>Services*</label>
                    <input
                      type="text"
                      name="services"
                      placeholder="Select your service"
                      value={formData.services}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-loc-group">
                    <label>Project Budget*</label>
                    <input
                      type="text"
                      name="budget"
                      placeholder="Select your range"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-loc-group">
                  <label>Project Details*</label>
                  <textarea
                    rows={3}
                    name="project"
                    placeholder="Tell us more about your project"
                    value={formData.project}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  className="theme_btn-sub"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Now"}
                  <div className="arrow_icon">
                    <HiArrowUp />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </Container>

        <div className="pt-60"></div>
      </div>
    </section>
  );
};

export default Contact;
