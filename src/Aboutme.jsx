// src/components/AboutMe.js
import React from 'react';

const AboutMe = ({ name, role, bio, image }) => {
  return (
    <section id="about" className="py-16 bg-white text-center bg-gradient-to-r from-indigo-900 to-gray-800 text-white ">
      <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-32 h-32 object-cover object-center rounded-full mb-4" />
        <h2 className="text-3xl font-bold text-white">{name}</h2>
        <p className="text-lg text-gray-500 mb-4">{role}</p>
        <p className="text-white">{bio}</p>
      </div>
    </section>
  );
};

export default AboutMe;
