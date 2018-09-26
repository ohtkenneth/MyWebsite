import React from 'react';
import styles from './Details.css';

const Details = ({ name, description }) => {
  return (
    <div className={ styles.root }>
      <div className={ styles.header }>
        <h1 className={ styles.name }>{ name }</h1>
      </div>
      <p>{ description }</p>
    </div>
  );
};

export default Details;