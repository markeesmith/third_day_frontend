import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TestimonialImage from './TestimonialImage';
import TestimonialText from './TestimonialText';

const TestimonialStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Testimonial = ({ testimonial }) => (
  <TestimonialStyles>
    <TestimonialImage imgSrc="imgSrc" />
    <TestimonialText
      headline={testimonial.headline}
      text={testimonial.body}
      name={testimonial.customer.firstName}
    />
  </TestimonialStyles>
);

Testimonial.propTypes = {
  testimonial: PropTypes.shape({
    testimonial_id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      customer_id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Testimonial;
