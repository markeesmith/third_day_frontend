import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryPickerItemStyles = styled.div`
  height: 20%;
  width: 90%;
  margin: 2vh auto;
  text-align: center;

  img {
    height: 100%;
    width: auto;
  }
`;

const GalleryPickerItem = ({ url, photo, onPickerSelection }) => {
  return (
    <GalleryPickerItemStyles>
      <a>
        <img sizes="100%" src={`${url}${photo}-1024.jpg`} alt="Main Gallery" />
      </a>
    </GalleryPickerItemStyles>
  );
};

GalleryPickerItem.propTypes = {
  url: PropTypes.string.isRequired,
  photo: PropTypes.number.isRequired,
  onPickerSelection: PropTypes.func.isRequired,
};

export default GalleryPickerItem;
