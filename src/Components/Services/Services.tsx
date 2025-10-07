'use client'

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ServiceItem from './ServiceItem'

const Services = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const slideItems = gsap.utils.toArray('.service_flip_item')

      // gsap.to(slideItems, {
      //   xPercent: -40 * (slideItems.length - 1),
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '.service_area',
      //     start: 'center center',
      //     end: () => '+=' + slideItems.length * window.innerWidth * 0.1,
      //     scrub: 1,
      //     pin: true,
      //     anticipatePin: 1,
      //   },
      // })
      // title animation
      document.querySelectorAll('.title_animation2').forEach((heading) => {
        const text = heading.textContent || ''
        const wrappedText = text
          .split('')
          .map((char) => `<span>${char}</span>`)
          .join('')
        heading.innerHTML = wrappedText

        gsap.from(heading.querySelectorAll('span'), {
          scrollTrigger: {
            trigger: '.service_area',
            start: 'top -8%',
            end: 'bottom top',
          },
          opacity: 0.3,
          stagger: 0.2,
          duration: 0.5,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className='service_area sec_padding'>
      <Container>
        <Row>
          <Col sm={4}>
            <h5 className='sub_title'>Our Services</h5>
          </Col>
          <Col sm={8}>
            <h2 className='title title_animation2'>
              From sleek UI/UX to bold branding, we design it all for your product!
            </h2>
          </Col>
        </Row>
        <ServiceItem />
      </Container>
    </section>
  )
}

export default Services
