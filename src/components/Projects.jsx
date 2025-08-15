// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React, Tailwind, and Vite.",
    tech: ["React", "Tailwind", "Vite"],
    image: "/Coder.png",
    liveLink: "https://your-portfolio-link.com",
    github: "https://github.com/nikhilSbup/portfolio"
  },
  {
     title: "ARIA - Advance Responsive Intelligent Assistance",
     description: "A real-time AI assistant with voice and text interaction, live web search, and API integrations — combining speed, smarts, and style.",
     tech: ["Python", "Tkinter", "JavaScript", "API Integrations"],
     image: "/ARIA.gif",
     liveLink: "#", 
     github: "https://github.com/nikhilSbup/ARIA"
  }
];

const Projects = () => {
  return (
    <section name="Projects" className="py-16 bg-white-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
