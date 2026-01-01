"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Plus, Minus } from "lucide-react";

const defaultFaqData = [
  {
    q: "How long does a UI/UX project usually take?",
    a: "Most UI/UX projects take 3–8 weeks, depending on scope, research depth, and the number of screens. Smaller tasks move faster, while full product redesigns require more exploration.",
  },
  {
    q: "Do you work with startups and small teams in Lisbon?",
    a: "Yes. Many of our Lisbon clients are early-stage startups or lean product teams. We adapt to your pace, resources, and roadmap.",
  },
  {
    q: "Can PlutoHub handle both UX research and UI design?",
    a: "Absolutely. We cover user research, flows, wireframes, visual design, and final handoff. You can engage us for the full process or select specific phases.",
  },
  {
    q: "What do I need to start a project with you?",
    a: "A call, a brief, or even an idea is enough. We help you define goals, outline requirements, and map the first steps before design begins.",
  },
  {
    q: "Do you provide design systems for ongoing development?",
    a: "Yes. We create or refine design systems, components, and UI guidelines to ensure your developers have a consistent foundation to build on.",
  },
  {
    q: "How do revisions and feedback work?",
    a: "Feedback is shared through scheduled reviews or async updates. Revisions depend on project size, but we keep the process smooth, collaborative, and straightforward.",
  },
];

const Faq = ({
  data = defaultFaqData,
  title = "Frequently Asked Questions",
}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;

      if (openIndex === i) {
        ref.style.height = ref.scrollHeight + "px";
      } else {
        ref.style.height = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="pt-120 loc-faq">
      <Container>
        <h2 className="loc-title text-md-center">{title}</h2>

        <div className="faq-wrapper">
          {data.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-btn"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question">{item.q}</span>

                <span className="faq-icon-box">
                  {openIndex === index ? (
                    <Minus size={18} strokeWidth={2} />
                  ) : (
                    <Plus size={18} strokeWidth={2} />
                  )}
                </span>
              </button>

              <div
                className="faq-content"
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
