import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = ({ skills }) => {

  useEffect(() => {
    AOS.init({ duration: 1500}); // Adjust duration and other options as needed
  }, []);

  return (
    <section id="skills" className="py-16 my-24 bg-gradient-to-r from-indigo-900 to-gray-800" data-aos="fade-up">
      <h2 className="text-2xl text-center font-bold mb-8 text-white">Skills</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gradient-to-r from-indigo-900 to-gray-800 text-white rounded-full px-4 py-2 m-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
