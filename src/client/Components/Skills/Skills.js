import React from 'react';
import styles from './Skills.css';

import High from './High/High';
import Middle from './Middle/Middle';

const Skills = () => {
  return (
    <div className={ styles.root }>
      <High/>
      <Middle/>
    </div>
  )
};

export default Skills;