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
            I'm a passionate developer focused on building accessible, responsive, and high-quality web experiences.
            With a strong foundation in full-stack development, I enjoy solving real-world problems using clean and scalable code.
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
