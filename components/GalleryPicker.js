import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import GalleryPickerStyles from './styles/GalleryPickerStyles';
import GalleryPickerItem from './GalleryPickerItem';

class GalleryPicker extends Component {
  constructor(props) {
    super(props);

    this.getPickerScollPos = this.getPickerScollPos.bind(this);
    this.scrollDiv = React.createRef();
  }

  componentDidMount() {
    if (isMobile) this.scrollDiv.current.scrollLeft = this.getPickerScollPos();
    else this.scrollDiv.current.scrollTop = this.getPickerScollPos();
  }

  componentDidUpdate() {
    if (isMobile) this.scrollDiv.current.scrollLeft = this.getPickerScollPos();
    else this.scrollDiv.current.scrollTop = this.getPickerScollPos();
  }

  getPickerScollPos() {
    let scrollPos;
    const { scrollWidth, scrollHeight } = this.scrollDiv.current;
    const { max, currPhoto } = this.props;
    if (currPhoto > 1) {
      scrollPos = isMobile
        ? (scrollWidth / max) * (currPhoto - 1)
        : (scrollHeight / max) * (currPhoto - 1);
    }
    if (currPhoto + 1 >= max) {
      scrollPos = 0;
    }
    if (currPhoto === max - 1) {
      scrollPos = isMobile
        ? (scrollWidth / max) * (max - 2)
        : (scrollHeight / max) * (max - 2);
    }
    return scrollPos;
  }

  render() {
    const { url, max, onPickerSelection, currPhoto } = this.props;
    return (
      <GalleryPickerStyles ref={this.scrollDiv} isMobile={isMobile}>
        {[...Array(max)].map((pos, i) => (
          <GalleryPickerItem
            key={i + 1}
            url={url}
            photo={i}
            onPickerSelection={onPickerSelection}
            currPhoto={currPhoto}
          />
        ))}
      </GalleryPickerStyles>
    );
  }
}

GalleryPicker.propTypes = {
  url: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  onPickerSelection: PropTypes.func.isRequired,
  currPhoto: PropTypes.number.isRequired,
};

export default GalleryPicker;
