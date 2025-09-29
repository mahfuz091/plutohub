"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serimage1 from "../../assets/img/service_img1.jpg";
import serimage2 from "../../assets/img/apps.png";
import serimage3 from "../../assets/img/webDev.png";
import serimage4 from "../../assets/img/logo-barnding.png";
import serimage5 from "../../assets/img/ai-product.png";
import serimage6 from "../../assets/img/sass.png";
import check from "../../assets/img/check.svg";
import Buttons from "../Banner/Buttons";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const ProjectsItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='service_wrapper '>
      <div className='services-grid'>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage1} alt='sr1' className='cover-image' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>UI/UX Design</h3>
              </Link>
            </div>
          </div>

          {/* ata asbay upore  */}
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>UI/UX Design</h3>
              </Link>
              <p>
                Focused on blending usability with style, our designs make every
                click intuitive, every screen engaging, and every interaction
                align seamlessly with your brand.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  User Research & Journey Mapping
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Visual Interface Design
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Accessibility & Inclusive Design
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage2} alt='sr1' height={400} width={400} />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Mobile App Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Mobile App Design</h3>
              </Link>
              <p>
                Designed for the small screen but big on impact, our apps
                deliver smooth interactions, clear navigation, and visuals that
                keep users engaged on the go.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Mobile-First UI/UX
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Interactive Prototypes
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Usability Testing & Iteration
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage3} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Web Development</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Web Development</h3>
              </Link>
              <p>
                Responsive, scalable websites developed with clean code, smart
                features, and seamless performance to support your brand's
                growth and success.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Custom Websites
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  E-commerce Platforms
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Web Applications and more.
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>

        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage4} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Logo & Branding</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Logo & Branding</h3>
              </Link>
              <p>
                We create brand identities that leave a strong and lasting
                impression. From distinctive logos to complete visual systems,
                we make sure every detail reflects your personality and connects
                with your audience.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Custom Logo Design
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Brand Identity Systems
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Brand Guidelines
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage5} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>AI Product Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>AI Product Design</h3>
              </Link>
              <p>
                Making advanced technology feel simple, our AI product designs
                translate complex data and algorithms into clear, intuitive
                interfaces people can trust and understand.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  AI Workflow Mapping
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Data Visualization & Insights UI
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Trust-Building UX Patterns
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage6} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>SaaS Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>SaaS Design</h3>
              </Link>
              <p>
                Turning complex systems into clear, user-friendly tools, our
                SaaS designs help users focus on getting work done with minimal
                effort and maximum satisfaction.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Dashboard & Data Visualization
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Intuitive User Workflows
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Consistent Design Systems
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
      </div>
      <div className='services-grid service-top d-none'>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage4} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>Logo & Branding</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>Logo & Branding</h3>
              </Link>
              <p>
                We create brand identities that leave a strong and lasting
                impression. From distinctive logos to complete visual systems,
                we make sure every detail reflects your personality and connects
                with your audience.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Custom Logo Design
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Brand Identity Systems
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Brand Guidelines
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage5} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>AI Product Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>AI Product Design</h3>
              </Link>
              <p>
                Making advanced technology feel simple, our AI product designs
                translate complex data and algorithms into clear, intuitive
                interfaces people can trust and understand.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  AI Workflow Mapping
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Data Visualization & Insights UI
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Trust-Building UX Patterns
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
        <div className='service_flip_item'>
          <div className='flip_box_font'>
            <div className='ser_image'>
              <Image src={serimage6} alt='sr1' />
            </div>
            <div className='ser_content'>
              <Link href='#'>
                <h3>SaaS Design</h3>
              </Link>
            </div>
          </div>
          <div className='flip_box_back'>
            <div className='middle'>
              <Link href='#'>
                <h3>SaaS Design</h3>
              </Link>
              <p>
                Turning complex systems into clear, user-friendly tools, our
                SaaS designs help users focus on getting work done with minimal
                effort and maximum satisfaction.
              </p>
              <ul className='list-unstyled'>
                <li>
                  <Image src={check} alt='check' />
                  Dashboard & Data Visualization
                </li>
                <li>
                  <Image src={check} alt='check1' />
                  Intuitive User Workflows
                </li>
                <li>
                  <Image src={check} alt='check2' />
                  Consistent Design Systems
                </li>
              </ul>
              <Buttons links='#' btnText='Get a Service' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
