import React from 'react';
import styles from './Skills.css';

import High from './High/High';
import Middle from './Middle/Middle';

import Divider from './Divider/Divider';

const Skills = () => {
  return (
    <div className={ styles.root }>
      <High/>
      <Divider/>
      <Middle/>
    </div>
  )
};

export default Skills;