import React from 'react';

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
      <img src="logo.png" alt="Logo" className="h-8 w-auto" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`md:flex ${menuOpen ? 'flex flex-col space-y-4' : 'hidden'} md:space-x-6`}>
            <a href="#hero" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
            <a
              href="/cv.pdf"
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Download CV
            </a>
          </div>
      </nav>
    </header>
  );
}

export default Header;
