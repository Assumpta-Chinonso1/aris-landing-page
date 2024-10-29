import React from 'react';
import './HeroSection.css';
import assets from '../assets/assets';

const HeroSection = () => {
  return (
    <section className="heros">
      <div className="hero-contents">
        <h2>100% Responsive On Media Devices</h2>
        <p>
          Aris is a beautiful and evergreen design for personal use. You can manage 
          this website as per your desire. This website can easily be viewed on all small 
          and large screens from 320px to 1920px.
        </p>
        <a href="https://musical-pony-5be72a.netlify.app/" target="_blank" rel="noopener noreferrer" className="hero-button">
          Visit Demo
        </a>
      </div>

      <div className="hero-image">
        <img 
          src={assets.piff} 
          alt="Responsive Design Preview" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
