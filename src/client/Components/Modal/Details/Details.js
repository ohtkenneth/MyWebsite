import React from 'react';
import styles from './Details.css';

const Details = ({ name, description }) => {
  return (
    <div className={ styles.root }>
      <div className={ styles.header }>
        <h3 className={ styles.name }>{ name }</h3>
      </div>
      <p>{ description }</p>
    </div>
  );
};

export default Details;