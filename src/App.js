// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/css/global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Analytics } from '@vercel/analytics/react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Certifications />
                <Publications />
                <Achievements />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  );
};

export default App;