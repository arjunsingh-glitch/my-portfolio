import React from 'react'
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaCode, FaBug } from 'react-icons/fa'

const iconMap = {
  JavaScript: SiJavascript,
  'C/C++': SiCplusplus,
  Python: SiPython,
  Java: FaJava,
  'HTML/CSS': SiHtml5,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Django: SiDjango,
  Flask: SiFlask,
  'Tailwind CSS': SiTailwindcss,
  PyQt5: FaCode,
  Pandas: FaDatabase,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': SiVisualstudiocode,
  Postman: FaCode,
  DSA: FaCode,
  OOP: FaJava,
  'Manual QA Testing': FaBug,
}

const SkillTag = ({ name }) => {
  const Icon = iconMap[name] || FaCode

  return (
    <div className="flex items-center gap-3 bg-[#1a1f2e] px-4 py-3 rounded-lg border border-gray-800 hover:border-cyan-500/40 transition-colors">
      <Icon className="text-[#64B5F6] text-xl flex-shrink-0" />
      <span className="text-white text-sm font-medium">{name}</span>
    </div>
  )
}

const SkillSection = ({ title, skills }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-[#1a2233] p-2 rounded">
        <code className="text-[#64B5F6]">&lt;/&gt;</code>
      </div>
      <h2 className="text-2xl font-semibold text-[#9575CD]">{title}</h2>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {skills.map((skill) => (
        <SkillTag key={skill} name={skill} />
      ))}
    </div>
  </div>
)

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'C/C++', 'Python', 'HTML/CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Tailwind CSS', 'Pandas'],
    },
    {
      title: 'Tools & Databases',
      skills: ['MongoDB', 'Git', 'GitHub', 'VS Code'],
    },
    {
      title: 'Core Concepts',
      skills: ['DSA', 'OOP', 'Manual QA Testing'],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-[#111827] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Technical Skills</h2>
        {categories.map((category) => (
          <SkillSection key={category.title} title={category.title} skills={category.skills} />
        ))}
      </div>
    </section>
  )
}

export default Skills
