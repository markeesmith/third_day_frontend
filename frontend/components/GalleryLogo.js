import React from 'react';
import PropTypes from 'prop-types';

const GalleryLogo = ( {basePath} ) => (
  <a href="/">
    <img
      srcSet={`
                    ${basePath}0-480.jpg 480w,
                    ${basePath}0-767.jpg 767w,
                    ${basePath}0-1024.jpg 1024w,
                    ${basePath}0-1280.jpg 1280w
                    `}
      sizes='100%'
      src={`${basePath}0-480.jpg 480w`}
      alt='Main Gallery'
    />
  </a>
);

GalleryLogo.propTypes = {
    basePath: PropTypes.string.isRequired
}
 
export default GalleryLogo;