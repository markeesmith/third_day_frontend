import Link from 'next/link';
import NavBarDesktopStyle from './styles/NavBarDesktopStyle';

const NavBarDesktop = () => (
    <NavBarDesktopStyle>
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
        </div>
        
        <div>
            <Link href="/">
                <img src="static/MainLogoWhite.svg"/>
            </Link>
        </div>
        <div>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    </NavBarDesktopStyle>
);

export default NavBarDesktop;