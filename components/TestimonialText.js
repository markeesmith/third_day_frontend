import React from 'react';
import PropTypes from 'prop-types';

const TestimonialText = ({ headline, text, name }) => (
  <div>
    <h1>{headline}</h1>
    <h2>{text}</h2>
    <p>{name}</p>
  </div>
);

TestimonialText.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialText;
