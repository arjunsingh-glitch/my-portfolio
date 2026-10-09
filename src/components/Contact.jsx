import React from 'react';
import { motion } from 'framer-motion';
import EarthCanvas from './EarthCanvas';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen bg-[#000810] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Earth Canvas - Larger size */}
        <div className="lg:w-3/5 h-[600px] relative">
          <div className="absolute inset-0">
            <EarthCanvas />
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-2/5 w-full max-w-md"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] bg-clip-text text-transparent">
            Contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-[#1a1f2e]/60 backdrop-blur-sm rounded-lg border border-gray-700 text-gray-300 focus:outline-none focus:border-[#4776E6] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#1a1f2e]/60 backdrop-blur-sm rounded-lg border border-gray-700 text-gray-300 focus:outline-none focus:border-[#4776E6] transition-colors"
              />
            </div>
            <div>
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full px-4 py-3 bg-[#1a1f2e]/60 backdrop-blur-sm rounded-lg border border-gray-700 text-gray-300 focus:outline-none focus:border-[#4776E6] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
