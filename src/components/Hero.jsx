import { motion } from 'framer-motion'
import RingCanvas from './RingCanvas'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <RingCanvas />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 select-none max-w-3xl mx-auto"
      >
        <motion.div
          className="mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#64B5F6] to-[#9575CD] leading-normal lg:leading-relaxed py-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Arjun Singh
          </h1>
        </motion.div>
        <motion.h2
          className="text-xl md:text-2xl font-medium mb-4 text-[#64B5F6] drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          B.Tech CSE Student at VIT Bhopal
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Full-stack developer building responsive web apps, ML-powered tools, and browser extensions.
          Experienced in React, Python, Django, and Flask with a strong foundation in DSA and manual QA.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-8 text-2xl text-gray-300 drop-shadow-md">
            <a
              href="https://github.com/arjunsingh-glitch"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#64B5F6] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/arjun-singh-20779831a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#64B5F6] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:arjunonline17@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#64B5F6] transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/resume.pdf"
            download="Arjun_Singh_Resume.pdf"
            className="inline-block border border-blue-500 text-blue-500 hover:bg-blue-500/20 transition-all px-6 py-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] drop-shadow-md"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
