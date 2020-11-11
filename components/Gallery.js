import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import GalleryStyles from './styles/GalleryStyles';
import GalleryOverlay from './GalleryOverlay';
import GalleryImage from './GalleryImage';

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
    const { gallery } = this.props;
    const { galleryHovered } = this.state;
    const imgSrc = process.env.NEXT_PUBLIC_S3_BASE_URL + gallery.galPath;

    if (gallery.galNumberItems > 1) {
      return (
        <GalleryStyles>
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
      <GalleryStyles>
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
};

export default Gallery;
