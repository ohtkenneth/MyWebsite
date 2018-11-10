import React from 'react';
import style from './style.css';

const Footer = ({ name, description }) => {
  return (
    <div className={ style.root }>
      <h3 className={ style.title }>{ name }</h3>
      <p className={ style.description }>{ description }</p>
    </div>
  )
}

export default Footer;