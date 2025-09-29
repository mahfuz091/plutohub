import React from 'react';
import { Container } from 'react-bootstrap';
import LogoSlider from './LogoSlider';
import LogoSlidertwo from './LogoSlidertwo';


const Clientlogo = () => {
  return (
      <section className='client_logo_area'>
        <Container className='text-center'>
          <h4>Trusted By 200+ Global Brands</h4>
        </Container>
        <LogoSlider/>
        <LogoSlidertwo/>
      </section>
    )
}
export default Clientlogo;