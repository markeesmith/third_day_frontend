import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { LOCAL_STATE_QUERY } from '../lib/gql';
import NavBarMobileStyle from './styles/NavBarMobileStyle';
import LogoNav from './LogoNav';

const NavBarMobile = ({ top, isMobile }) => {
  const pad = true;
  return (
    <Query query={LOCAL_STATE_QUERY}>
      {({ data }) => (
        <NavBarMobileStyle top={top} open={data.hamburgerMenuOpen}>
          <LogoNav imgSrc={top ? '' : ''} pad={pad} isMobile={isMobile} />
          <HamburgerMenu top={top} />
        </NavBarMobileStyle>
      )}
    </Query>
  );
};

NavBarMobile.propTypes = {
  top: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default NavBarMobile;
