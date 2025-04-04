"use client";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Head from 'next/head';
import Layout from '@/Components/Layout/Layout';

import Hero from '@/Components/Sections/Hero';
import About from '@/Components/Sections/About';
import Projects from '@/Components/Sections/Project';
import Skills from '@/Components/Sections/Skills';
import Contact from '@/Components/Sections/Contact';
import Divider from '@/Components/UI/Divider';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>Adarsh Pandey | Creative Developer</title>
        <meta name="description" content="Portfolio of Adarsh P - Creative Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        
        <Divider />
        
        <section ref={addToRefs} id="about" className="py-20 bg-dark1">
          <About />
        </section>
        
        <Divider />
        
        <section ref={addToRefs} id="projects" className="py-20 bg-black">
          <Projects />
        </section>
        
        <Divider />
        
        <section ref={addToRefs} id="skills" className="py-20 bg-dark1">
          <Skills />
        </section>
        
        <Divider />
        
        <section ref={addToRefs} id="contact" className="py-20 bg-black">
          <Contact />
        </section>
      </Layout>
    </>
  );
}