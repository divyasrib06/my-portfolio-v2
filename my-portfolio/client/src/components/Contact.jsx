import React, { useState } from 'react';
import Swal from 'sweetalert2';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../assets/css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5050';

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire('Error', 'All fields are required!', 'warning');
      return;
    }

    setSending(true);
    NProgress.start();

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const resText = await response.text();

      if (response.ok) {
        Swal.fire({
          title: 'Success 🎉',
          html: '<b>Your message has been delivered successfully!</b><br>Thanks for reaching out.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Close',
          confirmButtonColor: '#007bff',
          customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-text'
          },
          backdrop: 'rgba(0, 0, 0, 0.5)' // ✅ No image, just clean backdrop
        });

        if (window.navigator.vibrate) window.navigator.vibrate(100);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(resText || 'Something went wrong. Try again.');
      }

    } catch (error) {
      console.error(error);
      Swal.fire('Error', error.message || 'Failed to send message.', 'error');
    } finally {
      NProgress.done();
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="form-container">
        <h2 className="section-title">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group textarea-group">
            <FontAwesomeIcon icon={faComment} className="input-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;