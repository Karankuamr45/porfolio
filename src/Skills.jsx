// src/components/Skills.js
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-black">Skills</h2>
      <ul className="flex flex-wrap">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-300 rounded-full px-4 py-2 m-2 text-black">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
