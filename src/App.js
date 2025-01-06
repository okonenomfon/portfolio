import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Education />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
