import Link from 'next/link';
import Logo from './Logo';
import NavBarDesktopStyle from './styles/NavBarDesktopStyle';

const NavBarDesktop = (props) => (
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
        
        <Logo 
            imgSrc={props.top ? 'static/logos/MainLogoWhite.svg' : 'static/logos/MainLogoMaroon.svg'}
            pad={ false }
        />
        
        <div>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    </NavBarDesktopStyle>
);

export default NavBarDesktop;