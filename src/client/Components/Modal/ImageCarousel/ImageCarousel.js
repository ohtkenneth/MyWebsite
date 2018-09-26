import React from 'react';
import styles from './ImageCarousel.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ imgSrc, images }) => {
  console.log(images);
  return (
    <div className={ styles.root }>
    {/* <div className={ styles.root }>
      <img className={ styles.image } src={ imgSrc }/>
    </div> */}
      <Carousel showArrows={ true } infiniteLoop={ true } showThumbs={ false }>
        {
          images.map((image, index) => (
            <div className={ styles['carousel-item']}>
              <img className={ styles['carousel-item-image'] } src={ image } />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

