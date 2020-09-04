import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestimonialImageStyle = styled.div`
  position: relative;
  width: 90%;
  margin-left: 10%;

  img {
    max-width: 80%;
    max-height: 80%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;

const TestimonialImage = ({ imgSrc }) => (
  <TestimonialImageStyle>
    <img src={`${basePath + imgSrc}0-1024.jpg`} alt="Testimonial" />
  </TestimonialImageStyle>
);

TestimonialImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default TestimonialImage;
