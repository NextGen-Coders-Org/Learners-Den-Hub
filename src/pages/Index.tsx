
import React, { useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import EventPreview from "@/components/home/EventPreview";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    // Add scroll animation effect for sections
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fade-in');
          section.style.opacity = '1';
        }
      });
    };
    
    // Set initial opacity to 0 for smooth fade in
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index > 0) { // Skip first section (hero)
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease-out';
      }
    });
    
    // Initialize and add event listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <Stats />
        <EventPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
