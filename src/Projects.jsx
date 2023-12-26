// src/components/Projects.js
import React from 'react';

const ProjectCard = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
      <img src={image} alt={name} className="w-full h-32 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
