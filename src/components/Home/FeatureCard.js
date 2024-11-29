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



// import React from 'react';
// import { features } from './data';

// function FeatureCard({ icon, title, bgColor }) {
//   return (
//     <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//       <div className="fe-box p-3 shadow border rounded">
//         <img src={icon} className="img-fluid mb-3" alt={title} />
//         <h6 className="p-2 rounded" style={{ backgroundColor: bgColor }}>{title}</h6>
//       </div>
//     </div>
//   );
// }

// export function FeatureSection() {
//   return (
//     <section id="feature" className="section-p1 py-5">
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeatureCard;
import React from 'react';
import { features } from './data';

function FeatureCard({ icon, title, bgColor }) {
  return (
    <div className="col-6 col-md-3 mb-4 d-flex">
      <div className="fe-box flex-grow-1 p-3 shadow border rounded d-flex flex-column align-items-center justify-content-between">
        <div className="text-center">
          <img 
            src={icon} 
            className="img-fluid mb-3" 
            alt={title} 
            style={{ 
              width: '100%', 
              maxWidth: '120px', 
              height: '100px', 
              objectFit: 'contain' 
            }} 
          />
        </div>
        <h6 
          className="p-2 rounded text-center w-100" 
          style={{ 
            backgroundColor: bgColor, 
            fontSize: '0.9rem',
            marginTop: 'auto'
          }}
        >
          {title}
        </h6>
      </div>
    </div>
  );
}

export function FeatureSection() {
  return (
    <section id="feature" className="section-p1 py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;