import React from 'react';

const FeatureCard = ({ icon, title, bgColor }) => (
  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
    <div className="fe-box p-3 shadow border rounded">
      <img src={icon} className="img-fluid mb-3" alt={title} />
      <h6 className="p-2 rounded" style={{ backgroundColor: bgColor }}>{title}</h6>
    </div>
  </div>
);

export default FeatureCard;