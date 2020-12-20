import styled from 'styled-components';

const GalleryAllPhotosStyles = styled.div`
  outline: none;
  padding-top: 20vh;

  display: grid;
  grid-template-columns: 4fr 2fr;
  overflow: hidden;

  div:first-of-type {
    margin: auto auto;
  }

  img {
    height: 80vh;
    width: 100%;
    object-fit: contain;
  }
`;

export default GalleryAllPhotosStyles;
