"use client"
import React from 'react';
import Contact from './Home/Contact';
import FeaturedProjects from './Home/FeaturedProjects';
import Hero from './Home/Hero';
import OurServices from './Home/OurServices';
import Testimonials from './Home/Testimonials';
import WhoWeAre from './Home/WhoWeAre';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration of animations
    });
  }, []);
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
