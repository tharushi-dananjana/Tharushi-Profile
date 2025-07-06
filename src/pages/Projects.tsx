import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Boat Safari Management System',
    description: 'Built a face detection-based attendance system to automate class attendance logging.',
    technologies: ['Python', 'OpenCV', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    githubUrl: 'https://github.com/tharushi-dananjana/IWT-project.git',
    liveUrl: '#'
  }, {
    title: 'House Design',
    description: 'Developed a responsive e-commerce website with features like cart, login system, and admin dashboard.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    githubUrl: 'https://github.com/tharushi-dananjana/house-design.git',
    liveUrl: '#'
  }, {
    title: 'Simple Portfolio Website',
    description: 'Designed and deployed a modern, mobile-responsive personal website.',
    technologies: ['React.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    githubUrl: 'https://github.com/tharushi-dananjana/protfolio.git',
    liveUrl: '#'
  }];
  return <section id="projects" className="py-20 bg-gray-50">
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
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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