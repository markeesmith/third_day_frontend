import Link from 'next/link';
import styled from 'styled-components';
import NavBarMobileStyle from './styles/NavBarMobileStyle';
import HamburgerMenu from './HamburgerMenu';

const Logo = styled.div `
    padding-left: 3vw;

    img {
        max-height: 8rem;
    }
`;

const NavBarMobile = () => (
    <NavBarMobileStyle id='navbar-mobile'>
        <Logo>
            <Link href="/">
                <img src="static/logos/MainLogoWhite.svg"/>
            </Link>
        </Logo>
        <HamburgerMenu />
    </NavBarMobileStyle>
);

export default NavBarMobile;