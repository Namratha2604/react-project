// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../images/1.png';
// import introImage from '../images/pooja2.jpeg';
// import serviceImage from '../images/s1.jpeg';
// import featureIcon1 from '../images/f4.png';
// import featureIcon2 from '../images/f6.png';
// import featureIcon3 from '../images/f1.png';
// import featureIcon4 from '../images/f2.png';

// function Home() {
//   return (
//     <>
//       <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 text-lg-start text-center">
//               <h3 className="display-4 mb-2">Hey!</h3>
//               <h2 className="display-5 mb-3">Welcome to</h2>
//               <h1 className="display-1 text-success">WhatsUp Dentist!!</h1>
//               <p className="fs-5 mb-5">Your Virtual Smile Care Partner: Expert Advice Anytime, Anywhere</p>
//               <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//             </div>
//             <div className="col-lg-6 text-center d-none d-lg-block">
//               <img src={heroImage} className="img-fluid" alt="Gunda Namratha" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="intro" className="d-flex align-items-start py-5">
//         <div className="container">
//           <div className="row align-items-center text-center text-md-start">
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <img src={introImage} id="intro-img" className="img-fluid rounded-circle mx-auto" alt="Introduction" />
//             </div>
//             <div className="col-lg-8 col-md-6 col-sm-12">
//               <h3 className="fs-1 mb-0">Let me Introduce <br /> Myself</h3>
//               <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
//                 I am <i className="text-primary">Dr. Darahasa</i>, a dedicated dental professional with over 5 years of experience in providing exceptional dental care. I completed my studies at the prestigious Kamineni Institute of Dental Science, Nalgonda. My commitment to excellence and passion for helping patients achieve optimal oral health have established me as a trusted and good dentist. Whether you need a second opinion or are experiencing dental issues that prevent you from visiting a clinic, I am here to offer expert advice and personalized care through the convenience of Online Consultation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="feature" className="section-p1 py-5">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//               <div className="fe-box p-3 shadow border rounded">
//               <img src={featureIcon1} className="img-fluid mb-3" alt="" />
//                 <h6 className="p-2 rounded" style={{ backgroundColor: '#c8def4' }}>Convenient Consultations</h6>
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//               <div className="fe-box p-3 shadow border rounded">
//               <img src={featureIcon2} className="img-fluid mb-3" alt="" />
//                 <h6 className="p-2 rounded" style={{ backgroundColor: '#f8e1be' }}> Expert Second Opinion</h6>
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//               <div className="fe-box p-3 shadow border rounded">
//               <img src={featureIcon3} className="img-fluid mb-3" alt="" />
//                 <h6 className="p-2 rounded" style={{ backgroundColor: '#cae9f4' }}>24/7 Emergency Advice</h6>
//               </div>
//             </div>
//             <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
//               <div className="fe-box p-3 shadow border rounded">
//               <img src={featureIcon4} className="img-fluid mb-3" alt="" />
//                 <h6 className="p-2 rounded" style={{ backgroundColor: '#e9caf9' }}>All time Personalized Care</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="service" className="py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//             <img src={serviceImage} className="img-fluid" alt="" />
//             </div>
//             <div className="col-md-6 text-center">
//               <h3 className="fs-1 mb-3">Online Consultation</h3>
//               <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
//                 At <i>WhatsUp Dentist</i>, we offer comprehensive online consultation services, providing you with expert dental care from the comfort of your home. Whether you need a second opinion or have specific dental concerns, Dr. Darahasa is here to assist through a convenient and secure online platform.
//               </p>
//               <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="client" className="py-5">
//         <div className="container text-center">
//           <h1 className="display-6 mb-4">Look What Our Clients Say</h1>
//           <div className="row">
//             <div className="col-md-3 mb-4">
//               <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//                 <p>Dr. Darahasa's online consultation was incredibly helpful. I received clear explanations and effective solutions for my dental issues without needing to visit the clinic. Very satisfied with the outcome!<br /><i>-Srinivas</i></p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//                 <p>The online consultation with Dr. Darahasa was excellent. I got detailed advice and quick responses to my dental concerns, all from the comfort of my home. Highly recommend!<br /><i>-Sai Sathvik</i></p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//                 <p>I was unsure about my dental issue and reached out to Dr. Darahasa. The consultation was informative, and I left feeling much more confident about my dental health. Thank you!<br /><i>-Namratha</i></p>
//               </div>
//             </div>
//             <div className="col-md-3 mb-4">
//               <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//                 <p>Highly satisfied with the service! Dr. Darahasa was attentive, and the advice I received was spot-on. It's a game-changer to have access to such quality care online.<br /><i>-Srinivas</i></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="newsletter" className="py-5" style={{ backgroundColor: '#3b6ea0' }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-6 text-start text-md-start text-white mb-3">
//               <h3 style={{ fontSize: '40px', fontWeight: 700 }}>Get in touch with us</h3>
//               <p style={{ fontSize: '15px' }}>
//                 Book your first consultation at just 
//                 <span style={{ fontSize: '25px', fontWeight: 700, color: '#cce7d0' }}> Rs 100</span>
//               </p>
//             </div>
//             <div className="col-md-6">
//               <div className="form d-flex justify-content-center justify-content-md-end">
//                 <input type="text" className="form-control me-2" 
//                        style={{ height: '4.127rem', padding: '0 1.25em', fontSize: '14px', border: '1px solid transparent', borderRadius: '4px', outline: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} 
//                        placeholder="Your mobile number" />
//                 <Link to="/booking" className="btn btn-primary normal" 
//                         style={{ backgroundColor: '#9cbfe3', color: '#fff', border: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 2 }}>
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;






