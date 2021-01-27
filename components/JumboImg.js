import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JumboImgStyles = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: ${(props) => (props.isMobile ? '20vh' : props.height)};
  background-color: #501414;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const JumboImg = ({ imgSrc, height, isMobile }) => {
  return (
    <JumboImgStyles height={height} isMobile={isMobile}>
      <img
        srcSet={`
        ${imgSrc}-480.jpg 480w,
        ${imgSrc}-767.jpg 767w,
        ${imgSrc}-1024.jpg 1024w,
        ${imgSrc}-1280.jpg 1280w,
        ${imgSrc}-1920.jpg 1920w,
        `}
        sizes="100%"
        src={`${imgSrc}-480.jpg 480w`}
        alt="Jumbotron Asset"
      />
    </JumboImgStyles>
  );
};

JumboImg.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default JumboImg;
