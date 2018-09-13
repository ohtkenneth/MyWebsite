import React from 'react';

import styles from './VerticalContactBar.css';
// icons
import { svg as gmailIconSvg } from 'simple-icons/icons/gmail';
import { svg as linkedInSvg } from 'simple-icons/icons/linkedin';

const VerticalContactBar = (props) => {
  return (
    <div className={ styles.root }>
      <GmailIcon />
      <LinkedInIcon />
    </div>
  )
}

const handleEmail = () => {
  document.location = `mailto:ohtkenneth@gmail.com?subject=&body=`;
};

const handleLinkedIn = () => {
  const tab = window.open('https://www.linkedin.com/in/kenneth-oh/', '_blank');
  tab.focus();
};

const GmailIcon = () => (
  <div onClick={ handleEmail }className={ styles.iconGmail } dangerouslySetInnerHTML={{__html: gmailIconSvg }} />
);

const LinkedInIcon = () => (
  <div onClick={ handleLinkedIn } className={ styles.iconLinkedIn } dangerouslySetInnerHTML={{__html: linkedInSvg }} />
)

export default VerticalContactBar;