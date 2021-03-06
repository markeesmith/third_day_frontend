import React from 'react';
import PropTypes from 'prop-types';
import GalleryDDStyles from './styles/GalleryDDStyles';

function optionText(option) {
  return `${option.charAt(0).toUpperCase() + option.slice(1)} Galleries`;
}

const GalleryDropDown = ({
  dropDownChange,
  values,
  selectedOption,
  isMobile,
}) => (
  <GalleryDDStyles
    value={selectedOption}
    name="gallerySelect"
    onChange={dropDownChange}
    isMobile={isMobile}
  >
    {values.map((option) => (
      <option value={option} key={option}>
        {optionText(option)}
      </option>
    ))}
  </GalleryDDStyles>
);

GalleryDropDown.propTypes = {
  dropDownChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedOption: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default GalleryDropDown;
