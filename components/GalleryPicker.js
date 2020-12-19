import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryPickerStyles from './styles/GalleryPickerStyles';
import GalleryPickerItem from './GalleryPickerItem';

class GalleryPicker extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = React.createRef();
  }

  componentDidMount() {
    const { scrollPos } = this.props;
    this.scrollDiv.current.scrollTop = scrollPos;
  }

  componentDidUpdate() {
    const { scrollPos } = this.props;
    this.scrollDiv.current.scrollTop = scrollPos;
  }

  render() {
    const { url, max, onPickerSelection } = this.props;
    return (
      <GalleryPickerStyles ref={this.scrollDiv}>
        {[...Array(max)].map((pos, i) => (
          <GalleryPickerItem
            key={i + 1}
            url={url}
            photo={i}
            onPickerSelection={onPickerSelection}
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
  scrollPos: PropTypes.number.isRequired,
};

export default GalleryPicker;
