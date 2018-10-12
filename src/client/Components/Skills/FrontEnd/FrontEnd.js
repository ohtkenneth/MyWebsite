import React from 'react';

import styles from './FrontEnd.css';

const FrontEnd = () => {
  return (
    <div className={ styles.root }>
      <h2 className={ styles.heading }>Front End</h2>
      <div className={ styles.icons }>
        <i class="devicon-html5-plain"><span>&nbsp;&nbsp;HTML5&nbsp;</span></i>
        <i class="devicon-css3-plain"><span>&nbsp;&nbsp;CSS3&nbsp;</span></i>
        <i class={`devicon-javascript-plain skill`}><span>JavaScript</span></i>
        <i class="devicon-react-original"><span>React.js</span></i>
        <i class="devicon-bootstrap-plain"><span>Bootstrap</span></i>
      </div>
    </div>
  );
};

export default FrontEnd;