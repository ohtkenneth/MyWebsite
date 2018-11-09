import React from 'react';
import { svg as linkedInSvg } from 'simple-icons/icons/linkedin';
import styles from './styles.css';

const handleLinkedIn = () => {
  const tab = window.open('https://www.linkedin.com/in/kenneth-oh/', '_blank');
  tab.focus();
};

const LinkedInIcon = ({ style }) => {
  return (
    <div 
      style={ style }
      onClick={ handleLinkedIn } 
      className={ `${styles.contact} ${styles['contact-linkedin']}` } 
      dangerouslySetInnerHTML={{__html: linkedInSvg }} />
  );
}

export default LinkedInIcon;