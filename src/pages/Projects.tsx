import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import SIMPLE_PORTFOLIO from '../assets/simple-portfolio.png'
import PORTFOLIO from '../assets/portfolio.png'
import CHANNELLING from '../assets/channelling.png'

export const Projects = () => {
  const projects = [{
    title: 'Simple Portfolio Website',
    description: 'Built a face detection-based attendance system to automate class attendance logging.',
    technologies: ['html', 'css', 'php'],
    image: SIMPLE_PORTFOLIO,
    githubUrl: 'https://github.com/tharushi-dananjana/protfolio.git',
    liveUrl: 'http://127.0.0.1:5500/index.html'
  }, 
  
  {
    title: 'E Channelling System',
    description: 'Developed a responsive e-commerce website with features like cart, login system, and admin dashboard.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: CHANNELLING,
    githubUrl: 'https://github.com/tharushi-dananjana/EChannelingSystem.git',
    liveUrl: 'http://localhost:8085/EChannelingSystem/home.jsp'
  }, 
  
  {
    title: 'React Portfolio Website',
    description: 'Designed and deployed a modern, mobile-responsive personal website.',
    technologies: ['React.js', 'Tailwind CSS' , 'Typescript'],
    image: PORTFOLIO,
    githubUrl: 'https://github.com/tharushi-dananjana/protfolio.git',
    liveUrl: 'http://localhost:5173/'
  }];

  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-black font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">
                      {tech}
                    </span>)}
                </div>
                <div className="flex space-x-3">
                  <a href={project.githubUrl} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href={project.liveUrl} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};