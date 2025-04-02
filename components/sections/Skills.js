'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 80, color: "#eeba2c" },
  { name: "React", level: 85, color: "#61DAFB" },
  { name: "Next.js", level: 85, color: "#000000" },
  { name: "Node.js", level: 75, color: "#68A063" },
  { name: "Flask", level: 85, color: "#3178C6" },
  { name: "Database", level: 85, color: "#38B2AC" }
];

export default function Skills() {
  return (
    <section className="py-20 bg-dark1">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#eeba2c]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#eeba2c] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Technologies I've worked with and my proficiency level in each.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#161616] rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color === "#000000" ? "#eeba2c" : skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}