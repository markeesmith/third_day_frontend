import React from 'react';
import PropTypes from 'prop-types'
import GalleryDDStyles from './styles/GalleryDDStyles'

function optionText(option) {
  return `${option.charAt(0).toUpperCase() + option.slice(1)  } Galleries`;
}

const GalleryDropDown = ({dropDownChange, values, selectedOption}) => (
  <GalleryDDStyles name="gallerySelect" onChange={dropDownChange}>
    {values.map(option => (
      (option === selectedOption) ? 
        <option value={option} selected>{optionText(option)}</option> 
        : 
        <option value={option}>{optionText(option)}</option>
    ))}
  </GalleryDDStyles>
);

GalleryDropDown.propTypes = {
  dropDownChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedOption: PropTypes.string.isRequired
}

export default GalleryDropDown;