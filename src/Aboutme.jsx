import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from './assets/me.jpeg';
import {Link} from 'react-scroll';

const AboutMe = ({ name, role, bio, image }) => {

  useEffect(() => {
    AOS.init({ duration: 1500}); // Adjust duration and other options as needed
  }, []);

  return (
    <section id="about" className="py-16 bg-white  text-center bg-gradient-to-r from-indigo-900 to-gray-800 text-white" data-aos="fade-up-right">
      <div className="flex flex-col items-center">
        <img src={me} alt={name} className="w-32 h-32 object-cover object-center rounded-full mb-4" />
        <h2 className="text-3xl font-bold text-white">{name}</h2>
        <p className="text-lg text-gray-500 mb-4">{role}</p>
        <p className="text-white sm:w-[800px] ">{bio}</p>
        <Link to="contact" smooth={true} duration={500} className=" mt-5 cursor-pointer bg-gradient-to-r from-indigo-900 to-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
              Feel free to contact me
         </Link>
      </div>
    </section>
  );
};

export default AboutMe;
