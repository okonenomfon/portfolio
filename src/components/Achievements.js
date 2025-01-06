import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    '2nd place finish 2024 inter-departmental debate competition @ PAU',
    'Deputy Team Lead, Financial Technology Team, The Finance Society @ PAU',
    'Course Representative, Software Engineering Department @ PAU',
    'Published 3 technical articles on Medium',
    'Built 9+ successful projects',
  ];

  return (
    <section id="achievements" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Achievements/ Leadership</h2>
        <ul className="list-disc text-left text-gray-700 max-w-2xl mx-auto space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Achievements;
