"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Container } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="contact-section-loc pt-120">
      <div className="contact-loc-section">
        <Container>
          <h2 className="loc-title">Have a Project Idea?</h2>

          <div className="contact-loc-grid pt-60">
            <div className="contact-loc-card-left">
              <div className="card-loc-inner">
                <div className="card-loc-top">
                  <div className="card-loc-info ">
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
                  Great design isn’t decoration. It’s how a product
                  communicates, behaves, and earns trust. I’m here to guide that
                  journey with you
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

            <div className="contact-loc-form-wrapper">
              <form className="contact-loc-form">
                <div className="form-loc-group">
                  <label>Email Address*</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="form-loc-group">
                  <label>Full Name*</label>
                  <input type="text" placeholder="e.g. Adam Smith" />
                </div>
                <div className="form-loc-grid">
                  <div className="form-loc-group">
                    <label>Services*</label>
                    <input type="text" placeholder="Select your service" />
                  </div>
                  <div className="form-loc-group">
                    <label>Project Budget*</label>
                    <input type="text" placeholder="Select your range" />
                  </div>
                </div>
                <div className="form-loc-group">
                  <label>Project Details*</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about your project"
                  ></textarea>
                </div>
                <button className="theme_btn-sub">
                  Submit Now
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
