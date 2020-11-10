import React from 'react';
import PropTypes from 'prop-types';

const GalleryAllMainImage = ({ url, position }) => (
  <div>
    <img sizes="100%" src={`${url}${position}-1024.jpg`} alt="Main Gallery" />
  </div>
);

GalleryAllMainImage.propTypes = {
  url: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default GalleryAllMainImage;
