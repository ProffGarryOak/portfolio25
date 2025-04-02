'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Button from '@/Components/UI/Button';

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#161616] overflow-hidden px-4"
    >
      {/* Optional decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#eeba2c] blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#eeba2c] blur-[90px]"></div>
      </div>
      
      {/* Main content container */}
      <div ref={textRef} className="container mx-auto px-6 z-10 text-center md:text-left">
        {/* Name */}
        <div className="overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            <span className="text-[#eeba2c]">Adarsh</span> Pandey
          </h1>
        </div>
        
        {/* Tagline */}
        <div className="overflow-hidden">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium mb-6 md:mb-8 max-w-3xl mx-auto md:mx-0">
            Building digital experiences that <span className="text-[#eeba2c]">matter</span>
          </h2>
        </div>
        
        {/* Buttons - stacked on mobile, inline on larger screens */}
        <div className="overflow-hidden">
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button href="#projects" variant="primary" className="w-full sm:w-auto">
              View Work
            </Button>
            <Button href="https://drive.google.com/file/d/1yAOHAnoTuXbvbRmA_G4GuKoussHvMM7k/view" variant="secondary" className="w-full sm:w-auto">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on smallest screens */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden xs:block">
        <svg className="w-6 h-6 text-[#eeba2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}