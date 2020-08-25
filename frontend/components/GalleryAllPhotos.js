import React, { Component } from 'react'
import PropTypes from 'prop-types'

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;
const count = 0;

function setPhotoURL(pos, gallery) {
  return `${basePath + gallery.galPath + pos}-1280.jpg`;
}

class GalleryAllPhotos extends Component {
  constructor(props) {
    super(props);
    const { gallery } = this.props;
    this.state = {
      mainURL: setPhotoURL(count, gallery),
    }
  }

  render(){
    // const { gallery } = this.props;
    const { mainURL } = this.state;
    return(
      <div>
        <h1>{mainURL}</h1>
      </div>
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