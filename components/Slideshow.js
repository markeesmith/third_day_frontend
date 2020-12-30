import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const imgSrc = `${process.env.S3_BASE_URL}slideshow/`;
const homeNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SlideshowStyles = styled.div`
  height: ${(props) => (props.isMobile ? '30vh' : '50vh')};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${(props) => (props.isMobile ? 'contain' : 'cover')};
  }
`;

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.handleInterval = this.handleInterval.bind(this);
    this.state = {
      slideshowPos: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.handleInterval, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleInterval() {
    const { slideshowPos } = this.state;
    const pos = slideshowPos === homeNumbers.length - 1 ? 0 : slideshowPos + 1;
    this.setState({
      slideshowPos: pos,
    });
  }

  render() {
    const { slideshowPos } = this.state;
    const { isMobile } = this.props;
    const srcText = `${imgSrc}${homeNumbers[slideshowPos]}-480.jpg`;
    const srcSetText = `${imgSrc}${homeNumbers[slideshowPos]}-480.jpg 480w, ${imgSrc}${homeNumbers[slideshowPos]}-767.jpg 767w, ${imgSrc}${homeNumbers[slideshowPos]}-1024.jpg 1024w, ${imgSrc}${homeNumbers[slideshowPos]}-1280.jpg 1280w, ${imgSrc}${homeNumbers[slideshowPos]}-1280.jpg 1300w`;

    return (
      <SlideshowStyles isMobile={isMobile}>
        <img
          srcSet={srcSetText}
          sizes="100%"
          src={srcText}
          alt="Home Slideshow Screen"
        />
      </SlideshowStyles>
    );
  }
}

Slideshow.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Slideshow;
