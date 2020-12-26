import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import TestimonialImage from './TestimonialImage';
import TestimonialText from './TestimonialText';

const TestimonialStyles = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? '1fr' : '1fr 1fr')};
  width: 80%;
  margin: 0 auto;
`;

const HR = styled.hr`
  border: none;
  height: 1px;
  width: 80%;
  color: #501414;
  background-color: #501414;
  margin: 4vh auto;
`;

const TestimonialEntry = ({ hr, imgLeft, galPath, headline, body, name }) => {
  if (hr) {
    if (imgLeft) {
      return (
        <div>
          <HR />
          <TestimonialStyles isMobile={isMobile}>
            <TestimonialImage imgSrc={galPath} />
            <TestimonialText headline={headline} text={body} name={name} />
          </TestimonialStyles>
        </div>
      );
    }
    return (
      <div>
        <HR />
        <TestimonialStyles isMobile={isMobile}>
          <TestimonialText
            headline={headline}
            text={body}
            name={name}
            imgLeft={imgLeft}
          />
          <TestimonialImage imgSrc={galPath} />
        </TestimonialStyles>
      </div>
    );
  }
  if (imgLeft) {
    return (
      <TestimonialStyles isMobile={isMobile}>
        <TestimonialImage imgSrc={galPath} />
        <TestimonialText headline={headline} text={body} name={name} />
      </TestimonialStyles>
    );
  }
  return (
    <TestimonialStyles isMobile={isMobile}>
      <TestimonialText
        headline={headline}
        text={body}
        name={name}
        imgLeft={imgLeft}
      />
      <TestimonialImage imgSrc={galPath} />
    </TestimonialStyles>
  );
};

TestimonialEntry.propTypes = {
  hr: PropTypes.bool.isRequired,
  imgLeft: PropTypes.bool.isRequired,
  galPath: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialEntry;
