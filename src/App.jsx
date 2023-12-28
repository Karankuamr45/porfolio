// src/App.js
import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ContactForm from './ContactForm';

function App() {
 // src/App.js
const projects = [
  {
    name: 'E-commerce Website',
    description: 'Built a fully functional e-commerce site using React and Redux.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKqiI_xL3b6MUrZ6EFcfgEMFKaD63KdStbMCuJH7dOZmvFdz8WhQwNfMWJYvjBnSOsCg&usqp=CAU',
  },
  {
    name: 'Task Management App',
    description: 'Developed a task management app with CRUD functionality using Node.js and MongoDB.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn-_CuQHM_M5eK7e4HZFwO-mkcSXzRfMKnvRZ8umDUfv3Sfekinem4MUB3s_Wv_MtH3c&usqp=CAU',
  },
  {
    name: 'Portfolio Website',
    description: 'Designed and implemented a portfolio website using React and Tailwind CSS.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8jbAxwM1MPj2AHUhgNJ1WRwW_P7yHUq5xiAwRDouaw&s',
  },
];


  const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS'];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/karan-kumar-7686b7230/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/Karankuamr45', icon: 'github' },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle/', icon: 'twitter' },
    { name: 'Portfolio Blog', url: 'https://yourblog.com/', icon: 'link' },
  ];

  return (
    <div className="App">
      <Header name="Karan" description="Web Developer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQCdxxiSrlUYNUfFdRtTZeVcJFyjT3KpM9p4GBCgfywdlNJ7twEwJNpRktoJkaDucbKo&usqp=CAU" />
      <div className="container mx-auto">
        <Projects projects={projects} />
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
