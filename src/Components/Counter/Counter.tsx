'use client'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Col, Row } from 'react-bootstrap'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    id: 1,
    end: 12,
    suffix: '+',
    title: 'Years of Impact',
    des: '12 Years of building interfaces that drive growth',
  },
  {
    id: 2,
    end: 1,
    suffix: 'K+',
    title: 'Total Projects',
    des: 'Projects launched across SaaS, mobile, and digital products',
  },
  {
    id: 3,
    end: 100,
    suffix: '%',
    title: 'Happy Clients',
    des: 'Client satisfaction rate based on long-term collaboration',
  },
  {
    id: 4,
    end: 15,
    suffix: '+',
    title: 'Worldwide',
    des: 'Countries served around the world',
  },
]

const Counter = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !itemsRef.current.length) return

    // Set initial state for all items
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
        setTriggered(true)

        // Animate items with minimal bounce effect
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

  // Helper function to add refs to items
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el)
    }
  }

  return (
    <Row className='row justify-content-center fact_inner' ref={sectionRef}>
      {stats.map((stat, index) => (
        <Col key={stat.id} xxl={3} xl={3} lg={6} md={6} sm={6} xs={12}>
          <div className='fact_item' ref={addToRefs}>
            <h3>
              {triggered ? (
                <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
              ) : (
                '0' + stat.suffix
              )}
            </h3>
            <h4>{stat.title}</h4>
            <p>{stat.des}</p>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default Counter
