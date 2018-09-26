import React from 'react';
import styles from './Image.css';

const Image = ({ imgSrc, images }) => {
  return (
    // <div className={ styles.root }>
    //   <img className={ styles.image } src={ imgSrc }/>
    // </div>
    <Carousel showArrows={ true } infiniteLoop={ true } showThumbs={ false }>
      <div>
        <div className={ styles['carousel-item'] }>
          <h3 className={ styles.text }>Hello, my name is</h3>
          <h1 className={ styles['text-kenneth'] }>Kenneth.</h1>
          <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
        </div>
      </div>
      <div>
        <div className={ styles['carousel-item'] }>
          hello
        </div>
      </div>

      images.map((image, index) => (
        <div className={ styles['carousel-item']}>
          <img className={ styles['carousel-item-image'] } src={ image }/>
        </div>
      ))
    </Carousel>
  );
};

export default Image;

