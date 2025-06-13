import React, { useEffect, useState, useRef } from 'react';
import '../assets/css/navbar.css';
import {
  BiHome, BiUser, BiCodeAlt, BiBook,
  BiCollection, BiMedal, BiBadgeCheck, BiFileBlank, BiEnvelope,
  BiMenu, BiX
} from 'react-icons/bi';

const sections = [
  { id: 'home', icon: <BiHome />, label: 'Home' },
  { id: 'about', icon: <BiUser />, label: 'About' },
  { id: 'skills', icon: <BiCodeAlt />, label: 'Skills' },
  { id: 'education', icon: <BiBook />, label: 'Education' },
  { id: 'projects', icon: <BiCollection />, label: 'Projects' },
  { id: 'certifications', icon: <BiBadgeCheck />, label: 'Certifications' },
  { id: 'publications', icon: <BiFileBlank />, label: 'Publications' },
  { id: 'achievements', icon: <BiMedal />, label: 'Achievements' },
  { id: 'contact', icon: <BiEnvelope />, label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false); // close on click
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      }, { threshold: 0.6 }
    );

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <button className="menu-toggle" onClick={() => setMobileMenuOpen(true)}>
        <BiMenu />
      </button>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`} />

      <header
        id="header"
        ref={headerRef}
        className={`header d-flex flex-column justify-content-center ${isMobileMenuOpen ? 'header-show' : ''}`}
      >
        <button className="menu-close" onClick={() => setMobileMenuOpen(false)}>
          <BiX />
        </button>
        <nav id="navmenu" className="navmenu">
          <ul>
            {sections.map(section => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => handleAnchorClick(e, section.id)}
                  className={activeSection === section.id ? 'active' : ''}
                >
                  {section.icon}
                  <span>{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;