import styled from 'styled-components';

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? '1fr' : '1fr 1fr')};
  width: 80vw;
  margin: 0 auto;

  .AboutBlock {
    width: 85%;
    margin: 0 auto;
    padding: ${(props) => (props.isMobile ? '2vh 0' : '4vh 0')};
    font-size: ${(props) => (props.isMobile ? '1.25rem' : '2rem')};
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: ${(props) => (props.isMobile ? '2.25rem' : '')};
  }

  hr {
    border: none;
    height: 1px;
    color: #501414;
    background-color: #501414;
    margin-top: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .AboutBanner {
    grid-column: 1 / -1;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;

    text-align: center;
    font-size: ${(props) => (props.isMobile ? '2rem' : '5rem')};
    color: white;
    background-color: #501414;
  }

  .AboutBanner span {
    font-family: 'Cedarville Cursive', cursive;
  }

  .ListName {
    font-weight: bolder;
  }
`;

export default AboutStyles;
