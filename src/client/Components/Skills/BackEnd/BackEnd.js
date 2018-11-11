import React from 'react';
import styles from './BackEnd.scss';

import Skill from '../Skill/index';

const BackEnd = () => {
  const skills = [
    {
      type: 'font',
      text: 'Node.js',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'font',
      text: 'Express.js',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'font',
      text: 'AWS',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'font',
      text: 'Redis',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'font',
      text: 'MongoDB',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'image',
      text: 'Mongoose.js',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'font',
      text: 'PostgreSQL',
      src: 'devicon-nodejs-plain'
    },
    {
      type: 'image',
      text: 'Knex.js',
      src: 'devicon-nodejs-plain'
    }
  ];

  return (
    <div className={ styles['skills__section'] }>
      <h2 className={ styles['skills__heading'] }>Back End</h2>
      <div className={ styles['skills__icons'] }>
        {/* <i class="devicon-nodejs-plain"><span>Node.js</span></i>
        <i class="devicon-express-original"><span>Express.js</span></i>
        <i class="devicon-amazonwebservices-original"><span>&nbsp;&nbsp;AWS&nbsp;&nbsp;</span></i>
        <i class="devicon-redis-plain"><span>Redis</span></i>
        <i class="devicon-mongodb-plain"><span>MongoDB</span></i>
        <span className={ styles['png-root']}><img className={ styles['png-icon'] } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/mongooseWhite.png'/>Mongoose.js</span>
        <i class="devicon-postgresql-plain"><span>PostgreSQL</span></i>
        <span className={ styles['png-root']}><img className={ styles['png-icon'] } src='https://s3-us-west-1.amazonaws.com/ktowebsitefiles/knexWhite.png'/>Knex.js</span> */}
        {
          skills.map(skill => (
            <Skill type={ skill.type } text={ skill.text } src={ skill.src }/>
          ))
        }
      </div>
    </div>
  );
};

export default BackEnd;
