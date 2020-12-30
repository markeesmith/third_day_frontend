import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { s3Base } from '../config';

const TestimonialImageStyle = styled.div`
  position: ${(props) => (props.isMobile ? 'initial' : 'relative')};
  width: ${(props) => (props.isMobile ? '100%' : '90%')};
  margin-left: ${(props) => (props.isMobile ? '0' : '10%')};
  ${(props) => props.isMobile && `text-align: center`};

  img {
    max-width: 100%;
    max-height: 100%;
    width: ${(props) => (props.isMobile ? '60%' : 'auto')};
    height: auto;
    ${(props) =>
      !props.isMobile &&
      `position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;`};

    margin: auto;
    border: 1px solid #501414;
  }
`;

const basePath = s3Base;

const TestimonialImage = ({ imgSrc }) => (
  <TestimonialImageStyle isMobile={isMobile}>
    <img src={`${basePath + imgSrc}0-1024.jpg`} alt="Testimonial" />
  </TestimonialImageStyle>
);

TestimonialImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default TestimonialImage;
