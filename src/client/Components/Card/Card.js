import React from 'react';

import icons from '../utils/icons';
import Body from './Body/Image';
import Footer from './Footer/Footer';
import Modal from '../Modal/Modal';

import styles from './Card.css';

const Card = ({ info, onModal }) => {
  return (
    <div className={ styles.root } onClick={ () => onModal(info.id) }>
      {/* info.technologies are technologies used in stack */}
      {/* <Header technologies={ info.technologies }/> */}
      {/* <Body imgSrc={ info.mainImage }/> */}
      
      <Footer name={ info.name } description={ info.description }/>
      <div className={ styles.technologies }>
        {   
          info.technologies.map((tech, index) => (
            <div key={ tech } className={ styles.icon }>{ icons[tech] }</div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;