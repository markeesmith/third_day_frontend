import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GalleryAllPhotosStyles from './styles/GalleryAllPhotosStyles'
import GalleryAllMainImage from './GalleryAllMainImage'

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;

function setBasePhotoURL(gallery) {
  return `${basePath + gallery.galPath}`;
}

class GalleryAllPhotos extends Component {
  constructor(props) {
    super(props);
    const { gallery } = this.props;
    this.state = {
      mainURL: setBasePhotoURL(gallery),
      count: 0,
    }
  }

  render(){
    // const { gallery } = this.props;
    const { mainURL } = this.state;
    return(
      <GalleryAllPhotosStyles>
        <GalleryAllMainImage url={mainURL} />
      </GalleryAllPhotosStyles>
    );
  }
}

GalleryAllPhotos.propTypes = {
  gallery: PropTypes.shape({
    gallery_id: PropTypes.number.isRequired,
    galNumberItems: PropTypes.number.isRequired,
    galPath: PropTypes.string.isRequired,
    galType: PropTypes.string.isRequired
  }).isRequired
}

export default GalleryAllPhotos;