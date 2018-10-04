import React from 'react';
import styles from './BackEnd.css';

const BackEnd = () => {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Back End</h2>
      <div className={ styles.icons }>
      <i class="devicon-nodejs-plain"><span>node.js</span></i>
      <i class="devicon-express-original"><span>express.js</span></i>
      <i class="devicon-postgresql-plain"><span>postgreSQL</span></i>
      <i class="devicon-amazonwebservices-original"><span>AWS</span></i>
      <i class="devicon-mongodb-plain"><span>mongoDB</span></i>
      </div>
    </div>
  );
};

export default BackEnd;
