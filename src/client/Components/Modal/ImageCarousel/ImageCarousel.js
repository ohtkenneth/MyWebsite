import React from 'react';
import styles from './ImageCarousel.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ imgSrc, images }) => {
  console.log(images);
  return (
    <div className={ styles.root }>
      <img className={ styles.image } src={ imgSrc }/>
    </div>
  );
};

export default ImageCarousel;