import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/1.png';
import introImage from '../images/pooja2.jpeg';
import serviceImage from '../images/s1.jpeg';
import featureIcon1 from '../images/f4.png';
import featureIcon2 from '../images/f6.png';
import featureIcon3 from '../images/f1.png';
import featureIcon4 from '../images/f2.png';

function Home() {
  return (
    <>
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
              <img src={heroImage} className="img-fluid" alt="Gunda Namratha" />
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="d-flex align-items-start py-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
              <img src={introImage} id="intro-img" className="img-fluid rounded-circle mx-auto" alt="Introduction" />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <h3 className="fs-1 mb-0">Let me Introduce <br /> Myself</h3>
              <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
                I am <i className="text-primary">Dr. Darahasa</i>, a dedicated dental professional with over 5 years of experience in providing exceptional dental care. I completed my studies at the prestigious Kamineni Institute of Dental Science, Nalgonda. My commitment to excellence and passion for helping patients achieve optimal oral health have established me as a trusted and good dentist. Whether you need a second opinion or are experiencing dental issues that prevent you from visiting a clinic, I am here to offer expert advice and personalized care through the convenience of Online Consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="section-p1 py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="fe-box p-3 shadow border rounded">
              <img src={featureIcon1} className="img-fluid mb-3" alt="" />
                <h6 className="p-2 rounded" style={{ backgroundColor: '#c8def4' }}>Convenient Consultations</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="fe-box p-3 shadow border rounded">
              <img src={featureIcon2} className="img-fluid mb-3" alt="" />
                <h6 className="p-2 rounded" style={{ backgroundColor: '#f8e1be' }}> Expert Second Opinion</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="fe-box p-3 shadow border rounded">
              <img src={featureIcon3} className="img-fluid mb-3" alt="" />
                <h6 className="p-2 rounded" style={{ backgroundColor: '#cae9f4' }}>24/7 Emergency Advice</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
              <div className="fe-box p-3 shadow border rounded">
              <img src={featureIcon4} className="img-fluid mb-3" alt="" />
                <h6 className="p-2 rounded" style={{ backgroundColor: '#e9caf9' }}>All time Personalized Care</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
            <img src={serviceImage} className="img-fluid" alt="" />
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

      <section id="client" className="py-5">
        <div className="container text-center">
          <h1 className="display-6 mb-4">Look What Our Clients Say</h1>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
                <p>Dr. Darahasa's online consultation was incredibly helpful. I received clear explanations and effective solutions for my dental issues without needing to visit the clinic. Very satisfied with the outcome!<br /><i>-Srinivas</i></p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
                <p>The online consultation with Dr. Darahasa was excellent. I got detailed advice and quick responses to my dental concerns, all from the comfort of my home. Highly recommend!<br /><i>-Sai Sathvik</i></p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
                <p>I was unsure about my dental issue and reached out to Dr. Darahasa. The consultation was informative, and I left feeling much more confident about my dental health. Thank you!<br /><i>-Namratha</i></p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
                <p>Highly satisfied with the service! Dr. Darahasa was attentive, and the advice I received was spot-on. It's a game-changer to have access to such quality care online.<br /><i>-Srinivas</i></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-5" style={{ backgroundColor: '#3b6ea0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start text-md-start text-white mb-3">
              <h3 style={{ fontSize: '40px', fontWeight: 700 }}>Get in touch with us</h3>
              <p style={{ fontSize: '15px' }}>
                Book your first consultation at just 
                <span style={{ fontSize: '25px', fontWeight: 700, color: '#cce7d0' }}> Rs 100</span>
              </p>
            </div>
            <div className="col-md-6">
              <div className="form d-flex justify-content-center justify-content-md-end">
                <input type="text" className="form-control me-2" 
                       style={{ height: '4.127rem', padding: '0 1.25em', fontSize: '14px', border: '1px solid transparent', borderRadius: '4px', outline: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} 
                       placeholder="Your mobile number" />
                <Link to="/booking" className="btn btn-primary normal" 
                        style={{ backgroundColor: '#9cbfe3', color: '#fff', border: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 2 }}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;