import React from 'react';

const TestimonialCard = ({ text, author }) => (
  <div className="col-md-3 mb-4">
    <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
      <p>{text}<br /><i>-{author}</i></p>
    </div>
  </div>
);

export default TestimonialCard;