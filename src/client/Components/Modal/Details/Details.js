import React from 'react';
import styles from './Details.css';

const Details = ({ name, description, points }) => {
  return (
    <div className={ styles.root }>
      <div className={ styles.header }>
        <h3 className={ styles.name }>{ name }</h3>
      </div>
      <p>{ description }</p>
      <div className={ styles['points-root'] }>
        {
          points.map((point, index) => (
            <div className={ styles.point}>
              { point }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;