// src/components/Home.jsx
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import homeBg from '../assets/images/home-bg.jpg'; // ✅ This must exist
import '../assets/css/home.css';


const Home = () => {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: [' Full Stack Developer, Software Engineer, Backend Engineer, Data Analyst, Clod Enthusiast '],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="home">
      <img src={homeBg} alt="Home background" />
      <div className="container">
        <h2>Hi, I'm Divya Sri Bevara</h2>
        <p>
          I'm a <span className="typed"></span>
        </p>
       <div className="social-links">
  <a href="https://www.linkedin.com/in/divya-sri-bevara/" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>
  <a href="mailto:divyasribevara8@gmail.com">
    <i className="bi bi-envelope-fill"></i>
  </a>
  <a href="tel:+19452680621">
    <i className="bi bi-telephone-fill"></i>
  </a>
  <a href="https://github.com/divyasrib06" target="_blank" rel="noopener noreferrer">
    <i className="bi bi-github"></i>
  </a>
</div>


      </div>
    </section>
  );
};

export default Home;
