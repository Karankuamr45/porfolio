import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.css'; 

const ProjectCard = ({ name, description, image,link }) => {

  useEffect(() => {
    AOS.init({ duration: 1500}); // Adjust duration and other options as needed
  }, []);

  return (
    
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600  transition-colors duration-300 "
        data-aos="fade-up"
      >
      <div className="bg-gradient-to-r from-indigo-900 to-gray-800 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" >
      <img src={image} alt={name} className="w-full h-52 object-cover object-center mb-4 transition-transform transform hover:scale-110" />
      <div className="p-4">
        <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
        <p className="text-white mb-2">{description}</p>
          <span className="text-indigo-600 hover:underline transition-colors duration-300">View Project</span>
      </div>
    </div>
      </a>
  
   
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 bg-white mb-7">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-4">
        {projects.map((project, index) => (
          <ProjectCard  key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
