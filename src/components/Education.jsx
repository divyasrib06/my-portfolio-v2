// src/components/Education.jsx
import React from 'react';
import '../assets/css/education.css';

const educationData = [
  {
    year: '2023 - 2025',
    institution: 'University of North Texas, Denton',
    degree: '🎓 Master of Science in Computer Science',
    description: 'Gained hands-on experience in development and data-driven projects.',
    highlights: [
      'Relevant Coursework: Software Engineering, Machine Learning, Deep Learning, Cloud Computing', 
      'Gained practical experience in building scalable systems and backend services using modern frameworks, while enhancing proficiency in database design, data flow optimization, and cloud-based deployments.',
    ]
  },
  {
    year: '2019 - 2023',
    institution: 'Anil Neerukonda Institute of Technology and Sciences, India',
    degree: '🏫 Bachelors in Computer Science and Engineering',
    description: 'Graduated with distinction and actively involved in research activities.',
    highlights: [
      ' Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, Web Technologies, Software Engineering',
      'Gained practical experience in full-stack development through hands-on academic projects and labs, working with technologies like HTML, CSS, JavaScript, Node.js, and MySQL. Developed a strong foundation in backend logic, database integration, and responsive web design.'
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="entry" key={index}>
            <div className="title">
              <h3>{item.year}</h3>
              <p>{item.institution}</p>
            </div>
            <div className="body">
              <p><strong>{item.degree}</strong>: {item.description}</p>
              <ul>
                {item.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;