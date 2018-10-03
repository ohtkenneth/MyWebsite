import React from 'react';
import styles from './Footer.css';

const Footer = ({ name, description }) => {
  return (
    <div className={ styles.root }>
      <h3>{ name }</h3>
      <p>{ description }</p>
    </div>
  )
}

export default Footer;