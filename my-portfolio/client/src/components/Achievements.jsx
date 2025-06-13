import React from 'react';
import '../assets/css/achievements.css';

import achieve1 from '../assets/images/achievements/achieve1.jpg';
import achieve2 from '../assets/images/achievements/achieve2.jpg';
import achieve3 from '../assets/images/achievements/achieve3.jpg';
import achieve4 from '../assets/images/achievements/achieve4.jpg';
import achieve5 from '../assets/images/achievements/achieve5.jpg';
import achieve6 from '../assets/images/achievements/achieve6.jpg';

const achievements = [
  { id: 1, name: 'Achieve 1', image: achieve1 },
  { id: 2, name: 'Achieve 2', image: achieve2 },
  { id: 3, name: 'Achieve 3', image: achieve3 },
  { id: 4, name: 'Achieve 4', image: achieve4 },
  { id: 5, name: 'Achieve 5', image: achieve5 },
  { id: 6, name: 'Achieve 6', image: achieve6 },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achieve-grid">
        {achievements.map((ach) => (
          <div className="achieve-card" key={ach.id}>
            <img src={ach.image} alt={ach.name} className="achieve-image" />
            <div className="achieve-overlay">
              <h3>{ach.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
