'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: "/images/thinking.png", title: "Human-First Thinking", text: "People come before pixels. Every solution starts with understanding your users' needs, so designs feel intuitive, personal, and genuinely helpful." },
  { icon: "/images/design.png", title: "Cross-Disciplinary Experts", text: "Our team combines creative minds, strategic thinkers, and tech specialists—working together to craft solutions that strike a balance between beauty and functionality." },
  { icon: "/images/noise.png", title: "Clarity in Every Step", text: "Clients stay in the loop, always. From kickoff to delivery, our transparent workflow builds trust, eliminates confusion, and delivers confidence." },
  { icon: "/images/adapt.png", title: "Built to Adapt", text: "We're fast, flexible, and responsive to change. Whether it's a user need or a business pivot, your product stays ahead." },
  { icon: "/images/innovation.png", title: "Innovation with Intent", text: "We innovate with purpose, not just for flair. Every idea is tested, refined, and grounded in insights to drive measurable results." },
  { icon: "/images/design.png", title: "Smart by Design", text: "Designs that don't just look great, but perform. Data guides our decisions, helping your product succeed in the real world." },
]

const CardWhy = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current || !itemsRef.current.length) return

    gsap.set(itemsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.9,
    })

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(itemsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'back.out(1.2)',
          delay: 0.1,
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <Row className=' fact_inner  whyData' ref={sectionRef}>
      {stats.map((stat, index) => (
        <Col key={index} md={6} sm={6} xs={12}>
          <div className='why_fact_item ' ref={addToRefs}>
            <div className="icon-wrapper">
              <Image
                src={stat.icon}
                alt={stat.title}
                width={40}
                height={40}
                className="icon-image justify-content-center "
              />
            </div>
            <h6>{stat.title}</h6>
            <p>{stat.text}</p>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default CardWhy
