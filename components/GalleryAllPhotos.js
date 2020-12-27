import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import GalleryAllPhotosStyles from './styles/GalleryAllPhotosStyles';
import GalleryAllMainImage from './GalleryAllMainImage';
import GalleryPicker from './GalleryPicker';

const basePath = process.env.NEXT_PUBLIC_S3_BASE_URL;

const SpacingDiv = styled.div`
  height: 20vh;
  background-color: ${(props) => (props.top ? '#501414' : 'transparent')};
  transition: all 0.3s;

  margin-bottom: 3vh;
`;

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

    this.handleScroll = this.handleScroll.bind(this);
    this.handleArrows = this.handleArrows.bind(this);
    this.handlePickerSelection = this.handlePickerSelection.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.prevPhoto = this.prevPhoto.bind(this);
    this.focusDiv = React.createRef();

    this.state = {
      mainURL: setBasePhotoURL(gallery),
      currPhoto: 0,
      maxPhotos: gallery.galNumberItems,
      pickerScrollPos: 0,
      topOfPage: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.focusDiv.current.focus();
    window.scrollTo(0, window.innerHeight * 0.08);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 30) this.setState({ topOfPage: false });
    else this.setState({ topOfPage: true });
  }

  handleArrows(event) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }

    if (event.keyCode === 37 || event.keyCode === 38) {
      this.prevPhoto();
    } else if (event.keyCode === 39 || event.keyCode === 40) {
      this.nextPhoto();
    }
  }

  handlePickerSelection(selection) {
    this.setState(() => ({
      currPhoto: selection,
      pickerScrollPos: selection > 1 ? (selection - 2) * convertToPix(1) : 0,
    }));
  }

  nextPhoto() {
    const { currPhoto, maxPhotos, pickerScrollPos } = this.state;
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
        pickerScrollPos: pickerScrollPos + convertToPix(1),
      });
    }
    if (pos >= maxPhotos) {
      this.setState({
        pickerScrollPos: 0,
      });
    }
  }

  prevPhoto() {
    const { currPhoto, maxPhotos, pickerScrollPos } = this.state;
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
        pickerScrollPos: pickerScrollPos + convertToPix(-1),
      });
    }
    if (pos < 0) {
      this.setState({
        pickerScrollPos: (maxPhotos - 3) * convertToPix(1),
      });
    }
  }

  render() {
    const {
      mainURL,
      currPhoto,
      maxPhotos,
      pickerScrollPos,
      topOfPage,
    } = this.state;

    if (isMobile) {
      return (
        <div>
          <SpacingDiv top={topOfPage} />
          <GalleryAllPhotosStyles
            isMobile={isMobile}
            tabIndex={-1}
            ref={this.focusDiv}
            onKeyDown={this.handleArrows}
          >
            <GalleryAllMainImage
              url={mainURL}
              position={currPhoto}
              nextPhoto={this.nextPhoto}
              prevPhoto={this.prevPhoto}
            />
            <GalleryPicker
              url={mainURL}
              max={maxPhotos}
              onPickerSelection={this.handlePickerSelection}
              pickerScrollPos={pickerScrollPos}
              currPhoto={currPhoto}
            />
          </GalleryAllPhotosStyles>
        </div>
      );
    }
    return (
      <div>
        <SpacingDiv top={topOfPage} />
        <GalleryAllPhotosStyles
          isMobile={isMobile}
          tabIndex={-1}
          ref={this.focusDiv}
          onKeyDown={this.handleArrows}
        >
          <GalleryAllMainImage url={mainURL} position={currPhoto} />
          <GalleryPicker
            url={mainURL}
            max={maxPhotos}
            onPickerSelection={this.handlePickerSelection}
            pickerScrollPos={pickerScrollPos}
            currPhoto={currPhoto}
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
