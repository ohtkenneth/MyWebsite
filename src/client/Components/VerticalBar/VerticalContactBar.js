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

const GmailIcon = () => (
  <div className={ styles.icon } dangerouslySetInnerHTML={{__html: gmailIconSvg }} />
);

const LinkedInIcon = () => (
  <div className={ styles.icon } dangerouslySetInnerHTML={{__html: linkedInSvg }} />
)

export default VerticalContactBar;