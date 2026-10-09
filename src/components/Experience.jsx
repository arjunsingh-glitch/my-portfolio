import React from 'react'
import { motion } from 'framer-motion'
import { MdWork } from 'react-icons/md'

const ExperienceCard = ({ title, company, duration, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-[#1a1f2e] p-6 rounded-lg border border-gray-800 hover:border-cyan-500/40 transition-colors"
  >
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-cyan-400">{company}</p>
    <p className="text-gray-400 text-sm mb-4">{duration}</p>
    <ul className="text-gray-300 space-y-2">
      {description.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-cyan-400 mr-2">▹</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern — eSim',
      company: 'FOSSEE, IIT Bombay',
      duration: 'Remote · Aug 2026 – Present',
      description: [
        'Contributing to the open-source development of eSim, an Electronic Design Automation (EDA) tool for circuit design, simulation, and analysis.',
        'Collaborating with the core team to implement new features, resolve software bugs, and enhance the integration of external simulation engines.',
        'Streamlining workflows and improving the platform\'s overall efficiency by adhering to best practices in open-source software engineering.',
      ],
    },
    {
      title: 'Freelance QA Tester',
      company: 'DADE (Drag & Drop Embroidery)',
      duration: 'Remote · April 2026',
      description: [
        'Conducted comprehensive manual QA testing for a US-based client\'s web application, executing a detailed 10-phase test plan.',
        'Identified, documented, and reported complex UI/UX bugs, including cross-tab synchronization issues, session routing, and authentication flows.',
        'Collaborated directly with the developer to ensure edge-case conflict resolution, optimizing the application for a seamless end-user experience.',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen bg-[#111827] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="bg-[#1a1f2e] p-2 rounded">
            <MdWork className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-cyan-400">Experience</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
