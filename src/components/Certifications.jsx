import React, { useState } from 'react';
import '../assets/css/certifications.css';

import cert1 from '../assets/images/certifications/cert1.jpg';
import cert2 from '../assets/images/certifications/cert2.jpg';
import cert3 from '../assets/images/certifications/cert3.jpg';
import cert4 from '../assets/images/certifications/cert4.jpg';
import cert5 from '../assets/images/certifications/cert5.jpg';
import cert6 from '../assets/images/certifications/cert6.jpg';

const certifications = [
  { id: 1, name: 'Cert 1', image: cert1 },
  { id: 2, name: 'Cert 2', image: cert2 },
  { id: 3, name: 'Cert 3', image: cert3 },
  { id: 4, name: 'Cert 4', image: cert4 },
  { id: 5, name: 'Cert 5', image: cert5 },
  { id: 6, name: 'Cert 6', image: cert6 },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePreview = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.name} className="cert-image" />
            <div className="cert-overlay">
              <h3>{cert.name}</h3>
              <button className="preview-btn" onClick={() => handlePreview(cert.image)}>
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Preview" />
        </div>
      )}
    </section>
  );
};

export default Certifications;
