import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import GalleryStyles from './styles/GalleryStyles';
import GalleryOverlay from './GalleryOverlay';
import GalleryImage from './GalleryImage';
import { s3Base } from '../config';

const basePath = s3Base;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.handleGalleryHover = this.handleGalleryHover.bind(this);
    this.state = { galleryHovered: false };
  }

  handleGalleryHover() {
    this.setState((state) => ({
      galleryHovered: !state.galleryHovered,
    }));
  }

  render() {
    const { gallery, isMobile } = this.props;
    const { galleryHovered } = this.state;
    const imgSrc = basePath + gallery.galPath;

    if (gallery.galNumberItems > 1) {
      return (
        <GalleryStyles isMobile={isMobile}>
          <FontAwesomeIcon className="picture-icon" icon={faClone} size="3x" />
          <GalleryOverlay
            hovered={galleryHovered}
            numItems={gallery.galNumberItems}
          />
          <GalleryImage
            gallery={gallery.gallery_id}
            basePath={imgSrc}
            onGalleryHover={this.handleGalleryHover}
          />
        </GalleryStyles>
      );
    }
    return (
      <GalleryStyles isMobile={isMobile}>
        <GalleryOverlay
          hovered={galleryHovered}
          numItems={gallery.galNumberItems}
        />
        <GalleryImage
          gallery={gallery.gallery_id}
          basePath={imgSrc}
          onGalleryHover={this.handleGalleryHover}
        />
      </GalleryStyles>
    );
  }
}

Gallery.propTypes = {
  gallery: PropTypes.shape({
    gallery_id: PropTypes.number.isRequired,
    galNumberItems: PropTypes.number.isRequired,
    galPath: PropTypes.string.isRequired,
    galType: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Gallery;
