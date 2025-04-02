import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({ title, description, tags, slug, image }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-dark2 rounded-lg overflow-hidden border border-dark3 hover:border-primary transition-all duration-300"
    >
      <div className="h-48 bg-dark3 relative overflow-hidden">
        {/* Project image would go here */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-dark1 text-xs rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={`/projects/${slug}`}>
          <a className="inline-flex items-center text-primary group">
            View Project
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}