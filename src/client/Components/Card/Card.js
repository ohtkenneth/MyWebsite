import React from 'react';

import Header from './Header/Header';
import Body from './Body/Image';
import Footer from './Footer/Footer';
import Modal from '../Modal/Modal';

import styles from './Card.css';

const Card = ({ info, onOverlay }) => {
  return (
    <div className={ styles.root } onClick={ () => onOverlay(info.id) }>
      {/* info.technologies are technologies used in stack */}
      <Header technologies={ info.technologies }/>
      <Body imgSrc={ info.mainImage }/>
      <Footer name={ info.name } gist={ info.gist }/>
    </div>
  );
};

export default Card;