import React from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import OffScreenMenuStyles from './styles/OffScreenMenuStyles';
import { LOCAL_STATE_QUERY, TOGGLE_HAMBURGER_MUTATION } from '../lib/gql';

const OffScreenMenu = () => (
  <Mutation mutation={TOGGLE_HAMBURGER_MUTATION}>
    {(toggleHamburger) => (
      <Query query={LOCAL_STATE_QUERY}>
        {({ data }) => (
          <OffScreenMenuStyles open={data.hamburgerMenuOpen}>
            <div>
              <Link href="/">
                {/* eslint-disable-next-line */}
                <a role='button' tabIndex={0} onClick={toggleHamburger}>Home</a>
              </Link>
              <Link href="/about">
                {/* eslint-disable-next-line */}
                <a role='button' tabIndex={0} onClick={toggleHamburger}>About</a>
              </Link>
              <Link href="/galleries">
                {/* eslint-disable-next-line */}
                <a role='button' tabIndex={0} onClick={toggleHamburger}>Gallery</a>
              </Link>
              <Link href="/testimonial">
                {/* eslint-disable-next-line */}
                <a role='button' tabIndex={0} onClick={toggleHamburger}>Testimonials</a>
              </Link>
              <Link href="/contact">
                {/* eslint-disable-next-line */}
                <a role='button' tabIndex={0} onClick={toggleHamburger}>Contact</a>
              </Link>
              <br />
              <hr />
              <br />
              <p>Have a project in mind?</p>
              <p>We can&apos;t wait to hear about it!</p>
              <p>weaver.thirdday@gmail.com</p>
              <p>(304) 283-3863</p>
              <p>
                <img src="static/logos/MainLogoWhite.svg" alt="Logo" />
              </p>
            </div>
          </OffScreenMenuStyles>
        )}
      </Query>
    )}
  </Mutation>
);

export default OffScreenMenu;
