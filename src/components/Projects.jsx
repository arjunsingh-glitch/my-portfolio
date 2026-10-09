import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { featuredProjects, additionalProjects } from '../data/projects'

const FeaturedProjectCard = ({ title, description, highlights, technologies, githubUrl }) => (
  <div className="bg-[#1a1f2e] rounded-lg border border-gray-800 overflow-hidden hover:border-cyan-500/40 transition-colors duration-300">
    <div className="h-2 bg-gradient-to-r from-[#64B5F6] to-[#9575CD]" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="text-gray-400 text-sm space-y-2 mb-5">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-cyan-400 mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-[#111827] text-cyan-300 border border-cyan-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500 rounded hover:bg-cyan-600 hover:text-white transition text-cyan-400"
      >
        <FaGithub />
        View on GitHub
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#111827] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-cyan-400">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Selected work spanning machine learning, full-stack development, and browser extensions.
        </p>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-1 mb-20">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} {...project} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-6 text-center text-[#9575CD]">More on GitHub</h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto">
          {additionalProjects.map(({ title, technology, githubUrl }) => (
            <a
              key={title}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#1a1f2e] p-4 rounded-lg border border-gray-800 hover:border-cyan-500/40 transition-colors group"
            >
              <div>
                <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">{title}</p>
                <p className="text-sm text-gray-400">{technology}</p>
              </div>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
