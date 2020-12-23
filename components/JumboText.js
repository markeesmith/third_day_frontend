import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const JumboTextStyles = styled.div`
  height: ${(props) => (props.isMobile ? '35vh' : '40vh')};
  background-color: #501414;
  color: white;
  text-align: center;
  padding-top: 15vh;
  margin-bottom: 5vh;

  h1 {
    font-size: ${(props) => (props.isMobile ? '2.5rem' : '5rem')};
    margin-bottom: 0;
  }

  p {
    font-size: ${(props) => (props.isMobile ? '2rem' : '3rem')};
    margin: 0 0;
  }
`;

const JumboText = ({ title, body }) => {
  return (
    <JumboTextStyles isMobile={isMobile}>
      <h1>{title}</h1>
      <p>{body}</p>
    </JumboTextStyles>
  );
};

JumboText.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default JumboText;
