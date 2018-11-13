import React from 'react';
import styles from './style.scss';
import Carousel from '../../Carousel/index';

const Details = ({ name, description, technologies, images, points }) => {
  console.log(images)
  return (
    <div className={ styles.details }>
      <div className={ styles['details__header'] }>
        <h3 className={ styles['details__name'] }>{ name }</h3>
      </div>
      <Carousel images={ images }/>
      <div className={ styles['details__points'] }>
        {
          points.map((point, index) => (
            <div key={ point } className={ styles['details__points--point']}>
              { point }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;