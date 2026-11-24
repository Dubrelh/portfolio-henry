import './index.css';
import { portfolio } from './data/mock';

import Navbar from './composants/Navbar';
import Hero from './composants/Hero';
import About from './composants/About';
import Experience from './composants/Experience';
import Projects from './composants/Projects';
import Skills from './composants/Skills';
import Education from './composants/Education';
import Contact from './composants/contact';
import Footer from './composants/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#F5EDE1] selection:text-[#7E5B31]">
      <Navbar displayName={portfolio.identity.display_name} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 md:pb-16">
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
