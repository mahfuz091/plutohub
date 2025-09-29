'use client'

import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CardWhy from './Card'

const WhyPlutohub = () => {
  const thumbnailRef = useRef(null)

  useEffect(() => {
    if (thumbnailRef.current) {
      // Create infinite up-down floating animation
      gsap.to(thumbnailRef.current, {
        y: -20, // Move up 20px
        duration: 1.2, // 1.2 seconds duration (faster)
        ease: 'power2.inOut', // Smooth easing
        yoyo: true, // Reverse the animation
        repeat: -1, // Infinite repeat
      })
    }
  }, [])

  return (
    <section
      className='faq-section WhyPlutohub'
      
    >
      <Container>
        <Row >
          <Col xl={4} >
            
              <h5 >Why Plutohub Stands Apart</h5>

              <div ref={thumbnailRef} className="aq-thumb">
                <Image
                  src='/images/faq-thumb.png'
                  width={296}
                  height={400}
                  alt='faq-thumb'
                />
              </div>
            
          </Col>
          <Col xl={8} >
            <CardWhy/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyPlutohub
