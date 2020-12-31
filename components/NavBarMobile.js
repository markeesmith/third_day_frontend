import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import { LOCAL_STATE_QUERY } from '../lib/gql';

import NavBarMobileStyle from './styles/NavBarMobileStyle';

const NavBarMobile = ({ top, isMobile }) => (
  <Query query={LOCAL_STATE_QUERY}>
    {({ data }) => (
      <NavBarMobileStyle top={top} open={data.hamburgerMenuOpen}>
        <Logo
          imgSrc={
            top
              ? 'static/logos/MainLogoWhite.png'
              : 'static/logos/MainLogoMaroon.png'
          }
          pad
          isMobile={isMobile}
        />
        <HamburgerMenu top={top} />
      </NavBarMobileStyle>
    )}
  </Query>
);

NavBarMobile.propTypes = {
  top: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default NavBarMobile;
