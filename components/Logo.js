import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoContainer = styled.div `
    padding-left: ${props => (props.pad ? '3vw' : '0vw')};
    img {
        max-height: 8rem;
        cursor: pointer;
    }
`;

const Logo = ({pad, imgSrc}) => (
  <LogoContainer pad={pad}>
    <Link href="/">
      <img src={imgSrc} alt='Logo' />
    </Link>
  </LogoContainer>
);

Logo.propTypes = {
    pad: PropTypes.bool.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export default Logo;