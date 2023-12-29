// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import me from './assets/me.jpeg';


const Header = ({ name, description, image }) => {

  return (
    <div>
      <header className="text-center py-8 bg-gradient-to-r from-indigo-900 to-gray-800 text-white animate-float">
        <div className="container mx-auto flex justify-center">
          <nav className="flex justify-center space-x-6 animate-bounce">
            <Link to="projects" smooth={true} duration={500} className="hover:text-gray-200 text-xl sm:text-2xl cursor-pointer">
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-gray-200  text-xl sm:text-2xl cursor-pointer">
              Skills
            </Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-gray-200 text-xl sm:text-2xl cursor-pointer">
              About
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-200 text-xl sm:text-2xl cursor-pointer">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section className="bg-gradient-to-r from-indigo-900 to-gray-800 py-16">
        <div className="container mx-auto flex items-center justify-between xl:w-[900px]">
          <div className="text-left animate__animated animate__pulse transition-transform">
            <h1 className="text-6xl font-bold text-white mb-4 transform hover:scale-110 transition-transform">{name}</h1>
            <p className="text-lg text-white transform hover:translate-x-2 transition-transform">{description}</p>
          </div>
          <div className="rounded-full overflow-hidden border-4 border-white sm:w-64 sm:h-64 w-48 h-48 animate__animated animate__fadeInRight transform transition-transform sm:hover:scale-110">
            <img src={me} alt={name} className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
