import React from 'react';
import styles from './Footer.css';

const Footer = ({ name, description }) => {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.title }>{ name }</h3>
      <p className={ styles.description }>{ description }</p>
    </div>
  )
}

export default Footer;