// import React from 'react';

// const FeatureCard = ({ icon, title, bgColor }) => (
//   <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//     <div className="fe-box p-3 shadow border rounded">
//       <img src={icon} className="img-fluid mb-3" alt={title} />
//       <h6 className="p-2 rounded" style={{ backgroundColor: bgColor }}>{title}</h6>
//     </div>
//   </div>
// );

// export default FeatureCard;



import React from 'react';
import { features } from './data';

function FeatureCard({ icon, title, bgColor }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
      <div className="fe-box p-3 shadow border rounded">
        <img src={icon} className="img-fluid mb-3" alt={title} />
        <h6 className="p-2 rounded" style={{ backgroundColor: bgColor }}>{title}</h6>
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <section id="feature" className="section-p1 py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;

