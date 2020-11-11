import React from 'react';
import PropTypes from 'prop-types';
import GalleryPickerStyles from './styles/GalleryPickerStyles';
import GalleryPickerItem from './GalleryPickerItem';

const GalleryPicker = ({ url, max, onPickerSelection }) => {
  return (
    <GalleryPickerStyles>
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
};

GalleryPicker.propTypes = {
  url: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  onPickerSelection: PropTypes.func.isRequired,
};

export default GalleryPicker;
