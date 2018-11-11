import React from 'react';

import Skill from '../Skill/index';
import style from './style.scss';

const FrontEnd = () => {
  // &nbsp;
  const skills = [
    {
      type: 'font',
      text: '  HTML5  ',
      src: 'devicon-html5-plain',
    },
    {
      type: 'font',
      text: 'CSS3',
      src: 'devicon-css3-plain',
    },
    {
      type: 'font',
      text: 'JavaScript',
      src: 'devicon-javascript-plain',
    },
    {
      type: 'font',
      text: 'React',
      src: 'devicon-react-original',
    },
    // redux: {
    //   type: 'font',
    //   text: 'JavaScript',
    //   src: 'devicon-javascript-plain',
    // },
    {
      type: 'font',
      text: 'Bootstrap',
      src: 'devicon-bootstrap-plain',
    }
  ];

  return (
    <div className={ style.root }>
      <h2 className={ style.heading }>Front End</h2>
      <div className={ style.icons }>
        { 
          skills.map(skill => (
            <Skill type={ skill.type } text={ skill.text } src={ skill.src }/>
          ))
        }
      </div>
    </div>
  );
};

export default FrontEnd;