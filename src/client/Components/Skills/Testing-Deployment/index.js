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
    <div 
      className={ style['testing-deployment'] }
      data-aos="fade-up"
      data-aos-offset="250"
      data-aos-duration="700"
    >
      <Heading type="secondary" text="Deployment"/>
      <div className={ style.icons }>      
        {
          skills.map(skill => (
            <Skill key={ 'td' + skill } type={ skill.type } text={ skill.text } src={ skill.src } />
          ))
        }
      </div>
    </div>
  );
};

export default TestingAndDeployment;

