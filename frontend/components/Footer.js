import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import FooterStyles from './styles/FooterStyles';
import Logo from './Logo';

const isMobile = false;

const Footer = () => (
  <FooterStyles mobile={isMobile}>
    <hr />
    <div className='upper-wrapper'>
      <div className='contact'>
        <h2>Contact Us</h2>
        <div className='logo'>
          <div>
            <Logo imgSrc='static/logos/MainLogoMaroon.svg' pad={false} />
          </div>
          <div>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size="xs" />
              &nbsp;weaver.thirdday@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} size="xs" />
              &nbsp;(304) 283-3863
            </p>
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
        <p>
          &copy; 2017-
          {new Date().getFullYear()}
          {' '}
          &nbsp; Third Day Builders, LLC
        </p>
      </div>
    </div>
  </FooterStyles>
);

export default Footer;