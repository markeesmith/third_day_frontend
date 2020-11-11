import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const JumboTextStyles = styled.div`
  height: 40vh;
  background-color: #501414;
  color: white;
  text-align: center;
  padding-top: 15vh;
  margin-bottom: 5vh;

  h1 {
    font-size: 5rem;
    margin-bottom: 0;
  }

  p {
    font-size: 3rem;
    margin: 0 0;
  }
`;

const JumboText = ({ title, body }) => {
  return (
    <JumboTextStyles>
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
