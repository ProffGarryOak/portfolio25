'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaServer, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import Divider from '@/components/UI/Divider';
export default function About() {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Crafting pixel-perfect, responsive interfaces with React, Next.js, and modern CSS"
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js and modern frameworks"
    },
    {
      icon: <FaPaintBrush className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with attention to detail and accessibility"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#eeba2c]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#eeba2c] mx-auto mb-6"></div>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who builds digital experiences that combine aesthetic 
            appeal with technical excellence. Here's a glimpse into what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative w-auto h-auto md:h-[500px] rounded-xl overflow-hidden  transition-all duration-500">
              <Image src="/me.png" alt="Profile Picture" layout="fill" objectFit="contain" />
              
            </div>
            <Divider />
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-xl z-10 flex items-center justify-center text-black font-bold text-xl">
              <motion.div
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                👋
              </motion.div>
            </div> */}
          </motion.div>

          {/* Skills and bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-dark3  transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-dark2 rounded-lg text-primary">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl text-[#eeba2c] font-bold mb-2">{skill.title}</h4>
                      <p className="text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 bg-gradient-to-r from-dark2 to-dark3"
            >
              <h4 className="text-xl text-[#eeba2c] font-bold mb-2">Beyond Coding</h4>
              <p className="text-gray-400">
                When I'm not building digital experiences, you can find me exploring new technologies, 
                contributing to open-source projects, or creating digital art. I believe in continuous 
                learning and pushing creative boundaries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
