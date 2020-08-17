import React from 'react';
import PropTypes from 'prop-types'

const GalleryDropDown = ({dropDownChange}) => (
  <select name="gallerySelect" onChange={dropDownChange}>
    <option value="all">All Galleries</option>
    <option value="home">Homes</option>
    <option value="addition">Additions</option>
    <option value="remodel">Remodels</option>
  </select>
);

GalleryDropDown.propTypes = {
  dropDownChange: PropTypes.string.isRequired
}

export default GalleryDropDown;