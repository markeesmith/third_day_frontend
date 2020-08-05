import Link from 'next/link';
import FooterStyles from './styles/FooterStyles';
import Logo from './Logo';

const isMobile = true;

const Footer = () => (
    <FooterStyles mobile={isMobile}>
        <hr />
        <div className='upper-wrapper'>
            <div className='contact'>
                <h2>Contact Us</h2>
                <Logo imgSrc='static/logos/MainLogoMaroon.svg'/>
                <p>Email</p>
                <p>Phone</p>
            </div>
            <div className='navigation'>
                <h2>Navigation</h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/gallery'>
                    <a>Gallery</a>
                </Link>
                <Link href='/testimonials'>
                    <a>Testimonials</a>
                </Link>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </div>
        </div>
        <hr />
        <div className='lower-wrapper'>
            <div>
                <Link href='/'>
                    <a>Privacy Policy</a>
                </Link>
                <Link href='/'>
                    <a>Terms of Use</a>
                </Link>
                <Link href='/'>
                    <a>Sitemap</a>
                </Link>
                <p>&copy; 2017 - 2020 &nbsp; Third Day Builders, LLC</p>
            </div>
        </div>
    </FooterStyles>
);

export default Footer;