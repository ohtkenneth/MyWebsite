import React from 'react';
import style from './style.scss';

import Heading from '../../Heading/index';
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
      src: 'devicon-express-original'
    },
    {
      type: 'font',
      text: 'Amazon Web Services',
      src: 'devicon-amazonwebservices-original'
    },
    {
      type: 'font',
      text: 'Redis',
      src: 'devicon-redis-plain'
    },
    {
      type: 'font',
      text: 'MongoDB',
      src: 'devicon-mongodb-plain'
    },
    {
      type: 'image',
      text: 'Mongoose.js',
      src: 'https://s3-us-west-1.amazonaws.com/ktowebsitefiles/mongooseWhite.png'
    },
    {
      type: 'font',
      text: 'PostgreSQL',
      src: 'devicon-postgresql-plain'
    },
    {
      type: 'image',
      text: 'Knex.js',
      src: 'https://s3-us-west-1.amazonaws.com/ktowebsitefiles/knexWhite.png'
    }
  ];

  return (
    <div 
      className={ style['skills__section'] }
      data-aos="fade-left"
      data-aos-offset="250"
      data-aos-duration="700"
    >
      {/* <h2 className={ style['skills__heading'] }>Back End</h2> */}
      <Heading type="secondary" text="Back End" />
      <div className={ style['skills__backend__icons'] }>
        {
          skills.map(skill => (
            <Skill key={'backend' + skill.text } type={ skill.type } text={ skill.text } src={ skill.src }/>
          ))
        }
      </div>
    </div>
  );
};

export default BackEnd;
