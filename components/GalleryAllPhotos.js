import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryAllPhotosStyles from './styles/GalleryAllPhotosStyles';
import GalleryAllMainImage from './GalleryAllMainImage';
import GalleryPicker from './GalleryPicker';

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;

function setBasePhotoURL(gallery) {
  return `${basePath + gallery.galPath}`;
}

class GalleryAllPhotos extends Component {
  constructor(props) {
    super(props);
    const { gallery } = this.props;
    this.handlePickerSelection = this.handlePickerSelection.bind(this);
    this.state = {
      mainURL: setBasePhotoURL(gallery),
      currPhoto: 0,
      maxPhotos: gallery.galNumberItems,
    };
  }

  handlePickerSelection(selection) {
    this.setState(() => ({
      currPhoto: selection,
    }));
  }

  render() {
    const { mainURL, currPhoto, maxPhotos } = this.state;
    return (
      <GalleryAllPhotosStyles>
        <GalleryAllMainImage url={mainURL} position={currPhoto} />
        <GalleryPicker
          url={mainURL}
          max={maxPhotos}
          onPickerSelection={this.handlePickerSelection}
        />
      </GalleryAllPhotosStyles>
    );
  }
}

GalleryAllPhotos.propTypes = {
  gallery: PropTypes.shape({
    gallery_id: PropTypes.number.isRequired,
    galNumberItems: PropTypes.number.isRequired,
    galPath: PropTypes.string.isRequired,
    galType: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryAllPhotos;
