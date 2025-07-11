//import React from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Tharushi Dananjana</span> Portfolio
            </h2>
            <p className="text-gray-400">
              IT Undergraduate • Developer • Tech Enthusiast
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/tharushi-dananjana" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="GitHub Profile (opens in new tab)">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/Tharushi Dananjana" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="LinkedIn Profile (opens in new tab)">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Twitter Profile (opens in new tab)">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com/tharu_._xo" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Instagram Profile (opens in new tab)">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tharushi Dananjana. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="flex items-center text-gray-400 hover:text-white transition-colors" aria-label="Scroll to top">
            Back to top <ArrowUp size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </footer>;
};