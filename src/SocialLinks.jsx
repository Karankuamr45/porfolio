// src/components/SocialLinks.js
import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <section id="social" className="py-16 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">Social Links</h2>
      <ul className="flex">
        {links.map((link, index) => (
          <li key={index} className="mr-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
