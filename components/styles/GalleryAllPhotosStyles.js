import styled from 'styled-components';

const GalleryAllPhotosStyles = styled.div`
  /* TODO: Adjust this!!! */
  /* height: 50vh; */
  padding-top: 20vh;

  display: grid;
  grid-template-columns: 4fr 1fr;

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
