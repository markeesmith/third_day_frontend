import styled from 'styled-components';

const AboutStyles = styled.div`
  /* TODO: REMOVE THIS! */
  padding-top: 25vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80vw;
  margin: 0 auto;

  .AboutBlock {
    width: 85%;
    margin: 0 auto;
    padding: 4vh 0;
    font-size: 2rem;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
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
    object-fit: cover;
  }

  .AboutBanner {
    grid-column: 1 / -1;
    width: 74vw;
    margin: 0 auto;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;

    text-align: center;
    font-size: 5rem;
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
