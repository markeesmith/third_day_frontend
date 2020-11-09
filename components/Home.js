import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandsHelping,
  faUser,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import HomeStyles from './styles/HomeStyles';
import Slideshow from './Slideshow';

const imgSrc = `${process.env.NEXT_PUBLIC_S3_BASE_URL}jumbo/asset2`;

const Home = () => {
  return (
    <HomeStyles>
      <div className="TextSlideContainer">
        <div>
          <p>
            Third Day Builders is soley owned and operated by Kevin Weaver. We
            are a company stationed in Jefferson County, WV and specialize in
            building custom homes, building additions, and remodeling homes. Our
            mission is to provide ample amounts of experience, skill, and
            attention in order to help you build the home of your dreams.
          </p>
        </div>
        <Slideshow />
      </div>
      <div className="CardArea">
        <div className="CardSpan">
          <h1>Why Choose Third Day?</h1>
        </div>
        <div className="Card">
          <FontAwesomeIcon icon={faHandsHelping} size="5x" />
          <h2>Dependable</h2>
          <p>
            With over 30 years of experience building custom homes, we guarantee
            quality and longevity with everything we build.
          </p>
        </div>
        <div className="Card">
          <FontAwesomeIcon icon={faUser} size="5x" />
          <h2>Personable</h2>
          <p>
            Building a home is an incredible journey and we guarantee our full
            support throughout the entire experience.
          </p>
        </div>
        <div className="Card">
          <FontAwesomeIcon icon={faExchangeAlt} size="5x" />
          <h2>Flexible</h2>
          <p>
            We are commited to tailoring your home to your specific needs and
            desires. No matter the design, we can accomodate.
          </p>
        </div>
        <div className="CardSpan">
          <Link href="/testimonial">
            <button type="button">See What Our Customers Think</button>
          </Link>
        </div>
      </div>
      <div className="PhotoAreaTextOverlay">
        <div className="Text-Container">
          <p>Quality.</p>
          <p>Honesty.</p>
          <p>Detail.</p>
        </div>
        <img
          srcSet={`
        ${imgSrc}-480.jpg 480w,
        ${imgSrc}-767.jpg 767w,
        ${imgSrc}-1024.jpg 1024w,
        ${imgSrc}-1280.jpg 1280w
        `}
          sizes="100%"
          src={`${imgSrc}-480.jpg 480w`}
          alt="Shiplap Ceiling with Light Fixture"
        />
      </div>
    </HomeStyles>
  );
};

export default Home;
