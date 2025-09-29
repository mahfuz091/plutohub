'use client'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Buttons from '../Banner/Buttons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

const SectionTitle = ({
  title = 'About Us',
  des = 'Know about us',
  imgUrl,
}) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    document.querySelectorAll('.title_animation').forEach((heading) => {
      const text = heading.textContent
      const wrappedText = text
        .split('')
        .map((char) => `<span>${char}</span>`)
        .join('')
      heading.innerHTML = wrappedText

      gsap.from(heading.querySelectorAll('span'), {
        scrollTrigger: {
          trigger: '.banner_area',
          start: 'top top',
          end: 'bottom 0',
          pin: false,
          scrub: true,
        },
        opacity: 0.3,
        stagger: 1.5,
        duration: 2,
      })
    })
  })

  return (
    <Row>
      <Col sm={4}>
        <h5 className='sub_title'>{title}</h5>
        <Image
          src={imgUrl}
          width={244}
          height={200}
          alt={title}
          className='mt-5 about-shape'
        />
      </Col>
      <Col sm={8}>
        <h2 className='title title_animation'>{des}</h2>
        <Buttons links='#' btnText='Lets Connect' />
      </Col>
    </Row>
  )
}

export default SectionTitle
