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
    width: auto;
    height: 100%;
    object-fit: cover;
    max-height: 80vh;
  }
`;

export default GalleryAllPhotosStyles;
