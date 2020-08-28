import React from 'react'
import PropTypes from 'prop-types'

const GalleryAllMainImage = ({url}) => (
  <img
    srcSet={`
      ${url}0-480.jpg 480w,
      ${url}0-767.jpg 767w,
      ${url}0-1024.jpg 1024w,
      ${url}0-1280.jpg 1280w
      `}
    sizes='100%'
    src={`${url}0-480.jpg 480w`}
    alt='Main Gallery'
  />
);

GalleryAllMainImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default GalleryAllMainImage;