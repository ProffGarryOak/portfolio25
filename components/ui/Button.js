'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  type = 'button', // Add type prop
  ...props 
}) => {
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#eeba2c] text-black hover:bg-opacity-90',
    secondary: 'border border-[#eeba2c] text-[#eeba2c] hover:bg-[#eeba2c]/10',
    tertiary: 'text-[#eeba2c] hover:underline',
  };
  
  // If href is provided, return a Link
  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.95 }}>
        <Link
          href={href}
          className={`${baseClasses} ${variants[variant]} ${className}`}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise, return a button element
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <button
        type={type} // Use the type prop
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Button;