import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Adarsh P | Portfolio</title>
        <meta name="description" content="Creative developer portfolio" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar isScrolled={isScrolled} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}