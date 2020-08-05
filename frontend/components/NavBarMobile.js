import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import NavBarMobileStyle from './styles/NavBarMobileStyle';

const NavBarMobile = (props) => (
    <NavBarMobileStyle top={props.top} id='navbar-mobile'>
        <Logo
            imgSrc={props.top ? 'static/logos/MainLogoWhite.svg' : 'static/logos/MainLogoMaroon.svg'}
            pad={ true }
        />
        <HamburgerMenu 
            top={props.top}
        />
    </NavBarMobileStyle>
);

export default NavBarMobile;