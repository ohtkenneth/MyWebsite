import React, { Component } from 'react';
import style from './style.css';

import GmailIcon from '../ContactIcons/Gmail';
import LinkedInIcon from '../ContactIcons/LinkedIn';
import GithubIcon from '../ContactIcons/Github';

const Contact = () => {
  const inlineStyle = {
    width: '4rem',
    height: '4rem',
    margin: '1rem 2rem',
  };
  return (
    <div id="contact" className={ style.root }>
      <h2 className={ style.heading }>Let's build something <span className={ style['heading-great']}>great.</span></h2>
      <div className={ style.icons }>
        <GmailIcon style={ inlineStyle } />
        <LinkedInIcon style={ inlineStyle } />
        <GithubIcon style={ inlineStyle } />
    </div>
   </div>
  );
};


export default Contact;