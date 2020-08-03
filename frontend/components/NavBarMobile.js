import Link from 'next/link';
import styled from 'styled-components';
import NavBarMobileStyle from './styles/NavBarMobileStyle';
import HamburgerMenu from './HamburgerMenu';

const OffScreenMenu = styled.ul`
    position: fixed;
    top: 0;
    left: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    /* height: 100vh;
    width: 100vw; */

    opacity: 0;
    background-color: #501414;
    z-index: 2;
`;

const Logo = styled.div `
    padding-left: 3vw;

    img {
        max-height: 8rem;
    }
`;

const NavBarMobile = () => (
    <div>
        <NavBarMobileStyle id='navbar-mobile'>
            <Logo>
                <Link href="/">
                    <img src="static/logos/MainLogoWhite.svg"/>
                </Link>
            </Logo>
            <HamburgerMenu />
        </NavBarMobileStyle>
        <OffScreenMenu>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/gallery">
                <a>Gallery</a>
            </Link>
            <Link href="/testimonial">
                <a>Testimonials</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </OffScreenMenu>
    </div>
);

export default NavBarMobile;