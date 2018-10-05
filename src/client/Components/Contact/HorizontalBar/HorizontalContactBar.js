import React from 'react';

import styles from './HorizontalContactBar.css';

import GmailIcon from '../../ContactIcons/Gmail';
import LinkedInIcon from '../../ContactIcons/LinkedIn';
import GithubIcon from '../../ContactIcons/Github';

const HorizontalContactBar = (props) => {
  const style = {
    width: '4rem',
    height: '4rem',
    margin: '0 2rem 0 2rem'
  };
  return (
    <div className={ styles.root }>
      <GmailIcon style={ style } />
      <LinkedInIcon style={ style } />
      <GithubIcon style={ style } />
    </div>
  );
};

export default HorizontalContactBar;