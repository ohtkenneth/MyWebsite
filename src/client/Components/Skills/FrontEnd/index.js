import React from 'react';
import Heading from '../../Heading/index';
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
    {
      type: 'image',
      text: 'Redux',
      src: 'https://s3-us-west-1.amazonaws.com/ktowebsitefiles/reduxWhite.png',
    },
    {
      type: 'font',
      text: 'Sass',
      src: 'devicon-sass-original'
    },
    {
      type: 'font',
      text: 'Bootstrap',
      src: 'devicon-bootstrap-plain',
    }
  ];

  return (
    <div 
      className={ style.root } 
      data-aos="fade-right"
      data-aos-offset="250"
      data-aos-duration="700"
    >
      {/* <h2 className={ style.heading }>Front End</h2> */}
      <Heading type="secondary" text="Front End" />
      <div className={ style.icons }>
        { 
          skills.map(skill => (
            <Skill key={'frontend' + skill.text } type={ skill.type } text={ skill.text } src={ skill.src }/>
          ))
        }
      </div>
    </div>
  );
};

export default FrontEnd;