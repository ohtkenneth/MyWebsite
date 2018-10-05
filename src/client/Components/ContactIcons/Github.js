import React from 'react';
import styles from './Github.css';
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
      className={ styles.iconGithub } 
      dangerouslySetInnerHTML={{__html: githubIcon }} 
    />
  );
};

export default GithubIcon;