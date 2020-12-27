import styled from 'styled-components';

const GalleryAllPhotosStyles = styled.div`
  outline: none;

  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? '1fr' : '4fr 2fr')};
  overflow: hidden;
  text-align: center;

  div:first-of-type {
    margin: auto auto;
  }

  img {
    height: ${(props) => (props.isMobile ? '60vh' : '80vh')};
    width: ${(props) => (props.isMobile ? '90%' : '100%')};
    object-fit: contain;
  }
`;

export default GalleryAllPhotosStyles;
