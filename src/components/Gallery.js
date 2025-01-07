import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpeg',
    'eno.jpg',
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
      <div className="overflow-hidden relative w-full h-64">
        <motion.div
          className="flex space-x-4 w-[200%] absolute"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-1/4">
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="h-64 w-full object-cover rounded shadow-md"
              />
            </div>
          ))}
          {/* Duplicate the images for seamless looping */}
          {images.map((img, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 w-1/4">
              <img
                src={img}
                alt={`Gallery Duplicate ${index}`}
                className="h-64 w-full object-cover rounded shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
