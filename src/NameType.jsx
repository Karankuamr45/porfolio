import React, { useEffect } from 'react';
import Typed from 'typed.js';

const NameType = () => {
  useEffect(() => {
    // Create a new instance of Typed when the component mounts
    const options = {
      strings: ["Karan"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed("#typed-output", options);

    // Cleanup the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return <h1 id="typed-output" className="text-6xl font-bold text-white mb-4 transform hover:scale-110 transition-transform"></h1> 
  ;

};

export default NameType;
