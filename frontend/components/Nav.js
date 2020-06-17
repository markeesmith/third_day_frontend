import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = () => (
    <NavStyles>
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
    </NavStyles>
);

export default Nav;