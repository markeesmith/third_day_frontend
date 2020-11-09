import React from 'react';
import AboutStyles from './styles/AboutStyles';

const imgSrc = `${process.env.NEXT_PUBLIC_S3_BASE_URL}jumbo/asset`;

const AboutUs = () => {
  return (
    <AboutStyles>
      <div className="AboutBlock">
        <h1>About The Builder</h1>
        <hr />
        <p>
          Kevin is a lifelong resident of historic Jefferson County, West
          Virginia. He is a second generation contractor with 35 years of
          experience. He is a custom builder focused on building relationships
          with clients in order to bring detail and quality work to achieve the
          ultimate home for clients. His work is well known for quality and
          honesty. He has experience with custom home building, remodeling
          projects, additions, and customized garages.
        </p>
      </div>

      <div className="AboutBlock">
        <img
          srcSet={`
            ${imgSrc}4-480.jpg 480w,
            ${imgSrc}4-767.jpg 767w,
            ${imgSrc}4-1024.jpg 1024w,
            ${imgSrc}4-1280.jpg 1280w
            `}
          sizes="100%"
          src={`${imgSrc}4-480.jpg 480w`}
          alt="Kevin Weaver and his trailer"
        />
      </div>

      <div className="AboutBanner">
        &quot;Home <span>is where the story begins...</span>&quot;
      </div>

      <div className="AboutBlock">
        <h1>Our Commitment</h1>
        <hr />
        <p>
          We pride ourselves on building homes and projects with quality,
          integrity, and style. With Third Day Builders, we provide the unique
          opportunity to work one-on-one with a contractor who has over 30 years
          of experience building custom homes. This one-on-one communication
          allows for customers to directly communicate their needs and wishes to
          build the home or project they envision. This eliminates the
          frustration and time wasted trying to communicate wishes through a
          chain of employees. We guarantee to be with you every step of the way
          during this very important process.
        </p>
      </div>

      <div className="AboutBlock">
        <h1>Overview of our Process</h1>
        <hr />
        <ul>
          <li>
            <span className="ListName">Initial Contact: </span>The client can
            contact us through the website or by the provided phone number.
          </li>
          <li>
            <span className="ListName">Initial Meeting: </span>The client
            provides us with the plans for their future home, addition, or
            remodel. If none exist, we will work together to develop these
            plans. This is an opportunity for us to fully understand the needs
            and desires of the client.
          </li>
          <li>
            <span className="ListName">Proposal: </span>We develop a proposal
            based on the budget, plans, and other various factors. Once
            everything is settled, we provide a timeline for when the new home,
            addition, or remodel will be finished.
          </li>
          <li>
            <span className="ListName">Continued Communication: </span>While
            building the project, the builder will continue to communicate with
            the client. Any concerns, alterations, or further actions can be
            discussed.
          </li>
          <li>
            <span className="ListName">Our Guarantee: </span>We honor a one
            year, new build warranty and a ten year structural warranty.
          </li>
        </ul>
      </div>
    </AboutStyles>
  );
};

export default AboutUs;
