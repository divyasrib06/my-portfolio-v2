// src/components/Project.jsx
import React from 'react';
import '../assets/css/projects.css';

import stroke from '../assets/images/projects/stroke.jpg';
import youtube from '../assets/images/projects/youtube.jpg';
import sentiment from '../assets/images/projects/sentiment.jpg';
import shortener from '../assets/images/projects/shortener.jpg';
import kitten from '../assets/images/projects/kitten.jpg';
import puppy from '../assets/images/projects/puppy.jpg';

const projects = [
  {
    title: 'Brain Stroke Prediction',
    description: 'Detects and classifies stroke types using CNN, SVM, and Decision Tree on MRI scans and patient data.',
    image: stroke,
    pdf: '/reports/brain_stroke_paper.pdf'
  },
  {
    title: 'YouTube EDA',
    description: 'Analyzed trending video data using Python to uncover patterns in views, likes, timing, and categories.',
    image: youtube,
    pdf: '/reports/EDA_Youtube.pdf'
  },
  {
    title: 'Plant Care App',
    description: 'Mobile app using CNN and TensorFlow Lite to identify plant diseases from leaf images with multilingual support.',
    image: sentiment,
    pdf: '/reports/plant_care_paper.pdf'
  },
  {
    title: 'Job Application Tracker Web App',
    description: 'MERN stack tracker to manage job applications with status filters, CRUD operations, and deadline alerts.',
    image: shortener,
    pdf: '/reports/job_application_tracker.pdf'
  },
  {
    title: 'Real Time Messaging Platform',
    description: 'Socket.IO and Redis-based chat system with JWT auth, room-based messaging, and low-latency delivery.',
    image: kitten,
    pdf: '/reports/real_time_messaging_platform.pdf'
  },
  {
    title: 'Car Rental Management Systems',
    description: 'Online portal for car bookings with PHP, MySQL, and role-based access for customers and admins.',
    image: puppy,
    pdf: '/reports/car_rental_mgmt.pdf'
  },
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <article className="card" key={index}>
            <img
              className="card__background"
              src={proj.image}
              alt={proj.title}
            />
            <div className="card__content">
              <div className="card__content--container">
                <h3 className="card__title">{proj.title}</h3>
                <p className="card__description">{proj.description}</p>
              </div>
              {proj.pdf ? (
                <a
                  href={proj.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__button"
                >
                  Read more
                </a>
              ) : (
                <button className="card__button" disabled>
                  Read more
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
