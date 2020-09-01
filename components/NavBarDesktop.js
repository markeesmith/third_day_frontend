import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Logo from './Logo';
import NavBarDesktopStyle from './styles/NavBarDesktopStyle';

const NavBarDesktop = ({ top }) => (
  <NavBarDesktopStyle top={top}>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/galleries">
        <a>Gallery</a>
      </Link>
      <Link href="/testimonial">
        <a>Testimonials</a>
      </Link>
    </div>

    <Logo
      imgSrc={
        top
          ? 'static/logos/MainLogoWhite.svg'
          : 'static/logos/MainLogoMaroon.svg'
      }
      pad={false}
    />

    <div>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </NavBarDesktopStyle>
);

NavBarDesktop.propTypes = {
  top: PropTypes.bool.isRequired,
};

export default NavBarDesktop;
