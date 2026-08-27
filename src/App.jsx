import { useState, useEffect } from 'react';
import './index.css';
import { portfolio } from './data/mock';

import Navbar from './composants/Navbar';
import Hero from './composants/Hero';
import About from './composants/About';
import Experience from './composants/Experience';
import Projects from './composants/Projects';
import Skills from './composants/Skills';
import Education from './composants/Education';
import Contact from './composants/Contact';
import Footer from './composants/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-800 dark:text-neutral-100 transition-colors duration-300">
      <Navbar
        displayName={portfolio.identity.display_name}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero identity={portfolio.identity} contact={portfolio.contact} />
        <About about={portfolio.about} />
        <Experience experiences={portfolio.experiences} />
        <Projects projects={portfolio.projects} />
        <Skills skills={portfolio.skills} />
        <Education education={portfolio.education} />
        <Contact contact={portfolio.contact} />
      </main>

      <Footer displayName={portfolio.identity.display_name} />
    </div>
  );
}
