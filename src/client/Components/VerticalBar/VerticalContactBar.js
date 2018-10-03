import React from 'react';

import styles from './VerticalContactBar.css';
import GmailIcon from '../ContactIcons/Gmail';
import LinkedInIcon from '../ContactIcons/LinkedIn';

const VerticalContactBar = (props) => {
  const style = {
    width: 25,
    height: 25,
    margin: '10px 0px 10px 0px'
  };
  return (
    <div className={ styles.root }>
      <GmailIcon style={ style } />
      <LinkedInIcon style={ style } />
    </div>
  );
}


export default VerticalContactBar;