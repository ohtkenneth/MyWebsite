import React from 'react';

import Header from './Header/Header';
import Body from './Body/Image';
import Footer from './Footer/Footer';
import Overlay from '../Overlay/Overlay';

import styles from './Card.css';

const Card = ({ info }) => {
  return (
    <div className={ styles.root } onClick={ () => alert('hello world') }>
      {/* info.technologies are technologies used in stack */}
      <Header technologies={ info.technologies }/>
      <Body imgSrc={ info.imgSrc }/>
      <Footer name={ info.name } gist={ info.gist }/>
      <Overlay />
    </div>
  );
};

const handleCardClick = () => {
  // toggle the card's overlay with card information
};

export default Card;