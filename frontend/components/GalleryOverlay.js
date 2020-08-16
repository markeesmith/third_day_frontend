import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    opacity: 1;
`;

const GalleryOverlay = ({numItems}) => (
  <Overlay>
    <NumItems className='galleryCount'>
      <p>{numItems}</p>
    </NumItems>
  </Overlay>
);

GalleryOverlay.propTypes = {
    numItems: PropTypes.number.isRequired
}

export default GalleryOverlay;