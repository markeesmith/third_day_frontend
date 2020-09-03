import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestimonialImageStyle = styled.div`
  width: 90%;
  margin-left: 10%;
  background-color: orange;
`;

const TestimonialImage = ({ imgSrc }) => (
  <TestimonialImageStyle>
    <h1>Testimonial Image</h1>
    <p>{imgSrc}</p>
  </TestimonialImageStyle>
);

TestimonialImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default TestimonialImage;
