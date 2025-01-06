import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-blue-600 to-blue-400 text-white min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:justify-between">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="eno.jpg"
            alt="Hero"
            className="hero-image w-4/5 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm Enomfon Okon
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            A passionate software engineering student with keen interest in exploring new technologies and building impactful solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-medium text-base sm:text-lg hover:bg-gray-100 transition duration-200"
            >
              View My Work
            </a>
            <a
              href="cv.pdf"
              download
              className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition duration-200"
            >
              Download CV
            </a>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/enomfon-okon/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease, filter 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'grayscale(0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          >
            <img
              src="linkedin.svg"
              alt="LinkedIn"
              style={{
                width: '2rem',
                height: '2rem',
                filter: 'grayscale(100%)',
                opacity: 0.8,
              }}
            />
          </a>
          <a
            href="mailto:enomfon20@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease, filter 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'grayscale(0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          >
            <img
              src="email.svg"
              alt="Email"
              style={{
                width: '2rem',
                height: '2rem',
                filter: 'grayscale(100%)',
                opacity: 0.8,
              }}
            />
          </a>
          <a
            href="https://github.com/okonenomfon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease, filter 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'grayscale(0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          >
            <img
              src="github.svg"
              alt="Github"
              style={{
                width: '2rem',
                height: '2rem',
                filter: 'grayscale(100%)',
                opacity: 0.8,
              }}
            />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
