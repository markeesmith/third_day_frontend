import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const GalleryImage = ( {gallery, basePath, onGalleryHover} ) => (
  <Link href={{
    pathname: '/gallery',
    query: { id: gallery }
  }}
  >
    <a>
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
        onMouseEnter={onGalleryHover}
        onMouseLeave={onGalleryHover}
      />
    </a>
  </Link>
);

GalleryImage.propTypes = {
    gallery: PropTypes.number.isRequired,
    basePath: PropTypes.string.isRequired,
    onGalleryHover: PropTypes.func.isRequired
}
 
export default GalleryImage;