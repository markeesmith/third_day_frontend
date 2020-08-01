import Link from 'next/link';
import NavBarMobileStyle from './styles/NavBarMobileStyle';

const NavBarMobile = () => (
    <NavBarMobileStyle>
        <div>
            <Link href="/">
                <img src="static/logos/MainLogoWhite.svg"/>
            </Link>
        </div>

        <div>
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
        </div>
    </NavBarMobileStyle>
);

export default NavBarMobile;