import React from 'react';
import style from './style.scss';

const Footer = ({ name, description, websiteLink }) => {
  return (
    <div className={ style.root }>
      <h3 className={ style.title }>{ name }</h3>
      <p className={ style.description }>{ description }</p>
      {
        websiteLink ? (
          <a href={ websiteLink } target="_blank" className={ style["website-link"] }>Visit website &rarr;</a>
        ) : void 0
      }
    </div>
  )
}

export default Footer;