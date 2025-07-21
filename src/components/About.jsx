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
I'm a driven developer with hands-on experience in full-stack development, backend systems, and data analysis. I’ve built scalable applications using Node.js, React, and TypeScript, and worked extensively with MySQL and RESTful APIs. I enjoy turning complex problems into simple, clean solutions. I'm currently seeking Software Engineer, Data Analyst, or Full Stack roles where I can grow and contribute meaningful work.
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
