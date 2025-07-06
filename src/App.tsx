import React from 'react';

import { Header } from './pages/Header';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Certificates } from './pages/Certificates';
import SkillPage from './pages/SkillPage';
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
export function App() {
  return <div className="min-h-screen bg-pink-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <SkillPage/>
        <Contact />
      </main>
      <Footer />
    </div>;
}