"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const WorkItem = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
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
    <div className='project_wrapper-web'>
      <div className='project-grid-web'>
        <a
          href='https://www.behance.net/gallery/230888791/Quantafit-AI-Fitness-app'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
            <Image src='/images/services-web/FinVault.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3 className='ph-text'>FinVault – Personal Finance App</h3>

            <p>
              Meet Quantafit — an AI-powered fitness app that creates
              personalized routines based on your body, goals, and lifestyle.
              From zero-equipment training to progressive overload plans, it
              flexes with your schedule and experience level.
            </p>
          </div>
        </a>

        <a
          href='https://dribbble.com/shots/25683228-Kayaking-Landing-Page'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
              <Image src='/images/services-web/doctor.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3>Kayaking Landing Page</h3>

            <p>
              We made this kayaking landing page to help you find your next
              adventure easily. Our goal was to make booking your trip simple
              and exciting. If you’re new to kayaking or already experienced,
              this design makes it easy to get started. 
            </p>
          </div>
        </a>
        <a
          href='https://dribbble.com/shots/25469638-AI-Creativity-Landing-Page
'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
             <Image src='/images/services-web/eduocore-dashboard.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3 className='ph-text'>
              AI Creativity: Unlock Your Creative Potential
            </h3>

            <p>
              These AI tools automate tasks and create stunning visuals in
              minutes, making your work easier, faster, and more creative.
            </p>
          </div>
        </a>
        <a
          href='https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
              <Image src='/images/services-web/FinVault.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3 className='ph-text'>Hotel Booking Landing Page</h3>

            <p>
              We designed this hotel booking landing page to make finding the
              perfect stay easy and stress-free. Because booking a getaway
              should feel as good as the trip itself!
            </p>
          </div>
        </a>
        <a
          href='https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
              <Image src='/images/services-web/shopwise.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3 className='ph-text'>Hotel Booking Landing Page</h3>

            <p>
              We designed this hotel booking landing page to make finding the
              perfect stay easy and stress-free. Because booking a getaway
              should feel as good as the trip itself!
            </p>
          </div>
        </a>
        <a
          href='https://dribbble.com/shots/25672112-Hotel-Booking-Landing-Page'
          target='_blank'
          className='project_item'
        >
          <div className='pr_image'>
              <Image src='/images/services-web/eduocore.png' alt='pr1' height={330} width={333} />
          </div>
          <div className='pr_content-web '>
            <h3 className='ph-text'>Hotel Booking Landing Page</h3>

            <p>
              We designed this hotel booking landing page to make finding the
              perfect stay easy and stress-free. Because booking a getaway
              should feel as good as the trip itself!
            </p>
          </div>
        </a>
      </div>
     
    </div>
  );
};

export default WorkItem;
