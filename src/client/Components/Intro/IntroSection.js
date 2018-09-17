import React from 'react';
import styles from './IntroSection.css';

const IntroSection = () => {
  return (
    <div className={ styles.root }>
      <h3 className={ styles.text }>Hello, my name is</h3>
      <h1 className={ styles.text }>Kenneth.</h1>
      <h3 className={ styles.text }>I'm a full-stack web developer.</h3>
    </div>
  );
};

export default IntroSection;