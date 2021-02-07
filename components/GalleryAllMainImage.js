import React, { Component } from 'react';
import PropTypes from 'prop-types';

const swipeThreshold = 10;

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

    if (distanceX > swipeThreshold) {
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

    if (distanceX > swipeThreshold && Math.abs(distanceY <= 75)) {
      prevPhoto();
    } else if (distanceX < -swipeThreshold && Math.abs(distanceY <= 75)) {
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
