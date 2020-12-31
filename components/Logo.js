import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-left: ${(props) => (props.pad ? '3vw' : '0vw')};
  img {
    max-height: ${(props) => (props.isMobile ? '6rem' : '8rem')};
    cursor: pointer;
  }
`;

const Logo = ({ pad, imgSrc, isMobile }) => (
  <LogoContainer pad={pad} isMobile={isMobile}>
    <Link href="/">
      <img src={imgSrc} alt="Logo" />
    </Link>
  </LogoContainer>
);

Logo.propTypes = {
  pad: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Logo;
