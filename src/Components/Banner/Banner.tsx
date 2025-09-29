'use client'
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Buttons from './Buttons'
import { gsap } from 'gsap'

const Banner = () => {
  const blubRef = useRef<HTMLImageElement>(null)
  const screwRef = useRef<HTMLImageElement>(null)
  const designRef = useRef<HTMLSpanElement>(null)
  const developRef = useRef<HTMLSpanElement>(null)
  const dominateRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Animate "Design" by character with different animations for each
    if (designRef.current) {
      const chars = designRef.current.querySelectorAll('.char')

      chars.forEach((char, index) => {
        if (index === 0) {
          // D - Fade in from left
          gsap.fromTo(
            char,
            { opacity: 0, x: -80, scale: 0.8 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 0.1,
            }
          )
        } else if (index === 1) {
          // e - Drop from top
          gsap.fromTo(
            char,
            { opacity: 0, y: -60, rotation: 15 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              ease: 'bounce.out',
              delay: 0.25,
            }
          )
        } else if (index === 2) {
          // s - Scale in with rotation
          gsap.fromTo(
            char,
            { opacity: 0, scale: 0, rotation: 180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              ease: 'elastic.out(1, 0.5)',
              delay: 0.4,
            }
          )
        } else if (index === 3) {
          // i - Slide from right
          gsap.fromTo(
            char,
            { opacity: 0, x: 70, skewX: 20 },
            {
              opacity: 1,
              x: 0,
              skewX: 0,
              duration: 0.9,
              ease: 'power3.out',
              delay: 0.55,
            }
          )
        } else if (index === 4) {
          // g - Flip in from back
          gsap.fromTo(
            char,
            { opacity: 0, rotationY: -90, scale: 1.3 },
            {
              opacity: 1,
              rotationY: 0,
              scale: 1,
              duration: 1,
              ease: 'power2.out',
              delay: 0.7,
            }
          )
        } else if (index === 5) {
          // n - Bounce from bottom
          gsap.fromTo(
            char,
            { opacity: 0, y: 80, scale: 0.6, rotation: -10 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 1.1,
              ease: 'back.out(1.7)',
              delay: 0.85,
            }
          )
        }
      })
    }

    // Drop and bounce animation for "Develop" - same for all characters
    if (developRef.current) {
      const chars = developRef.current.querySelectorAll('.char')

      chars.forEach((char, index) => {
        // All characters get the same drop and bounce animation with staggered delays
        gsap.fromTo(
          char,
          {
            opacity: 0,
            y: -120,
            rotation: (Math.random() - 0.5) * 40, // Random rotation between -20 and 20 degrees
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: 'bounce.out',
            delay: 1.2 + index * 0.1, // Staggered delay for wave effect
          }
        )
      })
    }

    // Loop color changes for "Dominate" every 7 seconds
    if (dominateRef.current) {
      const chars = dominateRef.current.querySelectorAll('.char')
      const colors = [
        '#06d6a0',
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#f9ca24',
        '#f0932b',
        '#eb4d4b',
        '#6c5ce7',
      ]
      let colorIndex = 0

      const changeColor = () => {
        chars.forEach((char, index) => {
          gsap.to(char, {
            rotationY: 90,
            duration: 0.3,
            ease: 'power2.in',
            delay: index * 0.08,
            onComplete: () => {
              // Change color at the halfway point when flipped
              ;(char as HTMLElement).style.color =
                colors[colorIndex % colors.length]
              gsap.to(char, {
                rotationY: 0,
                duration: 0.3,
                ease: 'power2.out',
              })
            },
          })
        })
        colorIndex++
      }

      // Initial color change after 5 seconds
      setTimeout(() => {
        changeColor()
        // Then continue changing every 7 seconds
        setInterval(changeColor, 7000)
      }, 5000)
    }

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const banner = document.querySelector(
        '.banner_area'
      ) as HTMLElement | null
      if (banner) {
        banner.style.setProperty('--clientX', `${e.clientX}px`)
        banner.style.setProperty('--clientY', `${e.clientY}px`)
      }

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2

      if (blubRef.current) {
        gsap.to(blubRef.current, {
          duration: 0.8,
          x: xPos * 20,
          y: yPos * 15,
          rotation: xPos * 5,
          ease: 'power2.out',
        })
      }

      if (screwRef.current) {
        gsap.to(screwRef.current, {
          duration: 1.2,
          x: xPos * -15,
          y: yPos * -10,
          rotation: xPos * -8,
          ease: 'power2.out',
        })
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className='banner_area'>
      <div
        className='hero-image'
        style={{ backgroundImage: `url('/images/hero-bg.jpg')` }}
      ></div>
      <Container>
        <Row>
          <Col>
            <div className='banner_content text-center'>
              {/* <div className='b_review'>
                <Image
                  src='/images/review_img.png'
                  width={114}
                  height={40}
                  alt='review image'
                />
                Based on <strong>24 clutch</strong> reviews
              </div> */}
              <h2 className='banner-title'>
                <Image
                  ref={blubRef}
                  src='/images/blub.svg'
                  width={146}
                  height={197}
                  alt='blub'
                  className='blub-banner'
                />
                <span ref={designRef} className='animated-design'>
                  <span className='char'>D</span>
                  <span className='char'>e</span>
                  <span className='char'>s</span>
                  <span className='char'>i</span>
                  <span className='char'>g</span>
                  <span className='char'>n</span>
                </span>
                ,{' '}
                <span ref={developRef} className='animated-develop'>
                  <span className='char'>D</span>
                  <span className='char'>e</span>
                  <span className='char'>v</span>
                  <span className='char'>e</span>
                  <span className='char'>l</span>
                  <span className='char'>o</span>
                  <span className='char'>p</span>
                </span>
                , &{' '}
                <span ref={dominateRef} className='animated-dominate'>
                  <span className='char'>D</span>
                  <span className='char'>o</span>
                  <span className='char'>m</span>
                  <span className='char'>i</span>
                  <span className='char'>n</span>
                  <span className='char'>a</span>
                  <span className='char'>t</span>
                  <span className='char'>e</span>
                </span>{' '}
                the Digital Space
              </h2>
              <p className="optional_text2">
                                We Create Unique Digital Experiences For Global Brands By
                                Integrating AI, Innovative Design, And Advanced Technology.
                              </p>
              <Buttons links='#' btnText='Lets Explore Our Services' />
              <Image
                ref={screwRef}
                src='/images/banner-shape.png'
                width={174}
                height={130}
                alt='screw'
                className='screw-banner'
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className='spotlight'></div>
    </section>
  )
}

export default Banner
