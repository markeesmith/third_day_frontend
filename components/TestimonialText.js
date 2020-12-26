import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialTextStyles = styled.div`
  width: 90%;
  ${({ imgLeft }) =>
    imgLeft && !isMobile ? 'margin-right: 10%' : 'margin-left: 10%'};
  ${({ imgLeft }) =>
    imgLeft && !isMobile ? 'padding-left: 3vw' : 'padding-right: 3vw'};
  padding-top: 5vh;
  padding-bottom: 5vh;

  #headlineText {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 0;
  }

  #bodyText {
    font-style: italic;
  }

  #signatureText {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const InnerContainer = styled.div``;

const TestimonialText = ({ headline, text, name, imgLeft }) => (
  <TestimonialTextStyles imgLeft={imgLeft}>
    <InnerContainer>
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
      <p id="headlineText">{headline}</p>
      <div
        id="bodyText"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize({ text }.text),
        }}
      />
      <p id="signatureText">{name}</p>
    </InnerContainer>
  </TestimonialTextStyles>
);

TestimonialText.propTypes = {
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgLeft: PropTypes.bool,
};

TestimonialText.defaultProps = {
  imgLeft: true,
};

export default TestimonialText;
