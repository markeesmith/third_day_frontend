import React from 'react';
import SlideshowImage from './SlideshowImage';
import SlideshowStyles from './styles/SlideshowStyles';

const imgSrc = `${process.env.NEXT_PUBLIC_S3_BASE_URL}slideshow/home`;
const homeNumbers = [1, 2, 3, 4, 5, 6, 8, 9];

const Slideshow = () => {
  return (
    <SlideshowStyles>
      {homeNumbers.map((num) => (
        <SlideshowImage basePath={imgSrc} num={num} key={num} />
      ))}
    </SlideshowStyles>
  );
};

export default Slideshow;
