import React from 'react';
import PropTypes from 'prop-types';

const SlideshowImage = ({ basePath, num }) => {
  const srcText = `${basePath}${num}-480.jpg`;
  const srcSetText = `${basePath}${num}-480.jpg 480w, ${basePath}${num}-767.jpg 767w, ${basePath}${num}-1024.jpg 1024w, ${basePath}${num}-1280.jpg 1280w, ${basePath}${num}-1280.jpg 1300w`;

  return (
    <img
      className="slide"
      srcSet={srcSetText}
      sizes="100%"
      src={srcText}
      alt="Home Slideshow Screen"
    />
  );
};

SlideshowImage.propTypes = {
  basePath: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
};

export default SlideshowImage;
