import React from 'react';
import '../assets/css/about.css';
import myPhoto from '../assets/images/profile/me.jpg'; // adjust as needed
import resumePDF from '../assets/images/pdfs/Resume.pdf';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-image">
          <img src={myPhoto} alt="My Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
         <p>
  I'm a results-driven Software Engineer with hands-on experience building scalable web applications using Node.js, Express, React, and TypeScript. I specialize in backend architecture, RESTful APIs, JWT authentication, and real-time systems with WebSockets and Redis. With a strong foundation in full-stack development and a passion for clean, production-ready code, I thrive on solving real-world problems that deliver business value. I'm also skilled in CI/CD workflows, cloud deployment, and cross-functional collaboration.
</p>
          <div className="about-buttons">
            <a href={resumePDF} className="btn" download>Download Resume</a>
            <a href={resumePDF} className="btn btn-outline" target="_blank" rel="noreferrer">View Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
