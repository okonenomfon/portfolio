import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    image: "portfolio.png",
    link: "https://okonenomfon.github.io/portfolio/",
  },
  {
    title: "House Prices Prediction Model",
    description: "A model to predict the price of houses in a certain region based on specific features.",
    image: "house.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    image: "weather.jpg",
    link: "https://github.com/okonenomfon/projects/tree/main/weather",
  },
  {
    title: "Restaurant Menu GUI",
    description: "A restaurant menu with a cool graphic interface using Python Tkinter.",
    image: "restaurant.png",
    link: "https://github.com/okonenomfon/EOkonCOS102",
  },
  {
    title: "CBT Application",
    description: "A CBT application using C++.",
    image: "cbt.jpg",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with Python Flask.",
    image: "ecom.jpg",
    link: "#",
  },
 /* {
    title: "To-Do list",
    description: "A task management app with drag-and-drop functionality.",
    image: "todo.jpg",
    link: "#",
  },*/
];

function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
