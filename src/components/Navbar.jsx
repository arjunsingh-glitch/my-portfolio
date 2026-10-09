import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCode } from 'react-icons/bs'
import { FiMonitor } from 'react-icons/fi'
import { IoSchoolOutline } from 'react-icons/io5'
import { BiMessageDetail } from 'react-icons/bi'
import { MdWork } from 'react-icons/md'

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
              A.S
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="#" onClick={scrollToTop} icon={<AiOutlineHome className="w-5 h-5" />} text="Home" />
            <NavLink href="#projects" icon={<BsCode className="w-5 h-5" />} text="Projects" />
            <NavLink href="#experience" icon={<MdWork className="w-5 h-5" />} text="Experience" />
            <NavLink href="#skills" icon={<FiMonitor className="w-5 h-5" />} text="Tech Stack" />
            <NavLink href="#education" icon={<IoSchoolOutline className="w-5 h-5" />} text="Education" />
            <NavLink href="#contact" icon={<BiMessageDetail className="w-5 h-5" />} text="Contact" />
          </nav>
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ href, icon, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex items-center space-x-1 text-gray-300 hover:text-[#64B5F6] transition-colors duration-200"
  >
    {icon}
    <span>{text}</span>
  </a>
)

export default Navbar
