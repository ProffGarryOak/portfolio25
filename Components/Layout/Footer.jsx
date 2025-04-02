'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/proffgarryoak',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/adarshpandey1133',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/proffgarryoak',
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:adarshp.1133@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-dark2 text-white py-12 border-t border-dark3">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold text-primary mb-2 inline-block">
              Adarsh Pandey
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <motion.div whileHover={{ y: -3 }}>{link.icon}</motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="#"
            className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Back to top
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}