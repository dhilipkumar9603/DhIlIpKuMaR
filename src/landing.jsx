import React from 'react';
import './styles/landing.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import backgroundImage from './assets/landing_bg.png';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1>Dhilip Kumar Kolasanakota</h1>
        <p>Crafting seamless digital experiences with React.js</p>
        <button className="cta-button" onClick={()=>navigate('/app/about')}>Explore My Work</button>
      </div>
    </div>
  );
};

export default Landing;
