// src/components/Skills.js
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-16 my-24 bg-gradient-to-r from-indigo-900 to-gray-800">
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
