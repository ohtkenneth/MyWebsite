import React from 'react';
import style from './style.scss';

import FrontEnd from './FrontEnd/index';
import BackEnd from './BackEnd/index';
import TestingDeployment from './Testing-Deployment/index';
import Divider from './Divider/Divider';

const Skills = () => {
  return (
    <div id="skills" className={ style.skills }>
      <h2 className={ style['section-heading']}>Skills</h2>
      <FrontEnd />
      <Divider/>
      <BackEnd />
      <Divider/>
      <TestingDeployment />
    </div>
  );
};

export default Skills;