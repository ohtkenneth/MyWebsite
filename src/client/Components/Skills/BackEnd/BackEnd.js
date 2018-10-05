import React from 'react';
import styles from './BackEnd.css';

const BackEnd = () => {
  const mongoose = require('../../icons/mongooseWhite.png');
  const knex = require('../../icons/knexWhite.png');
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Back End</h2>
      <div className={ styles.icons }>
        <i class="devicon-nodejs-plain"><span>Node.js</span></i>
        <i class="devicon-express-original"><span>Express.js</span></i>
        <i class="devicon-amazonwebservices-original"><span>AWS</span></i>
        <i class="devicon-mongodb-plain"><span>MongoDB</span></i>
        <span className={ styles['png-root']}><img className={ styles['png-icon'] } src={ mongoose }/>Mongoose.js</span>
        <i class="devicon-postgresql-plain"><span>PostgreSQL</span></i>
        <span className={ styles['png-root']}><img className={ styles['png-icon'] } src={ knex }/>Knex.js</span>
      </div>
    </div>
  );
};

export default BackEnd;
