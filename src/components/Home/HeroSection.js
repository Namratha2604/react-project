import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ heroImageRef, heroImage }) => (
  <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-lg-start text-center">
          <h3 className="display-4 mb-2">Hey!</h3>
          <h2 className="display-5 mb-3">Welcome to</h2>
          <h1 className="display-1 text-success">WhatsUp Dentist!!</h1>
          <p className="fs-5 mb-5">Your Virtual Smile Care Partner: Expert Advice Anytime, Anywhere</p>
          <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
        </div>
        <div className="col-lg-6 text-center d-none d-lg-block">
          <img 
            ref={heroImageRef}
            src={heroImage} 
            className="img-fluid slide-image" 
            alt="Gunda Namratha" 
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;