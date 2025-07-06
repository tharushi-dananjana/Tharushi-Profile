import React from 'react';
import { ChevronDown, Github, Linkedin, Facebook, Instagram } from 'lucide-react';
// Optional: Use import instead of relative path
// import profileImage from './assets/about.png';

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-gray-300 overflow-hidden">
          <img
            src="./assets/about.png" // or use: src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          <span className="text-black">Hey, I'm Tharushi</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          IT Undergraduate Student
        </p>

        {/* Social Icons - Centered */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/tharushi-dananjana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={30} color="white" />
          </a>
          <a
            href="https://linkedin.com/in/tharushidananjana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={30} color="white" />
          </a>
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Facebook Profile"
          >
            
            <Facebook size={30} color="white" />
          </a>
          <a
            href="https://instagram.com/tharu_._xo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram size={30} color="white" />
          </a>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          Passionate about technology, software development, cybersecurity, and solving
          real-world problems through innovative IT solutions.
        </p>

        {/* Scroll Button */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label="Scroll down to learn more"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};