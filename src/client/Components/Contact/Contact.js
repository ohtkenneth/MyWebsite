import React from 'react';
import styles from './Contact.css';

import HorizontalContactBar from './HorizontalBar/HorizontalContactBar';

const Contact = () => {
  return (
    <div id="contact" className={ styles.root }>
      <h2>Let's build something great.</h2>
      <HorizontalContactBar />
    </div>
  );
};

export default Contact;