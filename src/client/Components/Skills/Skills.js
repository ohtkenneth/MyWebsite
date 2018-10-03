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
    <div className={ styles.root }>
      {/* <High/>
      
      <Middle/> */}
      <h3 className={ styles.heading }>Skills</h3>

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