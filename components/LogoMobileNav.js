import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-left: ${(props) => (props.pad ? '3vw' : '0vw')};

  img {
    max-height: 4rem;
  }
`;

const LogoMobileNav = ({ pad, imgSrc }) => (
  <LogoContainer pad={pad}>
    <Link href="/">
      <img src={imgSrc} alt="Logo" />
    </Link>
  </LogoContainer>
);

LogoMobileNav.propTypes = {
  pad: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default LogoMobileNav;
