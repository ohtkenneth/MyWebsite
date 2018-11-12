import React from 'react';
import style from './style.scss';

import Heading from '../../Heading/index';
import Skill from '../Skill/index';

const TestingAndDeployment = () => {
  const skills = [
    {
      type: 'image',
      text: 'Jest',
      src: 'https://s3-us-west-1.amazonaws.com/ktowebsitefiles/jestWhite.png',
    },
    {
      type: 'font',
      text: 'Mocha',
      src: 'devicon-mocha-plain'
    },
    {
      type: 'font',
      text: 'Travis CI',
      src: 'devicon-travis-plain'
    },
    {
      type: 'font',
      text: 'Docker',
      src: 'devicon-docker-plain'
    },
    {
      type: 'font',
      text: 'Amazon Web Services',
      src: 'devicon-amazonwebservices-original'
    },
    {
      type: 'font',
      text: 'NGINX',
      src: 'devicon-nginx-original',
    },
  ];
  return (
    <div className={ style.root }>
      {/* <h2 className={ style.heading }>Testing / Deployment</h2> */}
      <Heading type="secondary" text="Deployment"/>
      <div className={ style.icons }>      
        <span className={ style['png-root']}><img className={ style['png-icon'] } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/jestWhite.png'/>Jest</span>
        <i class="devicon-mocha-plain"><span>Mocha</span></i>
        <i class="devicon-travis-plain"><span>Travis CI</span></i>
        <i class="devicon-docker-plain"><span>Docker</span></i>
        <i class="devicon-amazonwebservices-original"><span>AWS</span></i>
        <i class="devicon-nginx-original"><span>NGINX</span></i>
      </div>
    </div>
  );
};

export default TestingAndDeployment;

