'use client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useRef } from 'react'
import Buttons from '../Banner/Buttons'
import { usePathname } from 'next/navigation'
const ContactSection = () => {
  const contactShapeRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (contactShapeRef.current) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        // Calculate movement based on mouse position (normalized to -1 to 1)
        const xPercent = (clientX / innerWidth - 0.5) * 2
        const yPercent = (clientY / innerHeight - 0.5) * 2

        // Apply movement with reduced intensity for subtle effect
        const moveX = xPercent * 20 // Max 20px movement
        const moveY = yPercent * 15 // Max 15px movement

        contactShapeRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])


   const pathname = usePathname()

  return (
    <section
      className='contact-section'
      
      style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}
    >
       {pathname !== '/contact' && (
      <Image
        ref={contactShapeRef}
        src='/images/contact-shape.png'
        width={373}
        height={324}
        alt='Contact Shape'
        className='contact-shape'
        style={{
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
      />
       )}
      <Container>
        <Row>
          <Col xl={12}>
            <div className={`${pathname==='/contact'?"section-title-wrapper2":"section-title-wrapper"}`}>
              <h2 className='title'>
                Have a{' '}
                <span className='green-text'>
                  Pr
                  <Image
                    src='/images/white-o.png'
                    width={98}
                    height={30}
                    alt='white-o'
                  />
                  ject
                </span>{' '}
                Idea?
              </h2>
            </div>
          </Col>
        </Row>

        <Row className="gx-5 gy-4">
          {/* col 01 */}
          <Col xl={4} lg={5} >
            <div className='contact-info'>
              <div className='contact-info-inner'>
                <div className='contact-info-top'>
                  <div className='contact-meta'>
                    <div className='contact-meta-left'>
                      <Image
                        src='/images/shahin.svg'
                        alt='Shahin'
                        width={56}
                        height={56}
                      />
                      <div className='name'>
                        <h4>Shahinul Islam</h4>
                        <p>Founder of Plutohub</p>
                      </div>
                    </div>

                    <div className='contact-meta-right'>
                      <Link className='primary-icon' href='/'>
                        <ArrowRight color='white' />
                      </Link>
                    </div>
                  </div>
                  <p>
                    We turn your vision into engaging experiences that get results. Let’s start creating something amazing today.
                  </p>
                </div>

                <div className='contact-info-bottom'>
                  <div className='contact-info-box'>
                    <h5>Email</h5>
                    <p>
                      <a target='_blank' href='mailto:hello@plutohub.agency'>
                        hello@plutohub.agency
                      </a>
                    </p>
                  </div>
                  <div className='contact-info-box'>
                    <h5>Whatsapp</h5>
                    <p>
                      <a target='_blank' href='https://wa.me/351937296113'>
                        +351937296113
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
{/* col 02 */}
          <Col xl={8} lg={7} >
            <div
              className='contact-form-wrapper'
              style={{ backgroundImage: 'url(/images/contact-form-bg.png)' }}
            >
              <form action=''>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='name'>Full Name*</label>
                      <input
                        type='text'
                        placeholder='e.g. Adam Smith'
                        id='name'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='email'>Email Address*</label>
                      <input
                        type='email'
                        placeholder='example@email.com'
                        id='email'
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='email'>Phone (Whatsapp)*</label>
                      <input
                        type='number'
                        placeholder='+192********‬'
                        id='number'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='services'>Services*</label>
                      <input
                        type='text'
                        placeholder='Insert your service'
                        id='services'
                      />
                    </div>
                  </Col>
                  <Col xl={6}>
                    <div className='form-group'>
                      <label htmlFor='budget'>Project Budget*</label>
                      <input
                        type='text'
                        placeholder='Insert your range'
                        id='budget'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <label htmlFor='project'>Project Details*</label>
                      <textarea
                        name='project'
                        id='project'
                        placeholder='Tell us more about your project'
                      ></textarea>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl={12}>
                    <div className='form-group'>
                      <Buttons links="#" btnText="Submit Now" />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection
