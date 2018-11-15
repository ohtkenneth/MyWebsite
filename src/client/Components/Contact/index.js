import React, { Component } from 'react';
import style from './style.scss';

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
    <div id="contact" className={ style.contact }>
      <h2 className={ style['contact__heading'] }>Let's build something <span className={ style['heading--great'] }>great.<span className={ style['heading--great__message'] }>Thanks for coming!</span></span></h2>
      <div className={ style['contact__icons'] }>
        <GmailIcon style={ inlineStyle } />
        <LinkedInIcon style={ inlineStyle } />
        <GithubIcon style={ inlineStyle } />
    </div>
   </div>
  );
};


export default Contact;