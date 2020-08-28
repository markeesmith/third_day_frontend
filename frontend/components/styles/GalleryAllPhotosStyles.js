import styled from 'styled-components'

const GalleryAllPhotosStyles = styled.div`
  height: 110vh;
  padding-top: 20vh;

  display: grid;
  grid-template-columns: 12fr;
  grid-template-rows: 4fr 1fr;

  img {
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
    }
`;

export default GalleryAllPhotosStyles;