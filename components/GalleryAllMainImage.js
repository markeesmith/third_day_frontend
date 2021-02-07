import React, { Component } from 'react';
import PropTypes from 'prop-types';

const swipeThresholdX = 50;
const swipeThresholdY = 75;

class GalleryAllMainImage extends Component {
  constructor(props) {
    super(props);

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);

    this.state = {
      swipeStartX: 0,
      swipeStartY: 0,
    };
  }

  handleTouchStart(event) {
    this.setState({
      swipeStartX: event.changedTouches[0].pageX,
      swipeStartY: event.changedTouches[0].pageY,
    });
  }

  handleTouchMove(event) {
    const { swipeStartX } = this.state;
    const distanceX = event.changedTouches[0].pageX - swipeStartX;

    if (Math.abs(distanceX) > swipeThresholdX) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  handleTouchEnd(event) {
    const { swipeStartX, swipeStartY } = this.state;
    const { nextPhoto, prevPhoto } = this.props;
    const distanceX = event.changedTouches[0].pageX - swipeStartX;
    const distanceY = event.changedTouches[0].pageY - swipeStartY;

    if (distanceX > swipeThresholdX && Math.abs(distanceY) <= swipeThresholdY) {
      prevPhoto();
    } else if (
      distanceX < -swipeThresholdX &&
      Math.abs(distanceY) <= swipeThresholdY
    ) {
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
          onTouchMove={this.handleTouchMove}
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
