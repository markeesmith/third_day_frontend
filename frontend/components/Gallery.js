import React from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';
import GalleryStyles from './styles/GalleryStyles';
import GalleryOverlay from './GalleryOverlay';
import GalleryLogo from './GalleryLogo';

const Gallery = ({gallery}) => {
  const imgSrc = process.env.NEXT_PUBLIC_S3_BASE_URL + gallery.galPath;

  if(gallery.galNumberItems > 1) {
    return (
      <GalleryStyles>
        <FA className='picture-icon' name='clone' />
        <GalleryOverlay numItems={gallery.galNumberItems} />
        <GalleryLogo basePath={imgSrc} />
      </GalleryStyles>
    )
  }
  return (
    <GalleryStyles>
      <GalleryOverlay numItems={gallery.galNumberItems} />
      <GalleryLogo basePath={imgSrc} />
    </GalleryStyles>
  )
}

Gallery.propTypes = {
  gallery: PropTypes.shape({
    gallery_id: PropTypes.number.isRequired,
    galNumberItems: PropTypes.number.isRequired,
    galPath: PropTypes.string.isRequired,
    galType: PropTypes.string.isRequired
  }).isRequired
}

export default Gallery;