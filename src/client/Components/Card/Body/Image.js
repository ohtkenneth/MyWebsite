import React from 'react';
import styles from './Image.css';

const Image = ({ imgSrc }) => {
  console.log(imgSrc)
  return (
    <div className={ styles.root }>
      <img className={ styles.image } src={ imgSrc }/>
    </div>
  )
}

export default Image;