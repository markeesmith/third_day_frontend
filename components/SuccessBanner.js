import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const SuccessMessageStyles = styled.p`
  text-align: center;
  font-size: ${(props) => (props.isMobile ? '1.25rem' : '3rem')};
`;

const SuccessBanner = ({ successMessage }) => {
  return (
    <SuccessMessageStyles isMobile={isMobile}>
      {successMessage}
    </SuccessMessageStyles>
  );
};

SuccessBanner.propTypes = {
  successMessage: PropTypes.string.isRequired,
};

export default SuccessBanner;
