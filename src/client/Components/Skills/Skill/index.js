import React from 'react';
import style from './style.scss';

const Skill = ({ type, text, src }) => {
  let skill;

  if (type === 'font') {
    skill = (
      <i className={ src }>
        <span>{ text }</span>
      </i>
    );
  } else {
    skill = (
      <span classsName={ style['skill']}>
        <img className={ style['skill__icon']} src={ src }/>
        { text }
      </span>
    )
  } 

  return skill;
};

export default Skill;