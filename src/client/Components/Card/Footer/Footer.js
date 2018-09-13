import React from 'react';
import styles from './Footer.css';

const Footer = ({ name, gist}) => {
  return (
    <div className={ styles.root}>
      <h3>{ name }</h3>
      <p>{ gist }</p>
    </div>
  )
}

export default Footer;