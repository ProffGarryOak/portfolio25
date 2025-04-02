'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="h-full flex flex-col bg-[#262626] rounded-lg overflow-hidden border border-[#212121] hover:border-[#eeba2c] transition-all duration-300 shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#161616] to-[#212121] flex items-center justify-center">
            <span className="text-gray-500">Project Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      </div>

      {/* Content Container */}
      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#161616] text-xs rounded-full text-[#eeba2c]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Link */}
        <Link 
          href={link || '#'}
          className="inline-flex items-center text-[#eeba2c] hover:text-[#ffcc4d] transition-colors mt-auto"
        >
          View Project
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;