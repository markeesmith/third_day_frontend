import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import GalleryPickerStyles from './styles/GalleryPickerStyles';
import GalleryPickerItem from './GalleryPickerItem';

class GalleryPicker extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = React.createRef();
  }

  componentDidMount() {
    const { pickerScrollPos } = this.props;
    this.scrollDiv.current.scrollTop = pickerScrollPos;
  }

  componentDidUpdate() {
    const { pickerScrollPos } = this.props;
    this.scrollDiv.current.scrollTop = pickerScrollPos;
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
  pickerScrollPos: PropTypes.number.isRequired,
  currPhoto: PropTypes.number.isRequired,
};

export default GalleryPicker;
