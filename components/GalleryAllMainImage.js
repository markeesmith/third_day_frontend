import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const GalleryAllMainImage = ({ url, position }) => (
// <div>
//   <img sizes="100%" src={`${url}${position}-1024.jpg`} alt="Main Gallery" />
// </div>
// );

const swipeThreshold = 10;

class GalleryAllMainImage extends Component {
  constructor(props) {
    super(props);

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);

    this.state = {
      swipeStartX: 0,
    };
  }

  handleTouchStart(event) {
    this.setState({
      swipeStartX: event.changedTouches[0].pageX,
    });
  }

  handleTouchEnd(event) {
    const { swipeStartX } = this.state;
    const { nextPhoto, prevPhoto } = this.props;
    const distanceX = event.changedTouches[0].pageX - swipeStartX;

    if (distanceX > swipeThreshold) {
      prevPhoto();
    } else if (distanceX < -swipeThreshold) {
      nextPhoto();
    }
  }

  render() {
    const { url, position } = this.props;

    return (
      <div>
        <img
          sizes="100%"
          src={`${url}${position}-1024.jpg`}
          alt="Main Gallery"
          onTouchStart={this.handleTouchStart}
          onTouchEnd={this.handleTouchEnd}
        />
      </div>
    );
  }
}

GalleryAllMainImage.propTypes = {
  url: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  nextPhoto: PropTypes.func.isRequired,
  prevPhoto: PropTypes.func.isRequired,
};

export default GalleryAllMainImage;
