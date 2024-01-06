import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  useEffect(() => {
    // Create a new instance of Typed when the component mounts
    const options = {
      strings: ["Front-End Web Developer"],
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

  return <span id="typed-output" className="text-lg text-white"></span>;
};

export default TypedText;
