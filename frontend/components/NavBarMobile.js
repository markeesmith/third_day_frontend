import Link from 'next/link';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import { LOCAL_STATE_QUERY } from './HamburgerMenu';
import NavBarMobileStyle from './styles/NavBarMobileStyle';

const NavBarMobile = (props) => (
    <Query query={ LOCAL_STATE_QUERY }>
        {({ data }) => (
        <NavBarMobileStyle top={props.top} open={data.hamburgerMenuOpen} >
            <Logo
                imgSrc={props.top ? 'static/logos/MainLogoWhite.svg' : 'static/logos/MainLogoMaroon.svg'}
                pad={ true }
            />
            <HamburgerMenu 
                top={props.top}
            />
        </NavBarMobileStyle>
    )}</Query> 
);

export default NavBarMobile;