import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FA from 'react-fontawesome';
import GalleryStyles from './styles/GalleryStyles';
import GalleryOverlay from './GalleryOverlay';
import GalleryLogo from './GalleryLogo';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.handleGalleryHover = this.handleGalleryHover.bind(this);
    this.state = { galleryHovered: false, }
  }

  handleGalleryHover() {
    this.setState(state => ({
      galleryHovered: !state.galleryHovered
    }));
  };

  render() {
    const {gallery} = this.props;
    const {galleryHovered} = this.state;
    const imgSrc = process.env.NEXT_PUBLIC_S3_BASE_URL + gallery.galPath;

    if(gallery.galNumberItems > 1) {
      return (
        <GalleryStyles>
          <FA className='picture-icon' name='clone' />
          <GalleryOverlay 
            hovered={galleryHovered}
            numItems={gallery.galNumberItems} 
          />
          <GalleryLogo 
            basePath={imgSrc} 
            onGalleryHover={this.handleGalleryHover}
          />
        </GalleryStyles>
      )
    }
    return (
      <GalleryStyles>
        <GalleryOverlay 
          hovered={galleryHovered}
          numItems={gallery.galNumberItems} 
        />
        <GalleryLogo 
          basePath={imgSrc} 
          onGalleryHover={this.handleGalleryHover}
        />
      </GalleryStyles>
    )
  }
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