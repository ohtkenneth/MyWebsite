import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './ProfileSection.css';

class ProfileSection extends Component {
  render() {
    return (
      <div id="profile" className={ styles.root }>
        <div className={ styles.intro }>
          <h3 className={ styles.text }>Hello, my name is</h3>
          <a href="http://www.linkedin.com/in/kenneth-oh" target="_blank"><h1 className={ styles['text-kenneth'] }>Kenneth.</h1></a>
          <h3 className={ styles.text }>I'm a full stack software engineer.</h3>
        </div>
        <div className={ styles.personal }>
          <p>I reserve a deep respect for technology and the value it provides to people of all walks of life. Learning new web technologies and building scalable applications that can impact people in meaningful ways is what I live for.</p>
        </div>
      </div>
    );
  }
}

export default ProfileSection;