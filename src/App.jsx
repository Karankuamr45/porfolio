// src/App.js
import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ContactForm from './ContactForm';
import AboutMe from './Aboutme';

function App() {
 // src/App.js
const projects = [
  {
    name: 'Restaurant Api maker',
    description: 'Built a fully functional  api maker with React,tailwind,node,express,mongoose.where you can do crud operation.',
    image: 'https://res.cloudinary.com/dsmg4dxbj/image/upload/v1705822469/abrjjj4glypx1qi4iuf3.jpg',
    link:'https://restaurant-api-maker.vercel.app/'
  },
  {
    name: 'GreatKart',
    description: 'Developed a ecom app with some functionality using node,ejs,express,mongoose, and expres-session with authentication.',
    image: 'https://res.cloudinary.com/dsmg4dxbj/image/upload/v1705822425/jzbtwut2tsafiepk5hn0.jpg',
    link:'https://greatkart-qio3.onrender.com'
  },
  {
    name: 'Food Order app',
    description: 'Developed a food order app with  using react,tailwind,node,express,mongoose,and expres-session.',
    image: 'https://res.cloudinary.com/dsmg4dxbj/image/upload/v1705824055/dfyaoyvqtgaf0f8f02c0.jpg',
    link:'https://ziggy-sooty.vercel.app/'
  },
 
];


  const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS','Bootstrap','jQuery', 'Tailwind CSS'];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karan-kumar-7686b7230/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/Karankuamr45', icon: 'github' },
    // { name: 'Twitter', url: 'https://twitter.com/yourhandle/', icon: 'twitter' },
    // { name: 'Portfolio Blog', url: 'https://yourblog.com/', icon: 'link' },
  ];

  const aboutMeData = {
    name: 'Karan',
    role: 'front-end web developer',
    bio: `Hello, I'm Karan, a dedicated Front-End Web Developer with a keen eye for design and a love for creating seamless, user-friendly experiences. My journey in web development started with a curiosity for turning ideas into interactive, visually appealing websites.Whether it's developing responsive and dynamic components  or ensuring a pixel-perfect design , I thrive on transforming ideas into polished, functional, and engaging websites.`,
    image: 'https://w0.peakpx.com/wallpaper/709/897/HD-wallpaper-manhwa-anime-boy.jpg',
  };

  return (
    <div className="overflow-hidden">
      <Header name="Karan" description="Front-End Web Developer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQCdxxiSrlUYNUfFdRtTZeVcJFyjT3KpM9p4GBCgfywdlNJ7twEwJNpRktoJkaDucbKo&usqp=CAU" />
      <div className="container mx-auto">
        <Projects projects={projects} />
        <AboutMe {...aboutMeData} />
        <Skills skills={skills} />
        <ContactForm/>
        {/* <SocialLinks links={socialLinks} /> */}
        
      </div>
      <Footer socialLinks={socialLinks} />
        <ScrollToTop />
    </div>
  );
}

export default App;
