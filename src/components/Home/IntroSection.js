// import React from 'react';

// const IntroSection = ({ introImageRef, introImage }) => (
//   <section id="intro" className="d-flex align-items-start py-5">
//     <div className="container">
//       <div className="row align-items-center text-center text-md-start">
//         <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//           <img 
//             ref={introImageRef}
//             src={introImage}
//             id="intro-img" 
//             className="img-fluid rounded-circle mx-auto slide-image" 
//             alt="Introduction" 
//           />
//         </div>
//         <div className="col-lg-8 col-md-6 col-sm-12">
//           <h3 className="fs-1 mb-0">Let me Introduce <br /> Myself</h3>
//           <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
//             I am <i className="text-primary">Dr. Darahasa</i>, a dedicated dental professional with over 5 years of experience in providing exceptional dental care. I completed my studies at the prestigious Kamineni Institute of Dental Science, Nalgonda. My commitment to excellence and passion for helping patients achieve optimal oral health have established me as a trusted and good dentist. Whether you need a second opinion or are experiencing dental issues that prevent you from visiting a clinic, I am here to offer expert advice and personalized care through the convenience of Online Consultation.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default IntroSection;




import React, { useRef, useEffect } from 'react';
import introImage from '../../images/pooja2.jpeg';

function IntroSection() {
  const introImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (introImageRef.current) {
      observer.observe(introImageRef.current);
    }

    return () => {
      if (introImageRef.current) {
        observer.unobserve(introImageRef.current);
      }
    };
  }, []);

  return (
    <section id="intro" className="d-flex align-items-start py-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3 order-2 order-lg-1">
            <img 
              ref={introImageRef}
              src={introImage}
              id="intro-img" 
              className="img-fluid rounded-circle mx-auto slide-image" 
              alt="Introduction" 
              style={{ maxWidth: '300px' }}
            />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 order-1 order-lg-2">
            <h3 className="fs-1 mb-0">Let me Introduce <br /> Myself</h3>
            <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
              I am <i style={{ color: '#3b6ea0' }}>Dr. Darahasa</i>, a dedicated dental professional with over 5 years of experience in providing exceptional dental care. I completed my studies at the prestigious Kamineni Institute of Dental Science, Nalgonda. My commitment to excellence and passion for helping patients achieve optimal oral health have established me as a trusted and good dentist. Whether you need a second opinion or are experiencing dental issues that prevent you from visiting a clinic, I am here to offer expert advice and personalized care through the convenience of Online Consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

