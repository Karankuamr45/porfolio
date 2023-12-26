// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';

const Header = ({ name, description, image }) => {
  return (
    <div>
      <header className="text-center bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-center">
          <nav className="flex justify-center space-x-6">
            <Link to="projects" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Skills
            </Link>
            <Link to="social" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Social
            </Link>
          </nav>
        </div>
      </header>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-2">{name}</h1>
            <p className="text-lg text-gray-600">{description}</p>
          </div>
          <div className="rounded-full overflow-hidden border-4 border-white w-80 h-80">
            <img src={image} alt={name} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
