import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const education = [
    'Bachelor of Science in Software Engineering - Pan-Atlantic University, Nigeria (2027)',
    'Senior Secondary School Certificate - Air Force Comprehensive School (2020)',
  ];

  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <ul className="list-disc text-left text-gray-700 max-w-2xl mx-auto space-y-4">
          {education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Education;
