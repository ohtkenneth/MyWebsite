import React from 'react';

import styles from './FrontEnd.css';

const FrontEnd = () => {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Front End</h2>
      <div className={ styles.icons }>
        <i className={`devicon-javascript-plain skill`}><span>javascript</span></i>
        <i class="devicon-react-original"><span>react.js</span></i>
        <i class="devicon-html5-plain"><span>HTML5</span></i>
        <i class="devicon-bootstrap-plain"><span>Bootstrap</span></i>
        <i class="devicon-css3-plain"><span>CSS3</span></i>
      </div>
    </div>
  );
};

export default FrontEnd;