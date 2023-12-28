// src/components/Footer.js
import React from 'react';

const Footer = ({ socialLinks }) => {
  return (
    <footer id="social" className="bg-gray-800 bg-gradient-to-r from-indigo-900 to-gold-500 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition-all duration-300"
            >
              <i className={`fab fa-${link.icon} text-2xl`} />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">© 2023 Karan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
