import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const hardSkills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'C++', level: 'Beginner' },
    { name: 'Rust', level: 'Beginner' },
  ];

  const softSkills = [
    { name: 'Communication', level: 'Expert' },
    { name: 'Teamwork', level: 'Expert' },
    { name: 'Time Management', level: 'Expert' },
    { name: 'Leadership', level: 'Advanced' },
    { name: 'Problem Solving', level: 'Advanced' },
    { name: 'Adaptability', level: 'Advanced' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        {/* Skills container */}
        <div className="skills-container mb-8">
          {/* Hard Skills */}
          <div className="grid hard-skills">
            <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3>
            {hardSkills.map((skill, index) => (
              <div key={index} className="card">
                <strong>{skill.name}</strong> - {skill.level}
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="grid soft-skills mt-8">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="card">
                <strong>{skill.name}</strong> - {skill.level}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
