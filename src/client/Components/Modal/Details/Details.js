import React from 'react';
import styles from './Details.css';
import icons from '../../utils/icons';
// import Technologies from '../Technologies/Technologies';

const Details = ({ name, description, technologies, points }) => {
  return (
    <div className={ styles.root }>
      <div className={ styles.header }>
        <h3 className={ styles.name }>{ name }</h3>
      </div>
      {/* <p>{ description }</p> */}

      {/* <div className={ styles.technologies }>
        <Technologies technologies={ technologies }/>
      </div> */}
      {/* <div className={ styles.technologies }>
        {   
          technologies.map((tech, index) => (
            <div key={ tech } className={ styles.icon }>{ icons[tech] }</div>
          ))
        }
      </div> */}

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