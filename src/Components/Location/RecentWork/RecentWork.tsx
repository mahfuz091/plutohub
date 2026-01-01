import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { HiArrowUp } from "react-icons/hi";

const RecentWork = () => {
  return (
    <div className="pt-120">
      <div className="recent-work-loc ">
        <Container>
          <div className="d-flex justify-content-between gap-3 flex-wrap align-items-center">
            <h2 className="loc-title">Our Recent UI/UX Design Works</h2>
            <Link href="/contact">
              <button className="theme_btn ">
                Get in touch
                <div className="arrow_icon">
                  <HiArrowUp />
                </div>
              </button>
            </Link>
          </div>

          <div className="">
            <div className="booking booking-bg">
              <img
                src="/assets/images/recent-1.png"
                alt="recent"
                className="w-full rounded-md"
              />
              <div className="">
                <h3 className="booking-title">
                  Booking Experience for Hospitality
                </h3>
                <p className="booking-text">
                  Clean hospitality meets elegant user flow. For this
                  hotel-booking landing page, PlutoHub crafted a minimal,
                  intuitive interface that guides travellers effortlessly from
                  search to booking. The design balances clarity and charm to
                  make every stay feel seamless.
                </p>
                <Link
                  href="https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="theme_btn-2">
                    Check Our Full Project
                    <div className="arrow_icon">
                      <HiArrowUp />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="booking health-bg">
              <img
                src="/assets/images/recent-2.png"
                alt="recent"
                className="w-full rounded-md"
              />
              <div className="">
                <h3 className="booking-title">
                  Healthcare Landing Experience for Modern Patients
                </h3>
                <p className="booking-text">
                  This design gives a calm, clean entry point for medical
                  services, clear navigation, soft visuals, and an intuitive
                  layout that helps build trust from first glance. Ideal for any
                  health tech or clinic brand seeking to turn visitors into
                  confident users through clarity and thoughtful design.
                </p>
                <Link
                  href="https://dribbble.com/shots/25480753-Healthcare-Landing-Page-Design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="theme_btn-2">
                    Check Our Full Project
                    <div className="arrow_icon">
                      <HiArrowUp />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="booking quantafit-bg">
              <img
                src="/assets/images/recent-3.png"
                alt="recent"
                className="w-full rounded-md"
              />
              <div className="">
                <h3 className="booking-title">
                  Quantafit- AI-Driven Fitness App UI
                </h3>
                <p className="booking-text">
                  Quantafit blends smart AI with a clean, intuitive design to
                  help users track workouts and progress without friction. The
                  interface stays calm but dynamic, making fitness data feel
                  friendly and actionable. Ideal for health-tech or wellness
                  brands aiming for clarity, motivation, and a polished user
                  experience.
                </p>
                <Link
                  href="https://dribbble.com/shots/26309394-Quantafit-AI-Fitness-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="theme_btn-2">
                    Check Our Full Project
                    <div className="arrow_icon">
                      <HiArrowUp />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RecentWork;
