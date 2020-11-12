import styled from 'styled-components';

const SlideshowStyles = styled.div`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  z-index: -1;

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    animation: imageAnimation 40s linear infinite;
  }

  img:nth-child(2) {
    animation-delay: 5s;
  }
  img:nth-child(3) {
    animation-delay: 10s;
  }
  img:nth-child(4) {
    animation-delay: 15s;
  }
  img:nth-child(5) {
    animation-delay: 20s;
  }
  img:nth-child(6) {
    animation-delay: 25s;
  }
  img:nth-child(7) {
    animation-delay: 30s;
  }
  img:nth-child(8) {
    animation-delay: 35s;
  }

  @keyframes imageAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    5% {
      opacity: 1;
      animation-timing-function: ease-out;
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
  }

  @-webkit-keyframes imageAnimation {
    0% {
      opacity: 0;
      -webkit-animation-timing-function: ease-in;
    }
    5% {
      opacity: 1;
      -webkit-animation-timing-function: ease-out;
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
  }

  @-moz-keyframes imageAnimation {
    0% {
      opacity: 0;
      -moz-animation-timing-function: ease-in;
    }
    5% {
      opacity: 1;
      -moz-animation-timing-function: ease-out;
    }
    10% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
  }
`;

export default SlideshowStyles;
