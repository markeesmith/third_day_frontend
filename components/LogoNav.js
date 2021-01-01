import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  ${(props) => !props.isMobile && `height: 100%; width: 100%;`};
  padding-left: ${(props) => (props.pad ? '3vw' : '0vw')};

  img {
    ${(props) => props.isMobile && `max-height: 10vh;`};
    ${(props) => !props.isMobile && `cursor: pointer; object-fit: contain;`}
  }
`;

const LogoMobileNav = ({ pad, imgSrc, isMobile }) => (
  <LogoContainer pad={pad} isMobile={isMobile}>
    <Link href="/">
      <img src={imgSrc} alt="Logo" />
    </Link>
  </LogoContainer>
);

LogoMobileNav.propTypes = {
  pad: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default LogoMobileNav;
