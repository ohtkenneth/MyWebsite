import React from 'react';
import styles from './Testing.css';


import Deployment from '../Deployment/Deployment';

const Testing = () => {
  const jest = '../../icons/jestWhite.png';
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Testing / Deployment</h2>
      <div className={ styles.icons }>      
        <img src={ jest }/>
        <i class="devicon-mocha-plain"><span>Mocha</span></i>
        <i class="devicon-travis-plain"><span>Travis CI</span></i>
        <i class="devicon-docker-plain"><span>Docker</span></i>
        <i class="devicon-amazonwebservices-original"><span>AWS</span></i>
        <i class="devicon-heroku-original"><span>Heroku</span></i>
      </div>
    </div>
  );
};

export default Testing;

