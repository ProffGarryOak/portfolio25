"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
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
            Get In <span className="text-[#eeba2c]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#eeba2c] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FiMail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">adarshp.1133@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FiMapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">Ranchi, JH, India</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FiPhone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+91 7007583694</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FaInstagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-400">
                <a
                  href="https://instagram.com/proffgarryoak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eeba2c]"
                >
                  proffgarryoak
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FaTwitter className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Twitter</h3>
              <p className="text-gray-400">
                <a
                  href="https://twitter.com/proffgarryoak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eeba2c]"
                >
                  proffgarryoak
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-[#262626] rounded-lg">
            <div className="p-3 bg-[#eeba2c] rounded-lg text-black">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400">
                <a
                  href="https://linkedin.com/in/adarshpandey1133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#eeba2c]"
                >
                  adarshpandey1133
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}