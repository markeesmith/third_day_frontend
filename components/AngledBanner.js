import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const AngledBannerStyles = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.foreColor};
  text-align: center;

  h1 {
    margin-block-end: 0;
    margin-block-start: 0;
    font-size: ${(props) => props.font};
  }

  .Caret {
    z-index: 100;
    color: ${(props) => props.backColor};
    margin-top: -53px;
  }
`;

const AngledBanner = ({ text, height, foreColor, backColor, font }) => {
  return (
    <AngledBannerStyles
      height={height}
      foreColor={foreColor}
      backColor={backColor}
      font={font}
    >
      <h1>{text}</h1>
      <FontAwesomeIcon className="Caret" icon={faCaretDown} size="8x" />
    </AngledBannerStyles>
  );
};

AngledBanner.propTypes = {
  text: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  foreColor: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
};

export default AngledBanner;
