import React from 'react';
import styles from './Skills.css';

import High from './High/High';
import Middle from './Middle/Middle';

import FrontEnd from './FrontEnd/FrontEnd';
import BackEnd from './BackEnd/BackEnd';
import Testing from './Testing/Testing';
import Deployment from './Deployment/Deployment';
import Divider from './Divider/Divider';

const Skills = () => {
  return (
    <div id="skills" className={ styles.root }>
      <h2 className={ styles['section-heading']}>Skills</h2>
      <FrontEnd />
      <Divider/>
      <BackEnd />
      <Divider/>
      <Testing />
      {/* <Deployment /> */}
    </div>
  );
};

export default Skills;