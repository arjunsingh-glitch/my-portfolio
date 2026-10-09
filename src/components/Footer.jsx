import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-300">
            <p>&copy; Arjun Singh {new Date().getFullYear()}</p>
            <p>
              Built with <span className="text-cyan-400 font-semibold">React.js</span> &amp; Vite
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/arjunsingh-glitch"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/arjun-singh-20779831a/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arjunonline17@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
