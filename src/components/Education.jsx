import React from 'react'

const educationData = [
  {
    college: 'Vellore Institute of Technology, Bhopal',
    location: 'Bhopal, Madhya Pradesh, India',
    degree: 'B.Tech — CSE (Cloud Computing and Automation)',
    duration: 'Expected May 2028',
    description: 'CGPA: 8.07/10',
  },
  {
    college: 'Saheed Major James Thomas Sr. Sec School',
    location: 'Bikaner, Rajasthan, India',
    degree: 'Senior Secondary Education',
    duration: 'May 2023',
    //description: 'Percentage: 73.6%',
  },
  {
    college: 'Holy Mission Public School',
    location: 'Bikaner, Rajasthan ,India',
    degree: 'Secondary Education',
    duration: 'July 2021',
    //description: 'Percentage: 88.83%',
  },
]

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-[#111827] py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Education</h2>
        <div className="relative border-l-2 border-cyan-500 ml-4">
          {educationData.map(({ college, location, degree, duration, description }, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <span className="absolute -left-5 top-2 w-4 h-4 bg-cyan-500 rounded-full border-2 border-[#111827]"></span>
              <h3 className="text-2xl font-semibold">{college}</h3>
              <p className="text-gray-400 text-sm">{location}</p>
              <p className="italic text-cyan-300 mt-1">{degree}</p>
              <p className="text-gray-300">{duration}</p>
              <p className="mt-2 text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
