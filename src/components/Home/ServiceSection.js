import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = ({ serviceImageRef, serviceImage }) => (
  <section id="service" className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            ref={serviceImageRef} 
            src={serviceImage} 
            className="img-fluid slide-image" 
            alt="Our Services" 
          />
        </div>
        <div className="col-md-6 text-center">
          <h3 className="fs-1 mb-3">Online Consultation</h3>
          <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
            At <i>WhatsUp Dentist</i>, we offer comprehensive online consultation services, providing you with expert dental care from the comfort of your home. Whether you need a second opinion or have specific dental concerns, Dr. Darahasa is here to assist through a convenient and secure online platform.
          </p>
          <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceSection;