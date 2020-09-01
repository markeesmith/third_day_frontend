import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumItems = styled.div`
  color: white;
  font-weight: bolder;
  font-size: 2.5rem;
  z-index: 2;
  pointer-events: none;
  opacity: ${(props) => (props.hovered ? '1' : '0')};
  transition: all 0.25s;
`;

const GalleryOverlay = ({ numItems, hovered }) => (
  <Overlay>
    <NumItems hovered={hovered}>
      <p>
        <FontAwesomeIcon icon={faCamera} />
        &nbsp;
        {numItems}
      </p>
    </NumItems>
  </Overlay>
);

GalleryOverlay.propTypes = {
  numItems: PropTypes.number.isRequired,
  hovered: PropTypes.bool.isRequired,
};

export default GalleryOverlay;
