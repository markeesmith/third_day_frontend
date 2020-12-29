import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const SuccessMessageStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid #501414;
  border-left: 5px solid #501414;
  text-align: center;
  p {
    margin: 0;
    text-align: center;
    font-size: ${(props) => (props.isMobile ? '1rem' : '2rem')};
  }
  strong {
    margin-right: 1rem;
  }
`;

const SuccessBanner = ({ successMessage }) => {
  return (
    <SuccessMessageStyles isMobile={isMobile}>
      <p>{successMessage}</p>
    </SuccessMessageStyles>
  );
};

SuccessBanner.propTypes = {
  successMessage: PropTypes.string.isRequired,
};

export default SuccessBanner;
