import React from 'react';
import styles from './Testing.css';

import Deployment from '../Deployment/Deployment';

const Testing = () => {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Testing / Deployment</h2>
      <div className={ styles.icons }>      
        <i class="devicon-travis-plain"><span>Travis CI</span></i>
        <i class="devicon-docker-plain"><span>docker</span></i>
        <i class="devicon-mocha-plain"><span>mocha</span></i>
        <i class="devicon-amazonwebservices-original"><span>AWS</span></i>
        <i class="devicon-heroku-original"><span>heroku</span></i>
      </div>
    </div>
  );
};

export default Testing;

