import React from 'react';
import PropTypes from 'prop-types';
import TestimonialEntry from './TestimonialEntry';

const Testimonial = ({ testimonial }) => {
  const needHR = testimonial.testimonial_id > 1;
  const imgLeft = testimonial.testimonial_id % 2 !== 0;

  return (
    <TestimonialEntry
      hr={needHR}
      imgLeft={imgLeft}
      galPath={testimonial.gallery.galPath}
      headline={testimonial.headline}
      body={testimonial.body}
      name={testimonial.customer.firstName}
    />
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.shape({
    testimonial_id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      customer_id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
    }).isRequired,
    gallery: PropTypes.shape({
      gallery_id: PropTypes.number.isRequired,
      galPath: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Testimonial;
