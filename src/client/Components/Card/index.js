import React from 'react';

import icons from '../utils/icons';
import Body from './Body/index';
import Footer from './Footer/index';
import Modal from '../Modal/index';

import style from './style.css';

const Card = ({ info, onModal }) => {
  return (
    <div className={ style.card } onClick={ () => onModal(info.id) }>
      <Footer name={ info.name } description={ info.description }/>
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