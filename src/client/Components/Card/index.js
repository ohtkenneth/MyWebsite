import React from 'react';

import icons from '../utils/icons';
import Footer from './Footer/index';

import style from './style.scss';

const Card = ({ info, onModal }) => {
  return (
    <div 
      className={ style.card } 
      onClick={ () => onModal(info.id) }
      data-aos="fade-up"
      data-aos-offset={ String(Math.floor(Math.random() * 300) + 200)}
    >
      <Footer name={ info.name } description={ info.description } websiteLink={ info.websiteLink }/>
      <div className={ style['card__technologies'] }>
        {   
          info.technologies.map((tech, index) => (
            <div key={ tech } className={ style['card_technologies--icon'] }>{ icons[tech] }</div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;