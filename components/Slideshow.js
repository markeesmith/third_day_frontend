import React, { Component } from 'react';
import styled from 'styled-components';

const imgSrc = `${process.env.NEXT_PUBLIC_S3_BASE_URL}slideshow/home`;
const homeNumbers = [1, 2, 3, 4, 5, 6, 8, 9];

const SlideshowStyles = styled.div`
  height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    const srcText = `${imgSrc}${homeNumbers[slideshowPos]}-480.jpg`;
    const srcSetText = `${imgSrc}${homeNumbers[slideshowPos]}-480.jpg 480w, ${imgSrc}${homeNumbers[slideshowPos]}-767.jpg 767w, ${imgSrc}${homeNumbers[slideshowPos]}-1024.jpg 1024w, ${imgSrc}${homeNumbers[slideshowPos]}-1280.jpg 1280w, ${imgSrc}${homeNumbers[slideshowPos]}-1280.jpg 1300w`;

    return (
      <SlideshowStyles>
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

export default Slideshow;
