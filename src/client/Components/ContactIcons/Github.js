import React from 'react';
import styles from './styles.scss';
// icons
import { svg as githubIcon } from 'simple-icons/icons/github';

const handleGithub = () => {
  const tab = window.open('https://www.github.com/ohtkenneth/', '_blank');
  tab.focus();
};

const GithubIcon = ({ style }) => {
  return (
    <div 
      style={ style }
      onClick={ handleGithub } 
      className={ `${styles.contact} ${styles['contact-github']}` } 
      dangerouslySetInnerHTML={{__html: githubIcon }} 
    />
  );
};

export default GithubIcon;