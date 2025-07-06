import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 
  'bg-red-300 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-800">
          <span className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            Portfolio
          </span>
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <button onClick={() => scrollToSection('about')} className="text-black-700 hover:text-blue-600 transition-colors">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="text-black-700 hover:text-blue-600 transition-colors">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('certificates')} className="text-black-700 hover:text-blue-600 transition-colors">
                Certificates
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skill')} className="text-black-700 hover:text-blue-600 transition-colors">
                Skill
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-black-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </li>
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-red-300 shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col py-4">
            <li>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('certificates')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Certificates
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skill')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Skill
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Contact
              </button>
            </li>
          </ul>
        </div>}
    </header>;
};