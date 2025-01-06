import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        I am an enthusiastic software engineering student with a keen interest in artificial intelligence and financial technology, currently pursuing a Bachelor of Science at Pan-Atlantic University. Proficient in Python and JavaScript with a demonstrated ability to excel in these languages. Eager to apply my skills to innovative projects and actively seeking internship opportunities. Let's connect and explore potential collaborations.
        </p>
        <img
          src="/about.jpg"
          alt="About Me"
          className="about-image rounded-full mx-auto shadow-md max-w-[200px] hover:scale-110 transition-transform duration-300"
        />
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
              src="/linkedin.svg"
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
              src="/email.svg"
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
              src="/github.svg"
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
      </motion.div>
    </section>
  );
}

export default About;
