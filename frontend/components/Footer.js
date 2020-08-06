import Link from 'next/link';
import FooterStyles from './styles/FooterStyles';
import Logo from './Logo';
import FA from 'react-fontawesome';

const isMobile = false;

const Footer = () => (
    <FooterStyles mobile={isMobile}>
        <hr />
        <div className='upper-wrapper'>
            <div className='contact'>
                <h2>Contact Us</h2>
                <div className='logo'>
                    <div>
                        <Logo imgSrc='static/logos/MainLogoMaroon.svg'/>
                    </div>
                    <div>
                        <p><FA name="envelope" />&nbsp;weaver.thirdday@gmail.com</p>
                        <p><FA name="phone" />&nbsp;(304) 283-3863</p>
                    </div>
                </div>
            </div>
            <div className='navigation'>
                <h2>Navigation</h2>
                <div className='navigation-submenu'>
                    <div>
                        <div>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </div>  
                        <div>
                            <Link href='/gallery'>
                                <a>Gallery</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link href='/testimonials'>
                                <a>Testimonials</a>
                            </Link>
                        </div>
                        <div>
                            <Link href='/contact'>
                                <a>Contact</a>
                            </Link>
                        </div>
                    </div>                  
                </div>
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
                <p>&copy; 2017-2020 &nbsp; Third Day Builders, LLC</p>
            </div>
        </div>
    </FooterStyles>
);

export default Footer;