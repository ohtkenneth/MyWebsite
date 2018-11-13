import React from 'react';
import style from './style.scss';

const CarouselDots = ({ dots, currDot }) => {
  return (
    <div className={ style['carousel-dots']}>
      {
        dots.map((dot, index) => (
          <span 
            className={ currDot === index 
              ? style['carousel-dots--active'] 
              : style['carousel-dots--inactive']}
          >
          </span>
        ))
      }
    </div>
  );
};

export default CarouselDots;