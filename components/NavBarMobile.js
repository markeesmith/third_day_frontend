import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import { LOCAL_STATE_QUERY } from '../lib/gql';
import NavBarMobileStyle from './styles/NavBarMobileStyle';
import LogoMobileNav from './LogoMobileNav';

const NavBarMobile = ({ top }) => {
  const pad = true;
  return (
    <Query query={LOCAL_STATE_QUERY}>
      {({ data }) => (
        <NavBarMobileStyle top={top} open={data.hamburgerMenuOpen}>
          <LogoMobileNav
            imgSrc={
              top
                ? 'static/logos/MainLogoWhite.png'
                : 'static/logos/MainLogoMaroon.png'
            }
            pad={pad}
          />
          <HamburgerMenu top={top} />
        </NavBarMobileStyle>
      )}
    </Query>
  );
};

NavBarMobile.propTypes = {
  top: PropTypes.bool.isRequired,
};

export default NavBarMobile;
