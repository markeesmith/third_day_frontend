import React from 'react';
import PropTypes from 'prop-types';

const TestimonialImage = ({imgSrc}) => (
  <div>
    <h1>Testimonial Image</h1>
    <p>{imgSrc}</p>
  </div>
);

TestimonialImage.propTypes = {
  imgSrc: PropTypes.string.isRequired
}

export default TestimonialImage;