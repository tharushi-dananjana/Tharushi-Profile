import { useState, useEffect } from 'react';

import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Certificates } from './pages/Certificates';
//import SkillPage from './pages/SkillPage';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    const html = window.document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-500 text-black dark:text-black`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        {/*<skillPage/> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
