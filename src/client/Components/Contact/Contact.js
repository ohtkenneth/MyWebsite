import React, { Component } from 'react';
import styles from './Contact.css';

import HorizontalContactBar from './HorizontalBar/HorizontalContactBar';
import GmailIcon from '../ContactIcons/Gmail';
import LinkedInIcon from '../ContactIcons/LinkedIn';
import GithubIcon from '../ContactIcons/Github';


const Contact = () => {
  const style = {
    width: '4rem',
    height: '4rem',
    margin: '1rem',
  };
  return (
    <div id="contact" className={ styles.root }>
      <h2 className={ styles.heading }>Let's build something <span className={ styles['heading-great']}>great.</span></h2>
      <div className={ styles.icons }>
        <GmailIcon style={ style } />
        <LinkedInIcon style={ style } />
        <GithubIcon style={ style } />
    </div>
   </div>
  );
};


export default Contact;