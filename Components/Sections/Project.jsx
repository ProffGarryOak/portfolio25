'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/Components/UI/ProjectCard';

const projects = [
  {
    title: "InkSpire",
    description: "InkSpire uses advanced AI to analyze your moods and summarize your thoughts, helping you gain deeper self-awareness through journaling.",
    tags: ["Next.js", "PostgresSQL", "GEmini API"],
    image: "/ink.png",
    link: "https://inkspirejournal.vercel.app/"
  },
  {
    title: "Nuzzle",
    description: "A MERN Stack micro blogging platform that allows users to create and share short posts, follow other users, and engage with their content.",
    tags: ["MERN", "JWT","Cloudinary"],
    
    image: "/nuzz.png",
    link: "https://nuzzle.onrender.com"
  },
  {
    title: "PolyRoot",
    description: "Polynimial equations solvers and gamebots",
    tags: ["Flask", "DSA", "JavaScript"],
    image: "/poly.png",
    link: "https://polyroot.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[#eeba2c]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#eeba2c] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}