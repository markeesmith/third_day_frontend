import React from 'react';
import { Query, Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import OffScreenMenu from './OffScreenMenu';
import HamburgerMenuStyle from './styles/HamburgerMenuStyle';
import {TOGGLE_HAMBURGER_MUTATION, LOCAL_STATE_QUERY} from '../lib/gql';

const HamburgerMenu = ({top}) => (
  <Mutation mutation={TOGGLE_HAMBURGER_MUTATION}>
    {toggleHamburger => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <HamburgerMenuStyle top={top}>
            <input 
              type='checkbox' 
              checked={data.hamburgerMenuOpen} 
              onChange={toggleHamburger}
            />
            <div>
              <span />
              <span />
              <span />
            </div>
            <OffScreenMenu />
          </HamburgerMenuStyle>
        )}
      </Query> 
    )}
  </Mutation>
);

HamburgerMenu.propTypes = {
    top: PropTypes.bool.isRequired
}

export default HamburgerMenu;