import React from 'react';
import styles from './styles.css';
// icons
import { svg as gmailIconSvg } from 'simple-icons/icons/gmail';

const handleEmail = () => {
  document.location = `mailto:ohtkenneth@gmail.com?subject=&body=`;
};

const GmailIcon = ({ style }) => {
  return (
    <div
      style={ style }
      onClick={ handleEmail } 
      className={ styles['contact contact-gmail'] } 
      dangerouslySetInnerHTML={{__html: gmailIconSvg }} 
    />
  );
};

export default GmailIcon;