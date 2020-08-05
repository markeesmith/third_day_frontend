import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import NavBarMobileStyle from './styles/NavBarMobileStyle';

const NavBarMobile = (props) => (
    <NavBarMobileStyle id='navbar-mobile'>
        <Logo
            imgSrc={props.top ? 'static/logos/MainLogoWhite.svg' : 'static/logos/MainLogoMaroon.svg'}
            pad={ true }
        />
        <HamburgerMenu />
    </NavBarMobileStyle>
);

export default NavBarMobile;