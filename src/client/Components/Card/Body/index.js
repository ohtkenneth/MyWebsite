import React from 'react';
import style from './style.scss';

const Image = ({ imgSrc }) => {
  return (
    <div className={ style.root }>
      <img className={ style.image } src={ imgSrc }/>
    </div>
  );
}

export default Image;