import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AngledBannerStyles = styled.div`
  width: 100%;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.foreColor};
  text-align: center;
  font-size: ${(props) => (props.isMobile ? '2rem' : '3.5rem')};
  padding: 1.5vh 0;
`;

const AngledBanner = ({ text, foreColor, backColor, isMobile }) => {
  return (
    <AngledBannerStyles
      foreColor={foreColor}
      backColor={backColor}
      isMobile={isMobile}
    >
      {text}
    </AngledBannerStyles>
  );
};

AngledBanner.propTypes = {
  text: PropTypes.string.isRequired,
  foreColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default AngledBanner;
