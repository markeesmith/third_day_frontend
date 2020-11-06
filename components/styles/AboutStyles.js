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
    padding: 2vh 0;
    font-size: 1.75rem;
  }

  .AboutBanner {
    grid-column: 1 / -1;
    width: 75vw;
    margin: 0 auto;
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;

    text-align: center;
    font-size: 5rem;
    color: white;
    background-color: #501414;
  }

  .ListName {
    font-weight: bolder;
  }
`;

export default AboutStyles;
