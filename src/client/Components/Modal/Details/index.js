import React from 'react';
import style from './style.scss';
import Carousel from '../../Carousel/index';

const Details = ({ name, description, technologies, images, points }) => {
  console.log(images)
  return (
    <div className={ style.details }>
      <div className={ style['details__header'] }>
        <h3 className={ style['details__name'] }>{ name }</h3>
      </div>
      {
        images.length === 0
          ? <img className={ style['details__image--construction']} src="https://s3-us-west-1.amazonaws.com/ktowebsitefiles/underconstruction.png" />
          : <Carousel images={ images }/>
      }
      <div className={ style['details__points'] }>
        {
          points.map((point, index) => (
            <div key={ point } className={ style['details__points--point']}>
              { point }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;