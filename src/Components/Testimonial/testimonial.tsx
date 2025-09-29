"use client";

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3, 
    responsive: [
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

 
    const testimonialsData = [
  {
    id: 1,
    rating: 5,
    message:
      "PlutoHub has been outstanding as always! The team was incredibly kind and even offered me a discount since we've worked together before. After my previous website was lost due to hosting issues and no backup, they rebuilt everything beautifully. The design quality is exceptional, just like our past projects. I'll continue working with PlutoHub in the future!",
    authorName: "Martin Kovács",
    authorRole: "Founder & CEO",
  },
  {
    id: 2,
    rating: 5,
    message:
      "From the very first message, the PlutoHub team made the entire process smooth and enjoyable. Their communication was clear, professional, and friendly, which made me feel confident about the project. I needed a high-quality mockup for my website, and not only did they capture my vision perfectly, but they also added their creative touch that made the design even better than I imagined.",
    authorName: "Theo Rizzo",
    authorRole: "Marketing Director",
  },
  {
    id: 3,
    rating: 5,
    message:
      "Working with PlutoHub was just easy and stress-free. The team got what I was looking for and brought a ton of creativity to the table. They were open to feedback, super cooperative, and made the whole process feel effortless. I'm pleased with how everything turned out.",
    authorName: "Robin Bak",
    authorRole: "Operations Manager",
  },
  {
    id: 4,
    rating: 5,
    message:
      "I’m so impressed with the work PlutoHub did for us. The website looks impressive, but it wasn't just the design — the whole experience was smooth from start to finish. They were friendly, quick to respond, and delivered exactly when they said they would. Everything just clicked, and I couldn't be happier.",
    authorName: "Ingo Just",
    authorRole: "Founder",
  },
  {
    id: 5,
    rating: 5,
    message:
      "PlutoHub really nailed our website design. The team made sure everything lined up perfectly with our brand, and the whole process felt smooth from start to finish. Communication was easy, they were super polite and professional, and it honestly felt like working with a partner who cared about the end result as much as we did. Definitely recommend.",
    authorName: "Sam Moshe",
    authorRole: "Brand Manager",
  },
  {
    id: 6,
    rating: 5,
    message:
      "I had a great experience working with the PlutoHub team. They quickly understood my vision and turned it into a clean, user-friendly design that matched the vibe I was going for. They were responsive, open to ideas, and added creative touches that really elevated the project. Couldn’t have asked for a better collaboration.",
    authorName: "William Gam",
    authorRole: "Founder",
  },
  {
    id: 7,
    rating: 5,
    message:
      "Working with PlutoHub was a great experience. The team quickly understood my vision and turned it into a clean, user-friendly design that matched exactly what I had in mind. They were easy to communicate with, open to feedback, and added creative touches that made the final result even better.",
    authorName: "William Gam",
    authorRole: "Founder",
  },
  {
    id: 8,
    rating: 5,
    message:
      "PlutoHub delivered a website design that hit the mark — aligned with our brand, visually appealing, and much more polished than before. The process was smooth from start to finish, thanks to their quick responses, timely delivery, and friendly approach.",
    authorName: "Chris Gourlay",
    authorRole: "Creative Lead",
  },
  {
    id: 9,
    rating: 5,
    message:
      "The PlutoHub team was an absolute pleasure to work with. Even after multiple revisions, they stayed calm, kind, and focused on getting everything right. They really put in the effort to make sure the design matched exactly what we needed. Highly recommend them for anyone looking for a team that listens and delivers.",
    authorName: "Aleks Novak",
    authorRole: "Marketing Manager",
  },


    
  ];

  const testiMonialShapeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (testiMonialShapeRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Calculate movement based on mouse position (normalized to -1 to 1)
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;

        // Apply movement with reduced intensity for subtle effect
        const moveX = xPercent * 20; // Max 20px movement
        const moveY = yPercent * 15; // Max 15px movement

        testiMonialShapeRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="testimonials-area testimonail"
      
    >
      <Image
        ref={testiMonialShapeRef}
        src="/images/testimonail-shape.png"
        width={373}
        height={324}
        alt="Contact Shape"
        className="testimonial-shape"
      />

      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={4} xs={12}>
            <div className="section-title-wrapper">
              <h2 className="section-title">
                What Clients <br className="br-option" />
                <span>
                  L
                  <Image
                    src="/images/o.png"
                    width={66}
                    height={30}
                    alt="o.png"
                  />
                  ve{" "}
                </span>
                to Tell
              </h2>
            </div>
          </Col>
          <Col md={4} xs={12} className="text-end">
            <div className="testimonial-right">
              <div className="trust-pilot">
                <h5>Our Happy Customer</h5>
              </div>
              <p>
                <Image
                  src="/images/trust-pilot.svg"
                  width={75}
                  height={15}
                  alt="trust-pilot"
                  className="me-2"
                />
                5.0 (8.9k Reviews)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="custom-border no-margin-right">
        <Slider {...sliderSettings} ref={sliderRef}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id}>
              <div
                className="single-testimonial-item p-4 text-white rounded position-relative"
                style={{
                  backgroundImage: "url(/images/testimonial-bg.png)",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Image
                  src="/images/quote-left.svg"
                  width={35}
                  height={35}
                  alt="quote"
                  className="mb-3"
                />
                <p className="message">{testimonial.message}</p>

                <div
                  className="author-meta position-absolute"
                  style={{
                    bottom: "24px",
                    left: "24px",
                    right: "24px",
                  }}
                >
                  
                  <div className="author-info">
                    <h4 className="mb-0">{testimonial.authorName}</h4>
                    <p className="mb-0">{testimonial.authorRole}</p>
                  </div>
                   <Image
                  src="/images/5start.png"
                  width={120}
                  height={24}
                  alt="quote"
                  className="mb-3"
                />
                </div>
              </div>
            </div>
            
          ))}
        </Slider>

      </Container>

      
    </section>
  );
};

export default TestimonialsSection;
