import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryAllPhotosStyles from './styles/GalleryAllPhotosStyles';
import GalleryAllMainImage from './GalleryAllMainImage';
import GalleryPicker from './GalleryPicker';

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;

function convertToPix(dir) {
  return dir * (window.innerHeight * 0.9 * 0.2);
}

function setBasePhotoURL(gallery) {
  return `${basePath + gallery.galPath}`;
}

class GalleryAllPhotos extends Component {
  constructor(props) {
    super(props);
    const { gallery } = this.props;

    this.handleArrows = this.handleArrows.bind(this);
    this.handlePickerSelection = this.handlePickerSelection.bind(this);
    this.focusDiv = React.createRef();

    this.state = {
      mainURL: setBasePhotoURL(gallery),
      currPhoto: 0,
      maxPhotos: gallery.galNumberItems,
      scrollPos: 0,
    };
  }

  componentDidMount() {
    this.focusDiv.current.focus();
    window.scrollTo(0, 45);
  }

  handleArrows(event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }

    if (event.keyCode === 37 || event.keyCode === 38) {
      const { currPhoto, maxPhotos, scrollPos } = this.state;
      const pos = currPhoto - 1;

      if (pos < 0) {
        this.setState({
          currPhoto: maxPhotos - 1,
        });
      } else {
        this.setState({
          currPhoto: currPhoto - 1,
        });
      }
      if (currPhoto > 1) {
        this.setState({
          scrollPos: scrollPos + convertToPix(-1),
        });
      }
      if (pos < 0) {
        this.setState({
          scrollPos: (maxPhotos - 3) * convertToPix(1),
        });
      }
    } else if (event.keyCode === 39 || event.keyCode === 40) {
      const { currPhoto, maxPhotos, scrollPos } = this.state;
      const pos = currPhoto + 1;

      if (pos >= maxPhotos) {
        this.setState({
          currPhoto: 0,
        });
      } else {
        this.setState({
          currPhoto: currPhoto + 1,
        });
      }
      if (currPhoto > 1) {
        this.setState({
          scrollPos: scrollPos + convertToPix(1),
        });
      }
      if (pos >= maxPhotos) {
        this.setState({
          scrollPos: 0,
        });
      }
    }
  }

  handlePickerSelection(selection) {
    this.setState(() => ({
      currPhoto: selection,
    }));
  }

  render() {
    const { mainURL, currPhoto, maxPhotos, scrollPos } = this.state;
    return (
      <div>
        <GalleryAllPhotosStyles
          tabIndex={-1}
          ref={this.focusDiv}
          onKeyDown={this.handleArrows}
        >
          <GalleryAllMainImage url={mainURL} position={currPhoto} />
          <GalleryPicker
            url={mainURL}
            max={maxPhotos}
            onPickerSelection={this.handlePickerSelection}
            scrollPos={scrollPos}
          />
        </GalleryAllPhotosStyles>
      </div>
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